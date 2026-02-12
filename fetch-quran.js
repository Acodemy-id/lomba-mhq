// Fetch all surah data sequentially and save to JSON
const fs = require('fs');

// Surah yang dibutuhkan untuk Juz 29-30 (Al-Mulk sampai An-Nas)
// Tapi kita ambil yang relevan untuk soal MHQ
const surahList = [
  { num: 67, name: 'Al-Mulk' },
  { num: 68, name: 'Al-Qalam' },
  { num: 69, name: 'Al-Haqqah' },
  { num: 70, name: 'Al-Maarij' },
  { num: 71, name: 'Nuh' },
  { num: 72, name: 'Al-Jinn' },
  { num: 73, name: 'Al-Muzzammil' },
  { num: 74, name: 'Al-Muddaththir' },
  { num: 75, name: 'Al-Qiyamah' },
  { num: 76, name: 'Al-Insan' },
  { num: 77, name: 'Al-Mursalat' },
  { num: 78, name: 'An-Naba' },
  { num: 79, name: 'An-Naziat' },
  { num: 80, name: 'Abasa' },
  { num: 81, name: 'At-Takwir' },
  { num: 82, name: 'Al-Infitar' },
  { num: 83, name: 'Al-Mutaffifin' },
  { num: 84, name: 'Al-Inshiqaq' },
  { num: 85, name: 'Al-Buruj' },
  { num: 86, name: 'At-Tariq' },
  { num: 87, name: 'Al-Ala' },
  { num: 88, name: 'Al-Ghashiyah' },
  { num: 89, name: 'Al-Fajr' },
  { num: 90, name: 'Al-Balad' },
  { num: 91, name: 'Ash-Shams' },
  { num: 92, name: 'Al-Lail' },
  { num: 93, name: 'Adh-Dhuha' },
  { num: 94, name: 'Ash-Sharh' },
  { num: 95, name: 'At-Tin' },
  { num: 96, name: 'Al-Alaq' },
  { num: 97, name: 'Al-Qadr' },
  { num: 98, name: 'Al-Bayyinah' },
  { num: 99, name: 'Az-Zalzalah' },
  { num: 100, name: 'Al-Adiyat' },
  { num: 101, name: 'Al-Qariah' },
  { num: 102, name: 'At-Takathur' },
  { num: 103, name: 'Al-Asr' },
  { num: 104, name: 'Al-Humazah' },
  { num: 105, name: 'Al-Fil' },
  { num: 106, name: 'Quraish' },
  { num: 107, name: 'Al-Maun' },
  { num: 108, name: 'Al-Kawthar' },
  { num: 109, name: 'Al-Kafirun' },
  { num: 110, name: 'An-Nasr' },
  { num: 111, name: 'Al-Masad' },
  { num: 112, name: 'Al-Ikhlas' },
  { num: 113, name: 'Al-Falaq' },
  { num: 114, name: 'An-Nas' }
];

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function fetchSurah(surahNumber) {
  try {
    const response = await fetch(`https://api.myquran.com/v3/quran/${surahNumber}?limit=100`);
    
    if (response.status === 429) {
      console.log(`    ⚠️  Rate limited, waiting 5s...`);
      await delay(5000);
      return fetchSurah(surahNumber);
    }
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data.status && data.data) {
      // Delay antar request untuk menghindari rate limit
      await delay(1000);
      return {
        number: data.data.number,
        name: data.data.name,
        name_latin: data.data.name_latin,
        number_of_ayahs: data.data.number_of_ayahs,
        ayahs: data.data.ayahs.map(a => ({
          id: a.id,
          ayah_number: a.ayah_number,
          arab: a.arab,
          translation: a.translation
        }))
      };
    }
    
    throw new Error('Invalid response');
  } catch (error) {
    console.error(`    ❌ Error: ${error.message}`);
    return null;
  }
}

async function main() {
  console.log('📖 Fetching Quran data from API MyQuran...\n');
  console.log('Mode: Sequential (one by one) + delay 1s');
  console.log('Total surah to fetch:', surahList.length);
  console.log('');
  
  const quranData = {};
  let success = 0;
  let failed = 0;
  
  for (let i = 0; i < surahList.length; i++) {
    const surah = surahList[i];
    console.log(`[${i + 1}/${surahList.length}] Fetching ${surah.name} (${surah.num})...`);
    
    const data = await fetchSurah(surah.num);
    
    if (data) {
      quranData[surah.num] = data;
      console.log(`    ✅ ${data.ayahs.length} ayat`);
      success++;
    } else {
      console.log(`    ❌ Failed`);
      failed++;
    }
  }
  
  console.log('\n' + '='.repeat(50));
  console.log('📊 Summary:');
  console.log(`   Success: ${success}/${surahList.length}`);
  console.log(`   Failed: ${failed}/${surahList.length}`);
  console.log('');
  
  // Save to JSON
  const output = {
    metadata: {
      source: 'api.myquran.com',
      fetched_at: new Date().toISOString(),
      total_surah: success,
      description: 'Juz 29-30 (Al-Mulk - An-Nas)'
    },
    data: quranData
  };
  
  fs.writeFileSync('./data/quran.json', JSON.stringify(output, null, 2));
  console.log('💾 Saved to: data/quran.json');
  console.log('✅ Done!');
}

main().catch(console.error);
