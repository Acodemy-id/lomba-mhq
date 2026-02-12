// API Route: /api/mark-used
// Menandai 1 paket sebagai digunakan (append ke list)

import { get, put } from '@vercel/blob';

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
    const { paketId } = req.body;
    
    console.log('Mark Used - Received paketId:', paketId, 'type:', typeof paketId);
    
    if (!paketId || typeof paketId !== 'number') {
      return res.status(400).json({ error: 'Invalid paketId' });
    }

    const hasBlobToken = process.env.BLOB_READ_WRITE_TOKEN;
    console.log('Mark Used - Has BLOB token:', hasBlobToken ? 'yes' : 'no');    
    let used = [];
    
    if (hasBlobToken) {
      // Ambil data dari Blob
      try {
        const blob = await get(BLOB_KEY);
        console.log('Mark Used - Blob retrieved:', blob ? 'yes' : 'no');
        
        if (blob) {
          const text = await blob.text();
          const data = JSON.parse(text);
          used = data.used || [];
          console.log('Mark Used - Current used from blob:', used);
        } else {
          console.log('Mark Used - Blob empty, using memory:', memoryStore.used);
          used = [...memoryStore.used];
        }
      } catch (e) {
        console.log('Mark Used - Blob get error:', e.message);
        used = [...memoryStore.used];
      }
    } else {
      used = [...memoryStore.used];
      console.log('Mark Used - Using memory store:', used);
    }

    // Tambah paketId jika belum ada
    if (!used.includes(paketId)) {
      used.push(paketId);
      console.log('Mark Used - Added paketId:', paketId, 'new used:', used);
    }

    // Update memory store
    memoryStore.used = used;

    if (hasBlobToken) {
      // Simpan ke Blob
      try {
        const dataToSave = JSON.stringify({ used, updatedAt: new Date().toISOString() });
        console.log('Mark Used - Saving to blob:', dataToSave.substring(0, 100));
        
        await put(BLOB_KEY, dataToSave, {
          contentType: 'application/json',
          access: 'public',
        });
        
        console.log('Mark Used - Blob save success');
      } catch (blobError) {
        console.error('Mark Used - Blob put error:', blobError);
      }
    }

    return res.status(200).json({ success: true, used });
  } catch (error) {
    console.error('Mark Used API Error:', error);
    return res.status(500).json({ error: 'Internal server error', details: error.message });
  }
}