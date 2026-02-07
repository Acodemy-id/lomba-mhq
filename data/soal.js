/**
 * DATA 30 PAKET SOAL LOMBA MHQ - REVISI
 * Juz 29 (Surat 67-77) & Juz 30 (Surat 78-114)
 * 
 * Format:
 * - Soal 1 & 2: potonganAyat (yang ditampilkan), kunciArab (1 ayat lengkap)
 * - Soal 3: kunciArab berisi 5 ayat lengkap dengan nomor
 * - Soal 4: tanpa nama surat di soal, kunciArab berisi 5 ayat awal surat berikutnya
 */

const PAKET_SOAL = [
  // PAKET 1
  {
    id: 1,
    soal: [
      {
        nomor: 1,
        jenis: "sambung",
        pertanyaan: "Sambungkan ayat berikut:",
        potonganAyat: "قُلْ أَرَأَيْتُمْ إِنْ أَصْبَحَ مَاؤُكُمْ غَوْرًا",
        referensi: "Surat Al-Mulk (67): 30 (potongan awal)",
        kunciLabel: "Lanjutan ayat 30 (Surat Al-Mulk):",
        kunciArab: "فَمَنْ يَأْتِيكُمْ بِمَاءٍ مَعِينٍ"
      },
      {
        nomor: 2,
        jenis: "sambung",
        pertanyaan: "Sambungkan ayat berikut:",
        potonganAyat: "نَّحْنُ أَعْلَمُ بِمَا يَقُولُونَ ۖ وَمَا أَنْتَ عَلَيْهِمْ بِجَبَّارٍ",
        referensi: "Surat Qaf (50): 45 (potongan awal)",
        kunciLabel: "Lanjutan ayat 45 (Surat Qaf):",
        kunciArab: "فَذَكِّرْ بِالْقُرْآنِ مَنْ يَخَافُ وَعِيدِ"
      },
      {
        nomor: 3,
        jenis: "bacakan",
        pertanyaan: "Bacakan Quran Surat Al-Haqqah ayat 19-23",
        rentangAyat: "Ayat 19-23",
        kunciLabel: "5 Ayat lengkap (Surat Al-Haqqah 19-23):",
        kunciArab: "(١٩) فَأَمَّا مَنْ أُوتِيَ كِتَابَهُ بِيَمِينِهِ ۖ فَيَقُولُ هَاؤُمُ اقْرَءُوا كِتَابِيَهْ ۝ (٢٠) إِنِّي ظَنَنتُ أَنِّي مُلَاقٍ حِسَابِيَهْ  ۝ (٢١) فَهُوَ فِي عِيشَةٍ رَّاضِيَةٍ  ۝ (٢٢) فِي جَنَّةٍ عَالِيَةٍ  ۝ (٢٣) قُطُوفُهَا دَانِيَةٍ"
      },
      {
        nomor: 4,
        jenis: "sambung-surat",
        pertanyaan: "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:",
        potonganAyat: "...قُلْ أَرَأَيْتُمْ إِنْ أَصْبَحَ مَاؤُكُمْ غَوْرًا فَمَنْ يَأْتِيكُمْ بِمَاءٍ مَعِينٍ",
        kunciLabel: "Surat berikutnya: Al-Qalam (68) - 5 ayat awal:",
        kunciArab: "(١) ن ۚ وَالْقَلَمِ وَمَا يَسْطُرُونَ  ۝ (٢) مَا أَنتَ بِنِعْمَةِ رَبِّكَ بِمَجْنُونٍ  ۝ (٣) وَإِنَّ لَكَ لَأَجْرًا غَيْرَ مَمْنُونٍ  ۝ (٤) وَإِنَّكَ لَعَلَىٰ خُلُقٍ عَظِيمٍ  ۝ (٥) فَسَتُبْصِرُ وَيُبْصِرُونَ"
      }
    ]
  },
  // PAKET 2
  {
    id: 2,
    soal: [
      {
        nomor: 1,
        jenis: "sambung",
        pertanyaan: "Sambungkan ayat berikut:",
        potonganAyat: "سَنَكْتُبُ مَا يَقُولُ وَنَمُدُّ لَهُ مِنَ الْعَذَابِ مَدًّا",
        referensi: "Surat Maryam (19): 79 (1 ayat lengkap)",
        kunciLabel: "Ayat berikutnya (Surat Maryam 80):",
        kunciArab: "وَنَرِثُهُ مَا يَقُولُ وَيَأْتِينَا فَرْدًا"
      },
      {
        nomor: 2,
        jenis: "sambung",
        pertanyaan: "Sambungkan ayat berikut:",
        potonganAyat: "إِذَا وُقِعَتِ الْوَاقِعَةُ",
        referensi: "Surat Al-Waqi'ah (56): 1 (potongan)",
        kunciLabel: "Lanjutan (Surat Al-Waqi'ah 1-2):",
        kunciArab: "لَيْسَ لِوَقْعَتِهَا كَاذِبَةٌ"
      },
      {
        nomor: 3,
        jenis: "bacakan",
        pertanyaan: "Bacakan Quran Surat Al-Ma'arij ayat 11-15",
        rentangAyat: "Ayat 11-15",
        kunciLabel: "5 Ayat lengkap (Surat Al-Ma'arij 11-15):",
        kunciArab: "(١١) الَّذِينَ هُمْ فِي صَلَاتِهِمْ خَاشِعُونَ  ۝ (١٢) وَالَّذِينَ هُمْ يَرْمُونَ الْمَارُونَ  ۝ (١٣) وَالَّذِينَ هُمْ لِلزَّكَاةِ فَاعِلُونَ  ۝ (١٤) وَالَّذِينَ هُمْ لِفُرُوجِهِمْ حَافِظُونَ  ۝ (١٥) إِلَّا عَلَىٰ أَزْوَاجِهِمْ أَوْ مَا مَلَكَتْ أَيْمَانُهُمْ فَإِنَّهُمْ غَيْرُ مَلُومِينَ"
      },
      {
        nomor: 4,
        jenis: "sambung-surat",
        pertanyaan: "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:",
        potonganAyat: "...وَمَا هُوَ عَلَى الْغَيْبِ بِضَنِينٍ",
        kunciLabel: "Surat berikutnya: Al-Infitar (82) - 5 ayat awal:",
        kunciArab: "(١) إِذَا السَّمَاءُ انفَطَرَتْ  ۝ (٢) وَإِذَا الْكَوَاكِبُ انتَثَرَتْ  ۝ (٣) وَإِذَا الْبِحَارُ فُجِّرَتْ  ۝ (٤) وَإِذَا الْقُبُورُ بُعْثِرَتْ  ۝ (٥) عَلِمَتْ نَفْسٌ مَّا قَدَّمَتْ وَأَخَّرَتْ"
      }
    ]
  },
  // PAKET 3
  {
    id: 3,
    soal: [
      {
        nomor: 1,
        jenis: "sambung",
        pertanyaan: "Sambungkan ayat berikut:",
        potonganAyat: "كَلَّا إِنَّ كِتَابَ الْفُجَّارِ",
        referensi: "Surat Al-Mutaffifin (83): 7 (potongan)",
        kunciLabel: "Lanjutan ayat 7 (Surat Al-Mutaffifin):",
        kunciArab: "لَفِي سِجِّينٍ"
      },
      {
        nomor: 2,
        jenis: "sambung",
        pertanyaan: "Sambungkan ayat berikut:",
        potonganAyat: "وَالنَّجْمِ إِذَا هَوَىٰ",
        referensi: "Surat An-Najm (53): 1 (potongan)",
        kunciLabel: "Lanjutan (Surat An-Najm 1-2):",
        kunciArab: "مَا ضَلَّ صَاحِبُكُمْ وَمَا غَوَىٰ"
      },
      {
        nomor: 3,
        jenis: "bacakan",
        pertanyaan: "Bacakan Quran Surat Al-Muddaththir ayat 5-9",
        rentangAyat: "Ayat 5-9",
        kunciLabel: "5 Ayat lengkap (Surat Al-Muddaththir 5-9):",
        kunciArab: "(٥) فَالْمُدَّثِّرُ  ۝ (٦) قُمْ فَأَنْذِرْ  ۝ (٧) وَرَبَّكَ فَكَبِّرْ  ۝ (٨) وَثِيَابَكَ فَطَهِّرْ  ۝ (٩) وَالرُّجْزَ فَاهْجُرْ"
      },
      {
        nomor: 4,
        jenis: "sambung-surat",
        pertanyaan: "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:",
        potonganAyat: "...غَفُورٌ وَدُودٌ",
        kunciLabel: "Surat berikutnya: At-Tariq (86) - 5 ayat awal:",
        kunciArab: "(١) وَالسَّمَاءِ وَالطَّارِقِ  ۝ (٢) وَمَا أَدْرَاكَ مَا الطَّارِقُ  ۝ (٣) النَّجْمُ الثَّاقِبُ  ۝ (٤) إِن كُلُّ نَفْسٍ لَّمَّا عَلَيْهَا حَافِظٌ  ۝ (٥) فَلْيَنظُرِ الْإِنسَانُ مِمَّ خُلِقَ"
      }
    ]
  },
  // PAKET 4
  {
    id: 4,
    soal: [
      {
        nomor: 1,
        jenis: "sambung",
        pertanyaan: "Sambungkan ayat berikut:",
        potonganAyat: "وَجَعَلْنَا اللَّيْلَ لِبَاسًا",
        referensi: "Surat An-Naba (78): 10 (potongan)",
        kunciLabel: "Lanjutan (Surat An-Naba 10-11):",
        kunciArab: "وَجَعَلْنَا النَّهَارَ مَعَاشًا"
      },
      {
        nomor: 2,
        jenis: "sambung",
        pertanyaan: "Sambungkan ayat berikut:",
        potonganAyat: "وَإِنَّهُ لَتَذْكِرَةٌ لِّلْمُتَّقِينَ",
        referensi: "Surat Al-Haqqah (69): 48 (1 ayat)",
        kunciLabel: "Ayat berikutnya (Surat Al-Haqqah 49):",
        kunciArab: "وَإِنَّا لَنَعْلَمُ أَنَّ مِنكُم مُّكَذِّبِينَ"
      },
      {
        nomor: 3,
        jenis: "bacakan",
        pertanyaan: "Bacakan Quran Surat An-Naba ayat 1-5",
        rentangAyat: "Ayat 1-5",
        kunciLabel: "5 Ayat lengkap (Surat An-Naba 1-5):",
        kunciArab: "(١) عَمَّ يَتَسَاءَلُونَ  ۝ (٢) عَنِ النَّبَإِ الْعَظِيمِ  ۝ (٣) الَّذِي هُمْ فِيهِ مُخْتَلِفُونَ  ۝ (٤) كَلَّا سَيَعْلَمُونَ  ۝ (٥) ثُمَّ كَلَّا سَيَعْلَمُونَ"
      },
      {
        nomor: 4,
        jenis: "sambung-surat",
        pertanyaan: "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:",
        potonganAyat: "...إِنَّ اللَّهَ بِكُلِّ شَيْءٍ عَلِيمٌ",
        kunciLabel: "Surat berikutnya: Al-Inshiqaq (84) - 5 ayat awal:",
        kunciArab: "(١) إِذَا السَّمَاءُ انشَقَّتْ  ۝ (٢) وَأَذِنَتْ لِرَبِّهَا وَحُقَّتْ  ۝ (٣) وَإِذَا الْأَرْضُ مُدَّتْ  ۝ (٤) وَأَلْقَتْ مَا فِيهَا وَتَخَلَّتْ  ۝ (٥) وَأَذِنَتْ لِرَبِّهَا وَحُقَّتْ"
      }
    ]
  },
  // PAKET 5
  {
    id: 5,
    soal: [
      {
        nomor: 1,
        jenis: "sambung",
        pertanyaan: "Sambungkan ayat berikut:",
        potonganAyat: "وَالْعَصْرِ ۝ إِنَّ الْإِنسَانَ لَفِي خُسْرٍ",
        referensi: "Surat Al-Asr (103): 1-2",
        kunciLabel: "Lanjutan (Surat Al-Asr 3):",
        kunciArab: "إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ"
      },
      {
        nomor: 2,
        jenis: "sambung",
        pertanyaan: "Sambungkan ayat berikut:",
        potonganAyat: "إِنَّ الْمُصَّدِّقِينَ وَالْمُصَّدِّقَاتِ وَأَقْرَضُوا اللَّهَ قَرْضًا حَسَنًا يُضَاعَفُ لَهُمْ",
        referensi: "Surat Al-Hadid (57): 18 (potongan)",
        kunciLabel: "Lanjutan ayat 18 (Surat Al-Hadid):",
        kunciArab: "وَلَهُمْ أَجْرٌ كَرِيمٌ"
      },
      {
        nomor: 3,
        jenis: "bacakan",
        pertanyaan: "Bacakan Quran Surat At-Takwir ayat 1-5",
        rentangAyat: "Ayat 1-5",
        kunciLabel: "5 Ayat lengkap (Surat At-Takwir 1-5):",
        kunciArab: "(١) إِذَا الشَّمْسُ كُوِّرَتْ  ۝ (٢) وَإِذَا النُّجُومُ انكَدَرَتْ  ۝ (٣) وَإِذَا الْجِبَالُ سُيِّرَتْ  ۝ (٤) وَإِذَا الْعِشَارُ عُطِّلَتْ  ۝ (٥) وَإِذَا الْوُحُوشُ حُشِرَتْ"
      },
      {
        nomor: 4,
        jenis: "sambung-surat",
        pertanyaan: "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:",
        potonganAyat: "...وَكَانَ حَقًّا عَلَيْنَا نَصْرُ الْمُؤْمِنِينَ",
        kunciLabel: "Surat berikutnya: Al-Hujurat (49) - 5 ayat awal:",
        kunciArab: "(١) يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تُقَدِّمُوا بَيْنَ يَدَيِ اللَّهِ وَرَسُولِهِ  ۝ (٢) يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تَرْفَعُوا أَصْوَاتَكُمْ فَوْقَ صَوْتِ النَّبِيِّ  ۝ (٣) إِنَّ الَّذِينَ يَغُضُّونَ أَصْوَاتَهُمْ عِندَ رَسُولِ اللَّهِ  ۝ (٤) وَمَن يُطِعِ اللَّهَ وَرَسُولَهُ فَقَدْ فَازَ فَوْزًا عَظِيمًا  ۝ (٥) إِنَّ الَّذِينَ يُنَادُونَكَ مِن وَرَاءِ الْحُجُرَاتِ"
      }
    ]
  },
  // PAKET 6-30 - Ringkas untuk efisiensi, format sama
  {
    id: 6,
    soal: [
      { nomor: 1, jenis: "sambung", pertanyaan: "Sambungkan ayat berikut:", potonganAyat: "كَلَّا لَوْ تَعْلَمُونَ عِلْمَ الْيَقِينِ", referensi: "Surat At-Takathur (102): 5", kunciLabel: "Lanjutan (Surat At-Takathur 5-6):", kunciArab: "لَتَرَوُنَّ الْجَحِيمَ" },
      { nomor: 2, jenis: "sambung", pertanyaan: "Sambungkan ayat berikut:", potonganAyat: "أَلَمْ تَرَ إِلَىٰ رَبِّكَ كَيْفَ مَدَّ الظِّلَّ", referensi: "Surat Al-Furqan (25): 45", kunciLabel: "Lanjutan ayat 45 (Surat Al-Furqan):", kunciArab: "وَلَوْ شَاءَ لَجَعَلَهُ سَاكِنًا" },
      { nomor: 3, jenis: "bacakan", pertanyaan: "Bacakan Quran Surat An-Nazi'at ayat 25-29", rentangAyat: "Ayat 25-29", kunciLabel: "5 Ayat lengkap (Surat An-Nazi'at 25-29):", kunciArab: "(٢٥) فَأَخَذَهُ اللَّهُ نَكَالَ الْآخِرَةِ وَالْأُولَىٰ  ۝ (٢٦) إِنَّ فِي ذَٰلِكَ لَعِبْرَةً لِّمَن يَخْشَىٰ  ۝ (٢٧) أَأَنتُمْ أَشَدُّ خَلْقًا أَمِ السَّمَاءُ  ۝ (٢٨) رَفَعَ سَمْكَهَا فَسَوَّاهَا  ۝ (٢٩) وَأَغْطَشَ لَيْلَهَا وَأَخْرَجَ ضُحَاهَا" },
      { nomor: 4, jenis: "sambung-surat", pertanyaan: "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:", potonganAyat: "...لِيَعْلَمَ أَنَّمَا إِلَٰهٌ إِلَٰهٌ وَاحِدٌ", kunciLabel: "Surat berikutnya: Al-Muzzammil (73) - 5 ayat awal:", kunciArab: "(١) يَا أَيُّهَا الْمُزَّمِّلُ  ۝ (٢) قُمِ اللَّيْلَ إِلَّا قَلِيلًا  ۝ (٣) نِّصْفَهُ أَوِ انقُصْ مِنْهُ قَلِيلًا  ۝ (٤) أَوْ زِدْ عَلَيْهِ وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا  ۝ (٥) إِنَّا سَنُلْقِي عَلَيْكَ قَوْلًا ثَقِيلًا" }
    ]
  },
  {
    id: 7,
    soal: [
      { nomor: 1, jenis: "sambung", pertanyaan: "Sambungkan ayat berikut:", potonganAyat: "أَفَرَأَيْتُمُ النَّارَ الَّتِي تُورُونَ", referensi: "Surat Al-Waqi'ah (56): 71", kunciLabel: "Lanjutan (Surat Al-Waqi'ah 71-72):", kunciArab: "أَأَنتُمْ أَنشَأْتُمْ شَجَرَتَهَا أَمْ نَحْنُ الْمُنشِئُونَ" },
      { nomor: 2, jenis: "sambung", pertanyaan: "Sambungkan ayat berikut:", potonganAyat: "وَأَمَّا مَنْ أُوتِيَ كِتَابَهُ وَرَاءَ ظَهْرِهِ", referensi: "Surat Al-Inshiqaq (84): 10", kunciLabel: "Lanjutan (Surat Al-Inshiqaq 10-11):", kunciArab: "فَسَوْفَ يَدْعُو ثُبُورًا" },
      { nomor: 3, jenis: "bacakan", pertanyaan: "Bacakan Quran Surat Abasa ayat 24-28", rentangAyat: "Ayat 24-28", kunciLabel: "5 Ayat lengkap (Surat Abasa 24-28):", kunciArab: "(٢٤) فَلْيَنظُرِ الْإِنسَانُ إِلَىٰ طَعَامِهِ  ۝ (٢٥) أَنَّا صَبَبْنَا الْمَاءَ صَبًّا  ۝ (٢٦) ثُمَّ شَقَقْنَا الْأَرْضَ شَقًّا  ۝ (٢٧) فَأَنبَتْنَا فِيهَا حَبًّا  ۝ (٢٨) وَعِنَبًا وَقَضْبًا" },
      { nomor: 4, jenis: "sambung-surat", pertanyaan: "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:", potonganAyat: "...لِيُذْهِبَ عَنكُمْ رِجْزَ الشَّيْطَانِ", kunciLabel: "Surat berikutnya: Al-Mumtahanah (60) - 5 ayat awal:", kunciArab: "(١) يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تَتَّخِذُوا عَدُوِّي وَعَدُوَّكُمْ أَوْلِيَاءَ  ۝ (٢) إِن يَثْقَفُوكُمْ يَكُونُوا لَكُمْ أَعْدَاءً  ۝ (٣) وَتَذَرُونَ النَّاسَ كَمَا تَذَرُونَ أَنفُسَكُمْ  ۝ (٤) قَدْ كَانَتْ لَكُمْ أُسْوَةٌ حَسَنَةٌ فِي إِبْرَاهِيمَ  ۝ (٥) رَبَّنَا لَا تَجْعَلْنَا فِتْنَةً لِّلَّذِينَ كَفَرُوا" }
    ]
  },
  {
    id: 8,
    soal: [
      { nomor: 1, jenis: "sambung", pertanyaan: "Sambungkan ayat berikut:", potonganAyat: "وَكُلُّ صَغِيرٍ وَكَبِيرٍ مُّسْتَطَرٌ", referensi: "Surat Ad-Dukhan (44): 53", kunciLabel: "Lanjutan (Surat Ad-Dukhan 53-54):", kunciArab: "إِنَّ الْمُتَّقِينَ فِي جَنَّاتٍ وَنَهَرٍ" },
      { nomor: 2, jenis: "sambung", pertanyaan: "Sambungkan ayat berikut:", potonganAyat: "وَلَقَدْ خَلَقْنَا الْإِنسَانَ وَنَعْلَمُ مَا تُوَسْوِسُ بِهِ نَفْسُهُ", referensi: "Surat Qaf (50): 16", kunciLabel: "Lanjutan ayat 16 (Surat Qaf):", kunciArab: "وَنَحْنُ أَقْرَبُ إِلَيْهِ مِنْ حَبْلِ الْوَرِيدِ" },
      { nomor: 3, jenis: "bacakan", pertanyaan: "Bacakan Quran Surat Al-Lail ayat 5-9", rentangAyat: "Ayat 5-9", kunciLabel: "5 Ayat lengkap (Surat Al-Lail 5-9):", kunciArab: "(٥) فَأَمَّا مَنْ أَعْطَىٰ وَاتَّقَىٰ  ۝ (٦) وَصَدَّقَ بِالْحُسْنَىٰ  ۝ (٧) فَسَنُيَسِّرُهُ لِلْيُسْرَىٰ  ۝ (٨) وَأَمَّا مَن بَخِلَ وَاسْتَغْنَىٰ  ۝ (٩) وَكَذَّبَ بِالْحُسْنَىٰ" },
      { nomor: 4, jenis: "sambung-surat", pertanyaan: "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:", potonganAyat: "...عَلِيمٌ خَبِيرٌ", kunciLabel: "Surat berikutnya: Al-Mutaffifin (83) - 5 ayat awal:", kunciArab: "(١) وَيْلٌ لِّلْمُطَفِّفِينَ  ۝ (٢) الَّذِينَ إِذَا اكْتَالُوا عَلَى النَّاسِ يَسْتَوْفُونَ  ۝ (٣) وَإِذَا كَالُوهُمْ أَو وَّزَنُوهُمْ يُخْسِرُونَ  ۝ (٤) أَلَا يَظُنُّ أُولَٰئِكَ أَنَّهُم مَّبْعُوثُونَ  ۝ (٥) لِيَوْمٍ عَظِيمٍ" }
    ]
  },
  {
    id: 9,
    soal: [
      { nomor: 1, jenis: "sambung", pertanyaan: "Sambungkan ayat berikut:", potonganAyat: "وَالنَّازِعَاتِ غَرْقًا", referensi: "Surat An-Nazi'at (79): 1", kunciLabel: "Lanjutan (Surat An-Nazi'at 1-2):", kunciArab: "وَالنَّاشِطَاتِ نَشْطًا" },
      { nomor: 2, jenis: "sambung", pertanyaan: "Sambungkan ayat berikut:", potonganAyat: "يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تَقُومُوا", referensi: "Surat An-Nur (24): 61 (potongan)", kunciLabel: "Lanjutan (Surat An-Nur 61):", kunciArab: "وَكُلُوا مِنَ الطَّعَامِ حَتَّىٰ يُذْنَ لَكُمْ" },
      { nomor: 3, jenis: "bacakan", pertanyaan: "Bacakan Quran Surat Al-Infitar ayat 6-10", rentangAyat: "Ayat 6-10", kunciLabel: "5 Ayat lengkap (Surat Al-Infitar 6-10):", kunciArab: "(٦) يَا أَيُّهَا الْإِنسَانُ مَا غَرَّكَ بِرَبِّكَ الْكَرِيمِ  ۝ (٧) الَّذِي خَلَقَكَ فَسَوَّاكَ فَعَدَلَكَ  ۝ (٨) فِي أَيِّ صُورَةٍ مَّا شَاءَ رَكَّبَكَ  ۝ (٩) كَلَّا بَلْ تُكَذِّبُونَ بِالدِّينِ  ۝ (١٠) وَإِنَّ عَلَيْكُمْ لَحَافِظِينَ" },
      { nomor: 4, jenis: "sambung-surat", pertanyaan: "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:", potonganAyat: "...وَكَفَىٰ بِاللَّهِ شَهِيدًا", kunciLabel: "Surat berikutnya: Ar-Rum (30) - 5 ayat awal:", kunciArab: "(١) الم  ۝ (٢) غُلِبَتِ الرُّومُ  ۝ (٣) فِي أَدْنَى الْأَرْضِ وَهُم مِّن بَعْدِ غَلَبِهِمْ سَيَغْلِبُونَ  ۝ (٤) فِي بِضْعِ سِنِينَ ۗ لِلَّهِ الْأَمْرُ مِن قَبْلُ وَمِن بَعْدُ  ۝ (٥) يَوْمَئِذٍ يَفْرَحُ الْمُؤْمِنُونَ" }
    ]
  },
  {
    id: 10,
    soal: [
      { nomor: 1, jenis: "sambung", pertanyaan: "Sambungkan ayat berikut:", potonganAyat: "وَجَعَلْنَا اللَّيْلَ لِبَاسًا", referensi: "Surat An-Naba (78): 10", kunciLabel: "Lanjutan (Surat An-Naba 10-11):", kunciArab: "وَجَعَلْنَا النَّهَارَ مَعَاشًا" },
      { nomor: 2, jenis: "sambung", pertanyaan: "Sambungkan ayat berikut:", potonganAyat: "وَقِيلَ يَا أَرْضُ ابْلَعِي مَاءَكِ وَيَا سَمَاءُ أَقْلِعِي", referensi: "Surat Hud (11): 44 (potongan)", kunciLabel: "Lanjutan (Surat Hud 44):", kunciArab: "وَغِيضَ الْمَاءُ وَقُضِيَ الْأَمْرُ وَاسْتَوَتْ عَلَى الْجُودِيِّ" },
      { nomor: 3, jenis: "bacakan", pertanyaan: "Bacakan Quran Surat Al-Mursalat ayat 11-15", rentangAyat: "Ayat 11-15", kunciLabel: "5 Ayat lengkap (Surat Al-Mursalat 11-15):", kunciArab: "(١١) وَإِذَا الرُّسُلُ أُقِّتَتْ  ۝ (١٢) لِأَيِّ يَوْمٍ أُجِّلَتْ  ۝ (١٣) لِيَوْمِ الْفَصْلِ  ۝ (١٤) وَمَا أَدْرَاكَ مَا يَوْمُ الْفَصْلِ  ۝ (١٥) وَيْلٌ يَوْمَئِذٍ لِّلْمُكَذِّبِينَ" },
      { nomor: 4, jenis: "sambung-surat", pertanyaan: "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:", potonganAyat: "...فَاسْتَغْفِرْهُ ثُمَّ تُوبُوا إِلَيْهِ ۚ إِنَّ رَبِّي رَحِيمٌ وَدُودٌ", kunciLabel: "Surat berikutnya: An-Nur (24) - 5 ayat awal:", kunciArab: "(١) سُورَةٌ أَنزَلْنَاهَا وَفَرَضْنَاهَا وَأَنزَلْنَا فِيهَا آيَاتٍ بَيِّنَاتٍ  ۝ (٢) الزَّانِيَةُ وَالزَّانِي فَاجْلِدُوا كُلَّ وَاحِدٍ مِّنْهُمَا مِائَةَ جَلْدَةٍ  ۝ (٣) الزَّانِي لَا يَنكِحُ إِلَّا زَانِيَةً أَوْ مُشْرِكَةً  ۝ (٤) وَالَّذِينَ يَرْمُونَ الْمُحْصَنَاتِ ثُمَّ لَمْ يَأْتُوا بِأَرْبَعَةِ شُهَدَاءَ  ۝ (٥) إِلَّا الَّذِينَ تَابُوا مِن بَعْدِ ذَٰلِكَ وَأَصْلَحُوا" }
    ]
  },
  // PAKET 11-30 - Lanjutkan pola yang sama
  {
    id: 11,
    soal: [
      { nomor: 1, jenis: "sambung", pertanyaan: "Sambungkan ayat berikut:", potonganAyat: "لَقَدْ خَلَقْنَا الْإِنسَانَ فِي كَبَدٍ", referensi: "Surat Al-Balad (90): 4", kunciLabel: "Lanjutan (Surat Al-Balad 4-5):", kunciArab: "أَيَحْسَبُ أَن لَّن يَقْدِرَ عَلَيْهِ أَحَدٌ" },
      { nomor: 2, jenis: "sambung", pertanyaan: "Sambungkan ayat berikut:", potonganAyat: "أَلَمْ نَجْعَلِ الْأَرْضَ مِهَادًا", referensi: "Surat An-Naba (78): 6", kunciLabel: "Lanjutan (Surat An-Naba 6-7):", kunciArab: "وَالْجِبَالَ أَوْتَادًا" },
      { nomor: 3, jenis: "bacakan", pertanyaan: "Bacakan Quran Surat Al-Jumu'ah ayat 1-5", rentangAyat: "Ayat 1-5", kunciLabel: "5 Ayat lengkap (Surat Al-Jumu'ah 1-5):", kunciArab: "(١) يُسَبِّحُ لِلَّهِ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ الْمَلِكِ الْقُدُّوسِ الْعَزِيزِ الْحَكِيمِ  ۝ (٢) هُوَ الَّذِي بَعَثَ فِي الْأُمِّيِّينَ رَسُولًا مِّنْهُمْ  ۝ (٣) وَآخَرِينَ مِنْهُمْ لَمَّا يَلْحَقُوا بِهِمْ  ۝ (٤) ذَٰلِكَ فَضْلُ اللَّهِ يُؤْتِيهِ مَن يَشَاءُ  ۝ (٥) مَثَلُ الَّذِينَ حُمِّلُوا التَّوْرَاةَ ثُمَّ لَمْ يَحْمِلُوهَا" },
      { nomor: 4, jenis: "sambung-surat", pertanyaan: "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:", potonganAyat: "...وَكَانَ حَقًّا عَلَيْنَا نَصْرُ الْمُؤْمِنِينَ", kunciLabel: "Surat berikutnya: Al-Hujurat (49) - 5 ayat awal:", kunciArab: "(١) يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تُقَدِّمُوا بَيْنَ يَدَيِ اللَّهِ وَرَسُولِهِ  ۝ (٢) يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تَرْفَعُوا أَصْوَاتَكُمْ  ۝ (٣) إِنَّ الَّذِينَ يَغُضُّونَ أَصْوَاتَهُمْ  ۝ (٤) وَمَن يُطِعِ اللَّهَ وَرَسُولَهُ فَقَدْ فَازَ  ۝ (٥) إِنَّ الَّذِينَ يُنَادُونَكَ مِن وَرَاءِ الْحُجُرَاتِ" }
    ]
  },
  {
    id: 12,
    soal: [
      { nomor: 1, jenis: "sambung", pertanyaan: "Sambungkan ayat berikut:", potonganAyat: "وَمَا نُرِيهِم مِّنْ آيَةٍ إِلَّا هِيَ أَكْبَرُ مِنْ أُخْتِهَا", referensi: "Surat Az-Zukhruf (43): 48", kunciLabel: "Lanjutan ayat 48 (Surat Az-Zukhruf):", kunciArab: "وَأَخَذْنَاهُم بِالْعَذَابِ لَعَلَّهُمْ يَرْجِعُونَ" },
      { nomor: 2, jenis: "sambung", pertanyaan: "Sambungkan ayat berikut:", potonganAyat: "وَمَن يُشْرِكْ بِاللَّهِ فَكَأَنَّمَا خَرَّ مِنَ السَّمَاءِ", referensi: "Surat Al-Hajj (22): 31 (potongan)", kunciLabel: "Lanjutan ayat 31 (Surat Al-Hajj):", kunciArab: "فَتَخْطَفُهُ الطَّيْرُ أَوْ تَهْوِي بِهِ الرِّيحُ فِي مَكَانٍ سَحِيقٍ" },
      { nomor: 3, jenis: "bacakan", pertanyaan: "Bacakan Quran Surat Al-Mumtahanah ayat 1-5", rentangAyat: "Ayat 1-5", kunciLabel: "5 Ayat lengkap (Surat Al-Mumtahanah 1-5):", kunciArab: "(١) يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تَتَّخِذُوا عَدُوِّي وَعَدُوَّكُمْ أَوْلِيَاءَ  ۝ (٢) إِن يَثْقَفُوكُمْ يَكُونُوا لَكُمْ أَعْدَاءً  ۝ (٣) وَتَذَرُونَ النَّاسَ كَمَا تَذَرُونَ أَنفُسَكُمْ  ۝ (٤) قَدْ كَانَتْ لَكُمْ أُسْوَةٌ حَسَنَةٌ فِي إِبْرَاهِيمَ  ۝ (٥) رَبَّنَا لَا تَجْعَلْنَا فِتْنَةً لِّلَّذِينَ كَفَرُوا" },
      { nomor: 4, jenis: "sambung-surat", pertanyaan: "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:", potonganAyat: "...يَا أَيَّتُهَا النَّفْسُ الْمُطْمَئِنَّةُ", kunciLabel: "Surat berikutnya: Al-Balad (90) - 5 ayat awal:", kunciArab: "(١) لَا أُقْسِمُ بِهَٰذَا الْبَلَدِ  ۝ (٢) وَأَنتَ حِلٌّ بِهَٰذَا الْبَلَدِ  ۝ (٣) وَوَالِدٍ وَمَا وَلَدَ  ۝ (٤) لَقَدْ خَلَقْنَا الْإِنسَانَ فِي كَبَدٍ  ۝ (٥) أَيَحْسَبُ أَن لَّن يَقْدِرَ عَلَيْهِ أَحَدٌ" }
    ]
  },
  {
    id: 13,
    soal: [
      { nomor: 1, jenis: "sambung", pertanyaan: "Sambungkan ayat berikut:", potonganAyat: "وَالطَّيْرَ مَحْشُورَةً", referensi: "Surat Sad (38): 19", kunciLabel: "Lanjutan (Surat Sad 19-20):", kunciArab: "كُلٌّ لَّهُ أَوَّابٌ" },
      { nomor: 2, jenis: "sambung", pertanyaan: "Sambungkan ayat berikut:", potonganAyat: "وَإِذَا رَأَوْهُمْ قَالُوا إِنَّ هَٰؤُلَاءِ لَضَالُّونَ", referensi: "Surat Al-Mutaffifin (83): 32", kunciLabel: "Lanjutan (Surat Al-Mutaffifin 32-33):", kunciArab: "وَأُلْقُوا إِلَيْهَا" },
      { nomor: 3, jenis: "bacakan", pertanyaan: "Bacakan Quran Surat Al-Ghashiyah ayat 1-5", rentangAyat: "Ayat 1-5", kunciLabel: "5 Ayat lengkap (Surat Al-Ghashiyah 1-5):", kunciArab: "(١) هَلْ أَتَاكَ حَدِيثُ الْغَاشِيَةِ  ۝ (٢) وُجُوهٌ يَوْمَئِذٍ خَاشِعَةٌ  ۝ (٣) عَامِلَةٌ نَّاصِبَةٌ  ۝ (٤) تَصْلَىٰ نَارًا حَامِيَةً  ۝ (٥) تُسْقَىٰ مِنْ عَيْنٍ آنِيَةٍ" },
      { nomor: 4, jenis: "sambung-surat", pertanyaan: "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:", potonganAyat: "...فَإِذَا شَاءَ اللَّهُ لَأَمَرَهُمْ", kunciLabel: "Surat berikutnya: Al-Insan (76) - 5 ayat awal:", kunciArab: "(١) هَلْ أَتَىٰ عَلَى الْإِنسَانِ حِينٌ مِّنَ الدَّهْرِ  ۝ (٢) إِنَّا خَلَقْنَا الْإِنسَانَ مِن نُّطْفَةٍ أَمْشَاجٍ  ۝ (٣) إِنَّا خَلَقْنَاهُمْ وَشَدَدْنَا أَسْرَهُمْ  ۝ (٤) إِنَّا أَعْتَدْنَا لِلْكَافِرِينَ سَلَاسِلَ  ۝ (٥) إِنَّ الْأَبْرَارَ يَشْرَبُونَ مِن كَأْسٍ كَانَ مِزَاجُهَا كَافُورًا" }
    ]
  },
  {
    id: 14,
    soal: [
      { nomor: 1, jenis: "sambung", pertanyaan: "Sambungkan ayat berikut:", potonganAyat: "فَذُوقُوا بِمَا نَسِيتُمْ لِقَاءَ يَوْمِكُمْ هَٰذَا", referensi: "Surat As-Sajdah (32): 14 (potongan)", kunciLabel: "Lanjutan ayat 14 (Surat As-Sajdah):", kunciArab: "إِنَّا نَسِينَاكُمْ ۖ وَذُوقُوا عَذَابَ الْخُلْدِ بِمَا كُنتُمْ تَعْمَلُونَ" },
      { nomor: 2, jenis: "sambung", pertanyaan: "Sambungkan ayat berikut:", potonganAyat: "وَلَقَدْ فَتَنَّا الَّذِينَ مِن قَبْلِهِمْ", referensi: "Surat Al-Ankabut (29): 3", kunciLabel: "Lanjutan ayat 3 (Surat Al-Ankabut):", kunciArab: "فَلَيَعْلَمَنَّ اللَّهُ الَّذِينَ صَدَقُوا وَلَيَعْلَمَنَّ الْكَاذِبِينَ" },
      { nomor: 3, jenis: "bacakan", pertanyaan: "Bacakan Quran Surat Al-Fajr ayat 1-5", rentangAyat: "Ayat 1-5", kunciLabel: "5 Ayat lengkap (Surat Al-Fajr 1-5):", kunciArab: "(١) وَالْفَجْرِ  ۝ (٢) وَلَيَالٍ عَشْرٍ  ۝ (٣) وَالشَّفْعِ وَالْوَتْرِ  ۝ (٤) وَاللَّيْلِ إِذَا يَسْرِ  ۝ (٥) هَلْ فِي ذَٰلِكَ قَسَمٌ لِّذِي حِجْرٍ" },
      { nomor: 4, jenis: "sambung-surat", pertanyaan: "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:", potonganAyat: "...وَصَدَقَتِ الْمُصَدِّقُونَ", kunciLabel: "Surat berikutnya: Ad-Duha (93) - 5 ayat awal:", kunciArab: "(١) وَالضُّحَىٰ  ۝ (٢) وَاللَّيْلِ إِذَا سَجَىٰ  ۝ (٣) مَا وَدَّعَكَ رَبُّكَ وَمَا قَلَىٰ  ۝ (٤) وَلَلْآخِرَةُ خَيْرٌ لَّكَ مِنَ الْأُولَىٰ  ۝ (٥) وَلَسَوْفَ يُعْطِيكَ رَبُّكَ فَتَرْضَىٰ" }
    ]
  },
  {
    id: 15,
    soal: [
      { nomor: 1, jenis: "sambung", pertanyaan: "Sambungkan ayat berikut:", potonganAyat: "بَلَىٰ قَادِرِينَ عَلَىٰ أَن نُّسَوِّيَ بَنَانَهُ", referensi: "Surat Al-Qiyamah (75): 4", kunciLabel: "Lanjutan (Surat Al-Qiyamah 4-5):", kunciArab: "بَلْ يُرِيدُ الْإِنسَانُ لِيَفْجُرَ أَمَامَهُ" },
      { nomor: 2, jenis: "sambung", pertanyaan: "Sambungkan ayat berikut:", potonganAyat: "إِذْ قَالَ لِأَبِيهِ وَقَوْمِهِ مَا هَٰذِهِ التَّمَاثِيلُ", referensi: "Surat Al-Anbiya (21): 52 (potongan)", kunciLabel: "Lanjutan ayat 52 (Surat Al-Anbiya):", kunciArab: "الَّتِي أَنتُمْ لَهَا عَاكِفُونَ" },
      { nomor: 3, jenis: "bacakan", pertanyaan: "Bacakan Quran Surat Al-Inshirah ayat 1-5", rentangAyat: "Ayat 1-5", kunciLabel: "5 Ayat lengkap (Surat Al-Inshirah 1-5):", kunciArab: "(١) أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ  ۝ (٢) وَوَضَعْنَا عَنكَ وِزْرَكَ  ۝ (٣) الَّذِي أَنقَضَ ظَهْرَكَ  ۝ (٤) وَرَفَعْنَا لَكَ ذِكْرَكَ  ۝ (٥) فَإِنَّ مَعَ الْعُسْرِ يُسْرًا" },
      { nomor: 4, jenis: "sambung-surat", pertanyaan: "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:", potonganAyat: "...وَيَمْنَعُونَ الْمَاعُونَ", kunciLabel: "Surat berikutnya: Al-Kawthar (108) - 3 ayat:", kunciArab: "(١) إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ  ۝ (٢) فَصَلِّ لِرَبِّكَ وَانْحَرْ  ۝ (٣) إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ" }
    ]
  },
  {
    id: 16,
    soal: [
      { nomor: 1, jenis: "sambung", pertanyaan: "Sambungkan ayat berikut:", potonganAyat: "وَيَرَى الَّذِينَ أُوتُوا الْعِلْمَ الَّذِي أُنزِلَ إِلَيْكَ مِن رَّبِّكَ", referensi: "Surat Saba (34): 6 (potongan)", kunciLabel: "Lanjutan ayat 6 (Surat Saba):", kunciArab: "هُوَ الْحَقَّ وَيَهْدِي إِلَىٰ صِرَاطِ الْعَزِيزِ الْحَمِيدِ" },
      { nomor: 2, jenis: "sambung", pertanyaan: "Sambungkan ayat berikut:", potonganAyat: "وَمَا قَدَرُوا اللَّهَ حَقَّ قَدْرِهِ وَالْأَرْضُ جَمِيعًا قَبْضَتُهُ يَوْمَ الْقِيَامَةِ", referensi: "Surat Az-Zumar (39): 67 (potongan)", kunciLabel: "Lanjutan ayat 67 (Surat Az-Zumar):", kunciArab: "وَالسَّمَاوَاتُ مَطْوِيَّاتٌ بِيَمِينِهِ ۚ سُبْحَانَهُ وَتَعَالَىٰ عَمَّا يُشْرِكُونَ" },
      { nomor: 3, jenis: "bacakan", pertanyaan: "Bacakan Quran Surat An-Nasr ayat 1-3", rentangAyat: "Ayat 1-3", kunciLabel: "3 Ayat lengkap (Surat An-Nasr 1-3):", kunciArab: "(١) إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ  ۝ (٢) وَرَأَيْتَ النَّاسَ يَدْخُلُونَ فِي دِينِ اللَّهِ أَفْوَاجًا  ۝ (٣) فَسَبِّحْ بِحَمْدِ رَبِّكَ وَاسْتَغْفِرْهُ ۚ إِنَّهُ كَانَ تَوَّابًا" },
      { nomor: 4, jenis: "sambung-surat", pertanyaan: "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:", potonganAyat: "...سَلَامٌ هِيَ حَتَّىٰ مَطْلَعِ الْفَجْرِ", kunciLabel: "Surat berikutnya: Al-Bayyinah (98) - 5 ayat lengkap:", kunciArab: "(١) لَمْ يَكُنِ الَّذِينَ كَفَرُوا مِنْ أَهْلِ الْكِتَابِ وَالْمُشْرِكِينَ مُنفَكِّينَ  ۝ (٢) مَا تَنزَّلَ مِنْ بَيِّنَةٍ مِّن رَّبِّهَا  ۝ (٣) وَفِيهَا كِتَابٌ قَيِّمٌ  ۝ (٤) وَمَا تَفَرَّقَ الَّذِينَ أُوتُوا الْكِتَابَ  ۝ (٥) وَمَا أُمِرُوا إِلَّا لِيَعْبُدُوا اللَّهَ" }
    ]
  },
  {
    id: 17,
    soal: [
      { nomor: 1, jenis: "sambung", pertanyaan: "Sambungkan ayat berikut:", potonganAyat: "وَفِي الْأَرْضِ آيَاتٌ لِّلْمُوقِنِينَ", referensi: "Surat Adh-Dhariyat (51): 20", kunciLabel: "Lanjutan (Surat Adh-Dhariyat 20-21):", kunciArab: "وَفِي أَنفُسِكُمْ ۚ أَفَلَا تُبْصِرُونَ" },
      { nomor: 2, jenis: "sambung", pertanyaan: "Sambungkan ayat berikut:", potonganAyat: "وَعَدَ اللَّهُ الَّذِينَ آمَنُوا مِنكُمْ وَعَمِلُوا الصَّالِحَاتِ لَيَسْتَخْلِفَنَّهُمْ فِي الْأَرْضِ", referensi: "Surat An-Nur (24): 55 (potongan)", kunciLabel: "Lanjutan ayat 55 (Surat An-Nur):", kunciArab: "كَمَا اسْتَخْلَفَ الَّذِينَ مِن قَبْلِهِمْ" },
      { nomor: 3, jenis: "bacakan", pertanyaan: "Bacakan Quran Surat Al-Alaq ayat 1-5", rentangAyat: "Ayat 1-5", kunciLabel: "5 Ayat lengkap (Surat Al-Alaq 1-5):", kunciArab: "(١) اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ  ۝ (٢) خَلَقَ الْإِنسَانَ مِنْ عَلَقٍ  ۝ (٣) اقْرَأْ وَرَبُّكَ الْأَكْرَمُ  ۝ (٤) الَّذِي عَلَّمَ بِالْقَلَمِ  ۝ (٥) عَلَّمَ الْإِنسَانَ مَا لَمْ يَعْلَمْ" },
      { nomor: 4, jenis: "sambung-surat", pertanyaan: "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:", potonganAyat: "...ثُمَّ لَتُسْأَلُنَّ يَوْمَئِذٍ عَنِ النَّعِيمِ", kunciLabel: "Surat berikutnya: Al-Asr (103) - 3 ayat lengkap:", kunciArab: "(١) وَالْعَصْرِ  ۝ (٢) إِنَّ الْإِنسَانَ لَفِي خُسْرٍ  ۝ (٣) إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ" }
    ]
  },
  {
    id: 18,
    soal: [
      { nomor: 1, jenis: "sambung", pertanyaan: "Sambungkan ayat berikut:", potonganAyat: "إِنَّا كُلَّ شَيْءٍ خَلَقْنَاهُ بِقَدَرٍ", referensi: "Surat Al-Qamar (54): 49", kunciLabel: "Lanjutan (Surat Al-Qamar 49-50):", kunciArab: "وَمَا أَمْرُنَا إِلَّا وَاحِدَةٌ كَلَمْحٍ بِالْبَصَرِ" },
      { nomor: 2, jenis: "sambung", pertanyaan: "Sambungkan ayat berikut:", potonganAyat: "وَنَفْسٍ وَمَا سَوَّاهَا", referensi: "Surat Ash-Shams (91): 7", kunciLabel: "Lanjutan (Surat Ash-Shams 7-8):", kunciArab: "فَأَلْهَمَهَا فُجُورَهَا وَتَقْوَاهَا" },
      { nomor: 3, jenis: "bacakan", pertanyaan: "Bacakan Quran Surat Al-Buruj ayat 1-5", rentangAyat: "Ayat 1-5", kunciLabel: "5 Ayat lengkap (Surat Al-Buruj 1-5):", kunciArab: "(١) وَالسَّمَاءِ ذَاتِ الْبُرُوجِ  ۝ (٢) وَالْيَوْمِ الْمَوْعُودِ  ۝ (٣) وَشَاهِدٍ وَمَشْهُودٍ  ۝ (٤) قُتِلَ أَصْحَابُ الْأُخْدُودِ  ۝ (٥) النَّارِ ذَاتِ الْوَقُودِ" },
      { nomor: 4, jenis: "sambung-surat", pertanyaan: "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:", potonganAyat: "...فِي ذَٰلِكَ لَعِبْرَةٌ لِّمَن يَخْشَىٰ", kunciLabel: "Surat berikutnya: Abasa (80) - 5 ayat awal:", kunciArab: "(١) عَبَسَ وَتَوَلَّىٰ  ۝ (٢) أَن جَاءَهُ الْأَعْمَىٰ  ۝ (٣) وَمَا يُدْرِيكَ لَعَلَّهُ يَزَّكَّىٰ  ۝ (٤) أَوْ يَذَّكَّرُ فَتَنفَعَهُ الذِّكْرَىٰ  ۝ (٥) أَمَّا مَنِ اسْتَغْنَىٰ" }
    ]
  },
  {
    id: 19,
    soal: [
      { nomor: 1, jenis: "sambung", pertanyaan: "Sambungkan ayat berikut:", potonganAyat: "فَاصْفَحْ عَنْهُمْ وَقُلْ سَلَامٌ", referensi: "Surat Az-Zukhruf (43): 89 (potongan)", kunciLabel: "Lanjutan ayat 89 (Surat Az-Zukhruf):", kunciArab: "فَسَوْفَ يَعْلَمُونَ" },
      { nomor: 2, jenis: "sambung", pertanyaan: "Sambungkan ayat berikut:", potonganAyat: "وَأَمَّا السَّائِلَ فَلَا تَنْهَرْ", referensi: "Surat Ad-Duha (93): 10", kunciLabel: "Lanjutan (Surat Ad-Duha 10-11):", kunciArab: "وَأَمَّا بِنِعْمَةِ رَبِّكَ فَحَدِّثْ" },
      { nomor: 3, jenis: "bacakan", pertanyaan: "Bacakan Quran Surat Al-Kafirun ayat 1-6", rentangAyat: "Ayat 1-6", kunciLabel: "6 Ayat lengkap (Surat Al-Kafirun 1-6):", kunciArab: "(١) قُلْ يَا أَيُّهَا الْكَافِرُونَ  ۝ (٢) لَا أَعْبُدُ مَا تَعْبُدُونَ  ۝ (٣) وَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ  ۝ (٤) وَلَا أَنَا عَابِدٌ مَّا عَبَدتُّمْ  ۝ (٥) وَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ  ۝ (٦) لَكُمْ دِينُكُمْ وَلِيَ دِينِ" },
      { nomor: 4, jenis: "sambung-surat", pertanyaan: "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:", potonganAyat: "...وَاتَّخَذُوا شُرَكَاءَ اللَّهِ", kunciLabel: "Surat berikutnya: Al-Muzzammil (73) - 5 ayat awal:", kunciArab: "(١) يَا أَيُّهَا الْمُزَّمِّلُ  ۝ (٢) قُمِ اللَّيْلَ إِلَّا قَلِيلًا  ۝ (٣) نِّصْفَهُ أَوِ انقُصْ مِنْهُ قَلِيلًا  ۝ (٤) أَوْ زِدْ عَلَيْهِ وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا  ۝ (٥) إِنَّا سَنُلْقِي عَلَيْكَ قَوْلًا ثَقِيلًا" }
    ]
  },
  {
    id: 20,
    soal: [
      { nomor: 1, jenis: "sambung", pertanyaan: "Sambungkan ayat berikut:", potonganAyat: "وَهُوَ الَّذِي يَقْبَلُ التَّوْبَةَ عَنْ عِبَادِهِ وَيَعْفُو عَنِ السَّيِّئَاتِ", referensi: "Surat Ash-Shura (42): 25 (potongan)", kunciLabel: "Lanjutan ayat 25 (Surat Ash-Shura):", kunciArab: "وَيَعْلَمُ مَا تَفْعَلُونَ" },
      { nomor: 2, jenis: "sambung", pertanyaan: "Sambungkan ayat berikut:", potonganAyat: "إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ", referensi: "Surat An-Nasr (110): 1", kunciLabel: "Lanjutan (Surat An-Nasr 1-2):", kunciArab: "وَرَأَيْتَ النَّاسَ يَدْخُلُونَ فِي دِينِ اللَّهِ أَفْوَاجًا" },
      { nomor: 3, jenis: "bacakan", pertanyaan: "Bacakan Quran Surat Al-Kawthar ayat 1-3", rentangAyat: "Ayat 1-3", kunciLabel: "3 Ayat lengkap (Surat Al-Kawthar 1-3):", kunciArab: "(١) إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ  ۝ (٢) فَصَلِّ لِرَبِّكَ وَانْحَرْ  ۝ (٣) إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ" },
      { nomor: 4, jenis: "sambung-surat", pertanyaan: "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:", potonganAyat: "...وَإِنَّ عَلَيْهِ لَقَادِرُونَ", kunciLabel: "Surat berikutnya: Al-A'la (87) - 5 ayat awal:", kunciArab: "(١) سَبِّحِ اسْمَ رَبِّكَ الْأَعْلَى  ۝ (٢) الَّذِي خَلَقَ فَسَوَّىٰ  ۝ (٣) وَالَّذِي قَدَّرَ فَهَدَىٰ  ۝ (٤) وَالَّذِي أَخْرَجَ الْمَرْعَىٰ  ۝ (٥) فَجَعَلَهُ غُثَاءً أَحْوَىٰ" }
    ]
  },
  // PAKET 21-30 - Pola sama, disederhanakan
  {
    id: 21,
    soal: [
      { nomor: 1, jenis: "sambung", pertanyaan: "Sambungkan ayat berikut:", potonganAyat: "وَهُوَ الَّذِي أَنشَأَ جَنَّاتٍ مَّعْرُوشَاتٍ وَغَيْرَ مَعْرُوشَاتٍ", referensi: "Surat Al-An'am (6): 141 (potongan)", kunciLabel: "Lanjutan ayat 141 (Surat Al-An'am):", kunciArab: "وَالنَّخْلَ وَالزَّرْعَ مُخْتَلِفًا أُكُلُهُ وَالزَّيْتُونَ وَالرُّمَّانَ" },
      { nomor: 2, jenis: "sambung", pertanyaan: "Sambungkan ayat berikut:", potonganAyat: "وَالشَّمْسِ وَضُحَاهَا", referensi: "Surat Ash-Shams (91): 1", kunciLabel: "Lanjutan (Surat Ash-Shams 1-2):", kunciArab: "وَالْقَمَرِ إِذَا تَلَاهَا" },
      { nomor: 3, jenis: "bacakan", pertanyaan: "Bacakan Quran Surat An-Nas ayat 1-6", rentangAyat: "Ayat 1-6", kunciLabel: "6 Ayat lengkap (Surat An-Nas 1-6):", kunciArab: "(١) قُلْ أَعُوذُ بِرَبِّ النَّاسِ  ۝ (٢) مَلِكِ النَّاسِ  ۝ (٣) إِلَٰهِ النَّاسِ  ۝ (٤) مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ  ۝ (٥) الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ  ۝ (٦) مِنَ الْجِنَّةِ وَالنَّاسِ" },
      { nomor: 4, jenis: "sambung-surat", pertanyaan: "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:", potonganAyat: "...إِنَّ اللَّهَ يُحِبُّ الْمُقْسِطِينَ", kunciLabel: "Surat berikutnya: Qaf (50) - 5 ayat awal:", kunciArab: "(١) ق ۚ وَالْقُرْآنِ الْمَجِيدِ  ۝ (٢) بَلْ عَجِبُوا أَن جَاءَهُم مُّنذِرٌ مِّنْهُمْ  ۝ (٣) إِذَا مِتْنَا وَكُنَّا تُرَابًا ۖ ذَٰلِكَ رَجْعٌ بَعِيدٌ  ۝ (٤) قَدْ عَلِمْنَا مَا تَنقُصُ الْأَرْضُ مِنْهُمْ  ۝ (٥) وَجَاءَتْ كُلُّ نَفْسٍ مَّعَهَا سَائِقٌ وَشَهِيدٌ" }
    ]
  },
  {
    id: 22,
    soal: [
      { nomor: 1, jenis: "sambung", pertanyaan: "Sambungkan ayat berikut:", potonganAyat: "فَاصْبِرْ لِحُكْمِ رَبِّكَ وَلَا تَكُن كَصَاحِبِ الْحُوتِ", referensi: "Surat Al-Qalam (68): 48", kunciLabel: "Lanjutan ayat 48 (Surat Al-Qalam):", kunciArab: "إِذْ نَادَىٰ وَهُوَ مَكْظُومٌ" },
      { nomor: 2, jenis: "sambung", pertanyaan: "Sambungkan ayat berikut:", potonganAyat: "وَأَنذِرْهُمْ يَوْمَ الْآزِفَةِ إِذِ الْقُلُوبُ لَدَى الْحَنَاجِرِ كَاظِمِينَ", referensi: "Surat Ghafir (40): 18", kunciLabel: "Lanjutan ayat 18 (Surat Ghafir):", kunciArab: "مَا لِلظَّالِمِينَ مِنْ حَمِيمٍ وَلَا شَفِيعٍ يُطَاعُ" },
      { nomor: 3, jenis: "bacakan", pertanyaan: "Bacakan Quran Surat Al-Falaq ayat 1-5", rentangAyat: "Ayat 1-5", kunciLabel: "5 Ayat lengkap (Surat Al-Falaq 1-5):", kunciArab: "(١) قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ  ۝ (٢) مِن شَرِّ مَا خَلَقَ  ۝ (٣) وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ  ۝ (٤) وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ  ۝ (٥) وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ" },
      { nomor: 4, jenis: "sambung-surat", pertanyaan: "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:", potonganAyat: "...ذَٰلِكَ هُوَ الْفَلَاحُ الْأَكْبَرُ", kunciLabel: "Surat berikutnya: Az-Zalzalah (99) - 5 ayat lengkap:", kunciArab: "(١) إِذَا زُلْزِلَتِ الْأَرْضُ زِلْزَالَهَا  ۝ (٢) وَأَخْرَجَتِ الْأَرْضُ أَثْقَالَهَا  ۝ (٣) وَقَالَ الْإِنسَانُ مَا لَهَا  ۝ (٤) يَوْمَئِذٍ تُحَدِّثُ أَخْبَارَهَا  ۝ (٥) بِأَنَّ رَبَّكَ أَوْحَىٰ لَهَا" }
    ]
  },
  {
    id: 23,
    soal: [
      { nomor: 1, jenis: "sambung", pertanyaan: "Sambungkan ayat berikut:", potonganAyat: "يُخْرِجُ الْحَيَّ مِنَ الْمَيِّتِ وَيُخْرِجُ الْمَيِّتَ مِنَ الْحَيِّ", referensi: "Surat Ar-Rum (30): 19", kunciLabel: "Lanjutan ayat 19 (Surat Ar-Rum):", kunciArab: "وَيُحْيِي الْأَرْضَ بَعْدَ مَوْتِهَا ۚ وَكَذَٰلِكَ تُخْرَجُونَ" },
      { nomor: 2, jenis: "sambung", pertanyaan: "Sambungkan ayat berikut:", potonganAyat: "هُوَ الَّذِي يُصَلِّي عَلَيْكُمْ وَمَلَائِكَتُهُ لِيُخْرِجَكُم مِّنَ الظُّلُمَاتِ", referensi: "Surat Al-Ahzab (33): 43", kunciLabel: "Lanjutan ayat 43 (Surat Al-Ahzab):", kunciArab: "إِلَى النُّورِ ۚ وَكَانَ بِالْمُؤْمِنِينَ رَحِيمًا" },
      { nomor: 3, jenis: "bacakan", pertanyaan: "Bacakan Quran Surat Al-Fil ayat 1-5", rentangAyat: "Ayat 1-5", kunciLabel: "5 Ayat lengkap (Surat Al-Fil 1-5):", kunciArab: "(١) أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَابِ الْفِيلِ  ۝ (٢) أَلَمْ يَجْعَلْ كَيْدَهُمْ فِي تَضْلِيلٍ  ۝ (٣) وَأَرْسَلَ عَلَيْهِمْ طَيْرًا أَبَابِيلَ  ۝ (٤) تَرْمِيهِم بِحِجَارَةٍ مِّن سِجِّيلٍ  ۝ (٥) فَجَعَلَهُمْ كَعَصْفٍ مَّأْكُولٍ" },
      { nomor: 4, jenis: "sambung-surat", pertanyaan: "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:", potonganAyat: "...وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ", kunciLabel: "Surat berikutnya: Al-Falaq (113) - 5 ayat lengkap:", kunciArab: "(١) قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ  ۝ (٢) مِن شَرِّ مَا خَلَقَ  ۝ (٣) وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ  ۝ (٤) وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ  ۝ (٥) وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ" }
    ]
  },
  {
    id: 24,
    soal: [
      { nomor: 1, jenis: "sambung", pertanyaan: "Sambungkan ayat berikut:", potonganAyat: "قُل لَّن يُصِيبَنَا إِلَّا مَا كَتَبَ اللَّهُ لَنَا", referensi: "Surat At-Tawbah (9): 51", kunciLabel: "Lanjutan ayat 51 (Surat At-Tawbah):", kunciArab: "هُوَ مَوْلَانَا ۖ وَعَلَى اللَّهِ فَلْيَتَوَكَّلِ الْمُؤْمِنُونَ" },
      { nomor: 2, jenis: "sambung", pertanyaan: "Sambungkan ayat berikut:", potonganAyat: "أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ", referensi: "Surat Al-Inshirah (94): 1", kunciLabel: "Lanjutan (Surat Al-Inshirah 1-2):", kunciArab: "وَوَضَعْنَا عَنكَ وِزْرَكَ" },
      { nomor: 3, jenis: "bacakan", pertanyaan: "Bacakan Quran Surat Quraysh ayat 1-4", rentangAyat: "Ayat 1-4", kunciLabel: "4 Ayat lengkap (Surat Quraysh 1-4):", kunciArab: "(١) لِإِيلَافِ قُرَيْشٍ  ۝ (٢) إِيلَافِهِمْ رِحْلَةَ الشِّتَاءِ وَالصَّيْفِ  ۝ (٣) فَلْيَعْبُدُوا رَبَّ هَٰذَا الْبَيْتِ  ۝ (٤) الَّذِي أَطْعَمَهُم مِّن جُوعٍ وَآمَنَهُم مِّنْ خَوْفٍ" },
      { nomor: 4, jenis: "sambung-surat", pertanyaan: "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:", potonganAyat: "...فَبِأَيِّ حَدِيثٍ بَعْدَهُ يُؤْمِنُونَ", kunciLabel: "Surat berikutnya: An-Naba (78) - 5 ayat awal:", kunciArab: "(١) عَمَّ يَتَسَاءَلُونَ  ۝ (٢) عَنِ النَّبَإِ الْعَظِيمِ  ۝ (٣) الَّذِي هُمْ فِيهِ مُخْتَلِفُونَ  ۝ (٤) كَلَّا سَيَعْلَمُونَ  ۝ (٥) ثُمَّ كَلَّا سَيَعْلَمُونَ" }
    ]
  },
  {
    id: 25,
    soal: [
      { nomor: 1, jenis: "sambung", pertanyaan: "Sambungkan ayat berikut:", potonganAyat: "لَا إِلَٰهَ إِلَّا هُوَ يُحْيِي وَيُمِيتُ", referensi: "Surat Ad-Dukhan (44): 8", kunciLabel: "Lanjutan ayat 8 (Surat Ad-Dukhan):", kunciArab: "رَبُّكُمْ وَرَبُّ آبَائِكُمُ الْأَوَّلِينَ" },
      { nomor: 2, jenis: "sambung", pertanyaan: "Sambungkan ayat berikut:", potonganAyat: "إِذَا السَّمَاءُ انفَطَرَتْ", referensi: "Surat Al-Infitar (82): 1", kunciLabel: "Lanjutan (Surat Al-Infitar 1-2):", kunciArab: "وَإِذَا الْكَوَاكِبُ انتَثَرَتْ" },
      { nomor: 3, jenis: "bacakan", pertanyaan: "Bacakan Quran Surat Al-Ma'un ayat 1-7", rentangAyat: "Ayat 1-7", kunciLabel: "7 Ayat lengkap (Surat Al-Ma'un 1-7):", kunciArab: "(١) أَرَأَيْتَ الَّذِي يُكَذِّبُ بِالدِّينِ  ۝ (٢) فَذَٰلِكَ الَّذِي يَدُعُّ الْيَتِيمَ  ۝ (٣) وَلَا يَحُضُّ عَلَىٰ طَعَامِ الْمِسْكِينِ  ۝ (٤) فَوَيْلٌ لِّلْمُصَلِّينَ  ۝ (٥) الَّذِينَ هُمْ عَن صَلَاتِهِمْ سَاهُونَ  ۝ (٦) الَّذِينَ هُمْ يُرَاءُونَ  ۝ (٧) وَيَمْنَعُونَ الْمَاعُونَ" },
      { nomor: 4, jenis: "sambung-surat", pertanyaan: "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:", potonganAyat: "...أَلَيْسَ اللَّهُ بِأَحْكَمِ الْحَاكِمِينَ", kunciLabel: "Surat berikutnya: Al-Alaq (96) - 5 ayat awal:", kunciArab: "(١) اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ  ۝ (٢) خَلَقَ الْإِنسَانَ مِنْ عَلَقٍ  ۝ (٣) اقْرَأْ وَرَبُّكَ الْأَكْرَمُ  ۝ (٤) الَّذِي عَلَّمَ بِالْقَلَمِ  ۝ (٥) عَلَّمَ الْإِنسَانَ مَا لَمْ يَعْلَمْ" }
    ]
  },
  {
    id: 26,
    soal: [
      { nomor: 1, jenis: "sambung", pertanyaan: "Sambungkan ayat berikut:", potonganAyat: "إِنَّ رَبَّكَ هُوَ أَعْلَمُ مَن يَضِلُّ عَن سَبِيلِهِ", referensi: "Surat Al-An'am (6): 117", kunciLabel: "Lanjutan ayat 117 (Surat Al-An'am):", kunciArab: "وَهُوَ أَعْلَمُ بِالْمُهْتَدِينَ" },
      { nomor: 2, jenis: "sambung", pertanyaan: "Sambungkan ayat berikut:", potonganAyat: "وَلَا تَكُونُوا كَالَّذِينَ قَالُوا سَمِعْنَا وَهُمْ لَا يَسْمَعُونَ", referensi: "Surat Al-Anfal (8): 21", kunciLabel: "Lanjutan (Surat Al-Anfal 21-22):", kunciArab: "إِنَّ شَرَّ الدَّوَابِّ عِندَ اللَّهِ الصُّمُّ الْبُكْمُ الَّذِينَ لَا يَعْقِلُونَ" },
      { nomor: 3, jenis: "bacakan", pertanyaan: "Bacakan Quran Surat Al-Humazah ayat 1-5", rentangAyat: "Ayat 1-5", kunciLabel: "5 Ayat lengkap (Surat Al-Humazah 1-5):", kunciArab: "(١) وَيْلٌ لِّكُلِّ هُمَزَةٍ لُّمَزَةٍ  ۝ (٢) الَّذِي جَمَعَ مَالًا وَعَدَّدَهُ  ۝ (٣) يَحْسَبُ أَنَّ مَالَهُ أَخْلَدَهُ  ۝ (٤) كَلَّا ۖ لَيُنبَذَنَّ فِي الْحُطَمَةِ  ۝ (٥) وَمَا أَدْرَاكَ مَا الْحُطَمَةُ" },
      { nomor: 4, jenis: "sambung-surat", pertanyaan: "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:", potonganAyat: "...إِنَّ رَبِّي عَلَىٰ صِرَاطٍ مُّسْتَقِيمٍ", kunciLabel: "Surat berikutnya: Al-A'raf (7) - 5 ayat awal:", kunciArab: "(١) المص  ۝ (٢) كِتَابٌ أُنزِلَ إِلَيْكَ فَلَا يَكُن فِي صَدْرِكَ حَرَجٌ مِّنْهُ  ۝ (٣) اتَّبِعُوا مَا أُنزِلَ إِلَيْكُم مِّن رَّبِّكُمْ  ۝ (٤) وَلَا تَأْكُلُوا مِمَّا لَمْ يُذْكَرِ اسْمُ اللَّهِ عَلَيْهِ  ۝ (٥) وَاجْتَنِبُوا قَوْلَ الزُّورِ" }
    ]
  },
  {
    id: 27,
    soal: [
      { nomor: 1, jenis: "sambung", pertanyaan: "Sambungkan ayat berikut:", potonganAyat: "يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَكُونُوا مَعَ الصَّادِقِينَ", referensi: "Surat At-Tawbah (9): 119 (1 ayat lengkap)", kunciLabel: "Ayat terakhir surat - lanjutkan:", kunciArab: "هُوَ مَوْلَىٰ الَّذِينَ آمَنُوا" },
      { nomor: 2, jenis: "sambung", pertanyaan: "Sambungkan ayat berikut:", potonganAyat: "وَلَقَدْ أَرْسَلْنَا مُوسَىٰ بِآيَاتِنَا أَنْ أَخْرِجْ قَوْمَكَ مِنَ الظُّلُمَاتِ", referensi: "Surat Ibrahim (14): 5", kunciLabel: "Lanjutan ayat 5 (Surat Ibrahim):", kunciArab: "إِلَى النُّورِ" },
      { nomor: 3, jenis: "bacakan", pertanyaan: "Bacakan Quran Surat At-Tariq ayat 1-5", rentangAyat: "Ayat 1-5", kunciLabel: "5 Ayat lengkap (Surat At-Tariq 1-5):", kunciArab: "(١) وَالسَّمَاءِ وَالطَّارِقِ  ۝ (٢) وَمَا أَدْرَاكَ مَا الطَّارِقُ  ۝ (٣) النَّجْمُ الثَّاقِبُ  ۝ (٤) إِن كُلُّ نَفْسٍ لَّمَّا عَلَيْهَا حَافِظٌ  ۝ (٥) فَلْيَنظُرِ الْإِنسَانُ مِمَّ خُلِقَ" },
      { nomor: 4, jenis: "sambung-surat", pertanyaan: "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:", potonganAyat: "...قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنفُسِهِمْ", kunciLabel: "Surat berikutnya: Ghafir (40) - 5 ayat awal:", kunciArab: "(١) حم  ۝ (٢) تَنزِيلُ الْكِتَابِ مِنَ اللَّهِ الْعَزِيزِ الْعَلِيمِ  ۝ (٣) غَافِرِ الذَّنبِ وَقَابِلِ التَّوْبِ شَدِيدِ الْعِقَابِ  ۝ (٤) مَا يُجَادِلُ فِي آيَاتِ اللَّهِ إِلَّا الَّذِينَ كَفَرُوا  ۝ (٥) فَوَيْلٌ لِّلَّذِينَ كَفَرُوا مِن يَوْمِهِمُ الَّذِي يُوعَدُونَ" }
    ]
  },
  {
    id: 28,
    soal: [
      { nomor: 1, jenis: "sambung", pertanyaan: "Sambungkan ayat berikut:", potonganAyat: "وَهُوَ الَّذِي أَنزَلَ مِنَ السَّمَاءِ مَاءً", referensi: "Surat Al-An'am (6): 99", kunciLabel: "Lanjutan ayat 99 (Surat Al-An'am):", kunciArab: "فَأَخْرَجْنَا بِهِ نَبَاتَ كُلِّ شَيْءٍ" },
      { nomor: 2, jenis: "sambung", pertanyaan: "Sambungkan ayat berikut:", potonganAyat: "فَأَمَّا مَنْ أُوتِيَ كِتَابَهُ بِيَمِينِهِ", referensi: "Surat Al-Haqqah (69): 19", kunciLabel: "Lanjutan (Surat Al-Haqqah 19-20):", kunciArab: "فَيَقُولُ هَاؤُمُ اقْرَءُوا كِتَابِيَهْ" },
      { nomor: 3, jenis: "bacakan", pertanyaan: "Bacakan Quran Surat Al-A'la ayat 8-11", rentangAyat: "Ayat 8-11", kunciLabel: "4 Ayat lengkap (Surat Al-A'la 8-11):", kunciArab: "(٨) وَنُيَسِّرُكَ لِلْيُسْرَىٰ  ۝ (٩) فَذَكِّرْ إِن نَّفَعَتِ الذِّكْرَىٰ  ۝ (١٠) سَيَذَّكَّرُ مَن يَخْشَىٰ  ۝ (١١) وَيَتَجَنَّبُهَا الْأَشْقَى" },
      { nomor: 4, jenis: "sambung-surat", pertanyaan: "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:", potonganAyat: "...وَرَبِّكَ أَعْلَمُ بِمَن فِي السَّمَاوَاتِ وَالْأَرْضِ", kunciLabel: "Surat berikutnya: Fatir (35) - 5 ayat awal:", kunciArab: "(١) الْحَمْدُ لِلَّهِ فَاطِرِ السَّمَاوَاتِ وَالْأَرْضِ  ۝ (٢) مَا يَفْتَحِ اللَّهُ لِلنَّاسِ مِن رَّحْمَةٍ  ۝ (٣) يَا أَيُّهَا النَّاسُ اذْكُرُوا نِعْمَتَ اللَّهِ عَلَيْكُمْ  ۝ (٤) وَإِن يُكَذِّبُوكَ فَقَدْ كُذِّبَتْ رُسُلٌ مِّن قَبْلِكَ  ۝ (٥) يَا أَيُّهَا النَّاسُ إِنَّ وَعْدَ اللَّهِ حَقٌّ" }
    ]
  },
  {
    id: 29,
    soal: [
      { nomor: 1, jenis: "sambung", pertanyaan: "Sambungkan ayat berikut:", potonganAyat: "يَا أَيُّهَا النَّاسُ ضُرِبَ مَثَلٌ فَاسْتَمِعُوا لَهُ ۚ إِنَّ الَّذِينَ تَدْعُونَ مِن دُونِ اللَّهِ", referensi: "Surat Al-Hajj (22): 73 (potongan)", kunciLabel: "Lanjutan ayat 73 (Surat Al-Hajj):", kunciArab: "لَن يَخْلُقُوا ذُبَابًا وَلَوِ اجْتَمَعُوا لَهُ" },
      { nomor: 2, jenis: "sambung", pertanyaan: "Sambungkan ayat berikut:", potonganAyat: "الَّذِي جَعَلَ لَكُم مِّنَ الشَّجَرِ الْأَخْضَرِ نَارًا", referensi: "Surat Ya-Sin (36): 80", kunciLabel: "Lanjutan ayat 80 (Surat Ya-Sin):", kunciArab: "فَإِذَا أَنتُم مِّنْهُ تُوقِدُونَ" },
      { nomor: 3, jenis: "bacakan", pertanyaan: "Bacakan Quran Surat Al-Mutaffifin ayat 1-5", rentangAyat: "Ayat 1-5", kunciLabel: "5 Ayat lengkap (Surat Al-Mutaffifin 1-5):", kunciArab: "(١) وَيْلٌ لِّلْمُطَفِّفِينَ  ۝ (٢) الَّذِينَ إِذَا اكْتَالُوا عَلَى النَّاسِ يَسْتَوْفُونَ  ۝ (٣) وَإِذَا كَالُوهُمْ أَو وَّزَنُوهُمْ يُخْسِرُونَ  ۝ (٤) أَلَا يَظُنُّ أُولَٰئِكَ أَنَّهُم مَّبْعُوثُونَ  ۝ (٥) لِيَوْمٍ عَظِيمٍ" },
      { nomor: 4, jenis: "sambung-surat", pertanyaan: "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:", potonganAyat: "...فَسَبِّحْ بِاسْمِ رَبِّكَ الْعَظِيمِ", kunciLabel: "Surat berikutnya: Al-Hadid (57) - 5 ayat awal:", kunciArab: "(١) سَبَّحَ لِلَّهِ مَا فِي السَّمَاوَاتِ وَالْأَرْضِ  ۝ (٢) لَهُ مُلْكُ السَّمَاوَاتِ وَالْأَرْضِ  ۝ (٣) هُوَ الْأَوَّلُ وَالْآخِرُ وَالظَّاهِرُ وَالْبَاطِنُ  ۝ (٤) هُوَ الَّذِي خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ فِي سِتَّةِ أَيَّامٍ  ۝ (٥) يُولِجُ اللَّيْلَ فِي النَّهَارِ وَيُولِجُ النَّهَارَ فِي اللَّيْلِ" }
    ]
  },
  {
    id: 30,
    soal: [
      { nomor: 1, jenis: "sambung", pertanyaan: "Sambungkan ayat berikut:", potonganAyat: "قُلِ ادْعُوا الَّذِينَ زَعَمْتُم مِّن دُونِ اللَّهِ", referensi: "Surat Saba (34): 22 (potongan)", kunciLabel: "Lanjutan ayat 22 (Surat Saba):", kunciArab: "لَا يَمْلِكُونَ مِثْقَالَ ذَرَّةٍ فِي السَّمَاوَاتِ وَلَا فِي الْأَرْضِ" },
      { nomor: 2, jenis: "sambung", pertanyaan: "Sambungkan ayat berikut:", potonganAyat: "إِنَّ اللَّهَ يُمْسِكُ السَّمَاوَاتِ وَالْأَرْضَ أَن تَزُولَا", referensi: "Surat Fatir (35): 41", kunciLabel: "Lanjutan ayat 41 (Surat Fatir):", kunciArab: "وَلَئِن زَالَتَا إِنْ أَمْسَكَهُمَا مِنْ أَحَدٍ مِّن بَعْدِهِ" },
      { nomor: 3, jenis: "bacakan", pertanyaan: "Bacakan Quran Surat Az-Zalzalah ayat 1-8", rentangAyat: "Ayat 1-8", kunciLabel: "8 Ayat lengkap (Surat Az-Zalzalah 1-8):", kunciArab: "(١) إِذَا زُلْزِلَتِ الْأَرْضُ زِلْزَالَهَا  ۝ (٢) وَأَخْرَجَتِ الْأَرْضُ أَثْقَالَهَا  ۝ (٣) وَقَالَ الْإِنسَانُ مَا لَهَا  ۝ (٤) يَوْمَئِذٍ تُحَدِّثُ أَخْبَارَهَا  ۝ (٥) بِأَنَّ رَبَّكَ أَوْحَىٰ لَهَا  ۝ (٦) يَوْمَئِذٍ يَصْدُرُ النَّاسُ أَشْتَاتًا  ۝ (٧) فَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَرَهُ  ۝ (٨) وَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ شَرًّا يَرَهُ" },
      { nomor: 4, jenis: "sambung-surat", pertanyaan: "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:", potonganAyat: "...وَاسْتَغْفِرْهُ ۚ إِنَّهُ كَانَ تَوَّابًا", kunciLabel: "Surat berikutnya: Al-Masad (111) - 5 ayat lengkap:", kunciArab: "(١) تَبَّتْ يَدَا أَبِي لَهَبٍ وَتَبَّ  ۝ (٢) مَا أَغْنَىٰ عَنْهُ مَالُهُ وَمَا كَسَبَ  ۝ (٣) سَيَصْلَىٰ نَارًا ذَاتَ لَهَبٍ  ۝ (٤) وَامْرَأَتُهُ حَمَّالَةَ الْحَطَبِ  ۝ (٥) فِي جِيدِهَا حَبْلٌ مِّن مَّسَدٍ" }
    ]
  }
];

// Konfigurasi Font untuk Accessibility
const FONT_CONFIG = {
  families: ['Amiri', 'Scheherazade', 'Traditional Arabic', 'Arial'],
  sizes: [16, 18, 20, 22, 24, 26, 28, 30, 32],
  colors: ['#d4af37', '#f4d03f', '#ffffff', '#e8d5b7', '#c9b037']
};