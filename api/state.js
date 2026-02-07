// API Route: /api/state
// Mengambil daftar paket yang sudah digunakan dari Vercel Blob

import { get, put } from '@vercel/blob';

const BLOB_KEY = 'mhq-used-paket.json';

// In-memory fallback
let memoryStore = { used: [] };

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    if (req.method === 'GET') {
      // Cek apakah BLOB_READ_WRITE_TOKEN tersedia
      const hasBlobToken = process.env.BLOB_READ_WRITE_TOKEN;
      
      if (hasBlobToken) {
        // Ambil data dari Blob
        try {
          const blob = await get(BLOB_KEY);
          if (blob) {
            const text = await blob.text();
            const data = JSON.parse(text);
            return res.status(200).json({ used: data.used || [] });
          }
        } catch (e) {
          console.log('Blob get error:', e.message);
        }
      } else {
        console.log('Using memory store (no BLOB_READ_WRITE_TOKEN)');
      }
      
      // Return memory fallback atau empty
      return res.status(200).json({ used: memoryStore.used });
    }

    if (req.method === 'POST') {
      const { used } = req.body;
      
      if (!Array.isArray(used)) {
        return res.status(400).json({ error: 'Invalid data format' });
      }

      const hasBlobToken = process.env.BLOB_READ_WRITE_TOKEN;
      
      if (hasBlobToken) {
        // Simpan ke Blob
        try {
          await put(BLOB_KEY, JSON.stringify({ used, updatedAt: new Date().toISOString() }), {
            contentType: 'application/json',
            access: 'public',
          });
        } catch (blobError) {
          console.error('Blob put error:', blobError);
          memoryStore.used = used;
        }
      } else {
        // Simpan ke memory
        memoryStore.used = used;
      }

      return res.status(200).json({ success: true, used });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error('State API Error:', error);
    return res.status(500).json({ error: 'Internal server error', details: error.message });
  }
}