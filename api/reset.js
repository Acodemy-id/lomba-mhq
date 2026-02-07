// API Route: /api/reset
// Reset semua state (hapus semua paket yang sudah digunakan)

import { put } from '@vercel/blob';

const BLOB_KEY = 'mhq-used-paket.json';

// In-memory fallback
let memoryStore = { used: [] };

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Reset memory
    memoryStore.used = [];
    
    const hasBlobToken = process.env.BLOB_READ_WRITE_TOKEN;
    
    if (hasBlobToken) {
      // Reset ke array kosong di Blob
      try {
        await put(BLOB_KEY, JSON.stringify({ used: [], resetAt: new Date().toISOString() }), {
          contentType: 'application/json',
          access: 'public',
        });
      } catch (blobError) {
        console.error('Blob put error:', blobError);
      }
    } else {
      console.log('Reset memory store (no BLOB_READ_WRITE_TOKEN)');
    }

    return res.status(200).json({ success: true, used: [] });
  } catch (error) {
    console.error('Reset API Error:', error);
    return res.status(500).json({ error: 'Internal server error', details: error.message });
  }
}