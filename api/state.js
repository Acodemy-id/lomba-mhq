// API Route: /api/state
// Mengambil daftar paket yang sudah digunakan dari Vercel Blob

import { get } from '@vercel/blob';

const BLOB_KEY = 'mhq-used-paket.json';

// Shared memory store (akan di-reset saat serverless cold start)
let memoryStore = { used: [] };

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    if (req.method === 'GET') {
      const hasBlobToken = process.env.BLOB_READ_WRITE_TOKEN;
      
      if (hasBlobToken) {
        try {
          const blob = await get(BLOB_KEY);
          console.log('State GET - Blob retrieved:', blob ? 'yes' : 'no');
          
          if (blob) {
            const text = await blob.text();
            console.log('State GET - Blob text:', text.substring(0, 100));
            
            const data = JSON.parse(text);
            const used = data.used || [];
            
            // Update memory store juga
            memoryStore.used = used;
            
            return res.status(200).json({ used });
          } else {
            console.log('State GET - Blob not found, using memory:', memoryStore.used);
          }
        } catch (e) {
          console.error('State GET - Blob error:', e.message);
        }
      } else {
        console.log('State GET - No BLOB token, using memory:', memoryStore.used);
      }
      
      return res.status(200).json({ used: memoryStore.used });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error('State API Error:', error);
    return res.status(500).json({ error: 'Internal server error', details: error.message });
  }
}