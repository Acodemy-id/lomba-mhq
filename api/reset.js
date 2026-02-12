// API Route: /api/reset
// Reset semua state (hapus semua paket yang sudah digunakan)

import { put } from '@vercel/blob';

const BLOB_KEY = 'mhq-used-paket.json';

// Shared memory store
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
    console.log('Reset - Starting reset...');
    
    // Reset memory
    memoryStore.used = [];
    console.log('Reset - Memory store cleared');
    
    const hasBlobToken = process.env.BLOB_READ_WRITE_TOKEN;
    console.log('Reset - Has BLOB token:', hasBlobToken ? 'yes' : 'no');
    
    if (hasBlobToken) {
      // Reset ke array kosong di Blob
      try {
        await put(BLOB_KEY, JSON.stringify({ used: [], resetAt: new Date().toISOString() }), {
          contentType: 'application/json',
          access: 'public',
        });
        console.log('Reset - Blob reset success');
      } catch (blobError) {
        console.error('Reset - Blob put error:', blobError);
      }
    } else {
      console.log('Reset - No BLOB token, memory only');
    }

    return res.status(200).json({ success: true, used: [] });
  } catch (error) {
    console.error('Reset API Error:', error);
    return res.status(500).json({ error: 'Internal server error', details: error.message });
  }
}