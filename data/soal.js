/**
 * DATA 30 PAKET SOAL LOMBA MHQ
 * Juz 29 (Surat 67-77) & Juz 30 (Surat 78-114)
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
        potonganAyat: "قُلْ أَرَأَيْتُمْ إِنْ أَصْبَحَ مَاؤُكُمْ غَوْرًا فَمَنْ يَأْتِيكُمْ بِمَاءٍ مَعِينٍ",
        referensi: "Surat Al-Mulk (67): 30",
        kunciJawaban: "Surat Al-Mulk ayat 30 - ayat terakhir surat"
      },
      {
        nomor: 2,
        jenis: "sambung",
        pertanyaan: "Sambungkan ayat berikut:",
        potonganAyat: "نَّحْنُ أَعْلَمُ بِمَا يَقُولُونَ ۖ وَمَا أَنْتَ عَلَيْهِمْ بِجَبَّارٍ ۖ فَذَكِّرْ بِالْقُرْآنِ مَنْ يَخَافُ وَعِيدِ",
        referensi: "Surat Qaf (50): 45",
        kunciJawaban: "Surat Qaf ayat 45 - ayat terakhir surat"
      },
      {
        nomor: 3,
        jenis: "bacakan",
        pertanyaan: "Bacakan Quran Surat Al-Haqqah ayat 19-23",
        rentangAyat: "19-23 (5 ayat)",
        kunciJawaban: "فَأَمَّا مَنْ أُوتِيَ كِتَابَهُ بِيَمِينِهِ فَيَقُولُ هَاؤُمُ اقْرَءُوا كِتَابِيَهْ... حَسْبِيَهْ"
      },
      {
        nomor: 4,
        jenis: "sambung-surat",
        pertanyaan: "Sambungkan ayat terakhir Surat Al-Mulk ke awal Surat Al-Qalam:",
        potonganAyat: "...فَمَنْ يَأْتِيكُمْ بِمَاءٍ مَعِينٍ",
        kunciJawaban: "ن ۚ وَالْقَلَمِ وَمَا يَسْطُرُونَ"
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
        referensi: "Surat Maryam (19): 79",
        kunciJawaban: "Surat Maryam ayat 79"
      },
      {
        nomor: 2,
        jenis: "sambung",
        pertanyaan: "Sambungkan ayat berikut:",
        potonganAyat: "إِذَا وُقِعَتِ الْوَاقِعَةُ ۝ لَيْسَ لِوَقْعَتِهَا كَاذِبَةٌ",
        referensi: "Surat Al-Waqi'ah (56): 1-2",
        kunciJawaban: "Surat Al-Waqi'ah ayat 1-2 - Awal surat"
      },
      {
        nomor: 3,
        jenis: "bacakan",
        pertanyaan: "Bacakan Quran Surat Al-Ma'arij ayat 11-15",
        rentangAyat: "11-15 (5 ayat)",
        kunciJawaban: "الَّذِينَ هُمْ فِي صَلَاتِهِمْ خَاشِعُونَ... وَالَّذِينَ هُمْ لِأَمَانَاتِهِمْ وَعَهْدِهِمْ رَاعُونَ"
      },
      {
        nomor: 4,
        jenis: "sambung-surat",
        pertanyaan: "Sambungkan ayat terakhir Surat At-Takwir ke awal Surat Al-Infitar:",
        potonganAyat: "...وَمَا هُوَ عَلَى الْغَيْبِ بِضَنِينٍ",
        kunciJawaban: "إِذَا السَّمَاءُ انْفَطَرَتْ"
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
        potonganAyat: "كَلَّا إِنَّ كِتَابَ الْفُجَّارِ لَفِي سِجِّينٍ",
        referensi: "Surat Al-Mutaffifin (83): 7",
        kunciJawaban: "Surat Al-Mutaffifin ayat 7"
      },
      {
        nomor: 2,
        jenis: "sambung",
        pertanyaan: "Sambungkan ayat berikut:",
        potonganAyat: "وَالنَّجْمِ إِذَا هَوَىٰ ۝ مَا ضَلَّ صَاحِبُكُمْ وَمَا غَوَىٰ",
        referensi: "Surat An-Najm (53): 1-2",
        kunciJawaban: "Surat An-Najm ayat 1-2 - Awal surat"
      },
      {
        nomor: 3,
        jenis: "bacakan",
        pertanyaan: "Bacakan Quran Surat Al-Muddaththir ayat 5-9",
        rentangAyat: "5-9 (5 ayat)",
        kunciJawaban: "فَالْمُدَّثِّرُ ۝ قُمْ فَأَنْذِرْ ۝ وَرَبَّكَ فَكَبِّرْ ۝ وَثِيَابَكَ فَطَهِّرْ ۝ وَالرُّجْزَ فَاهْجُرْ"
      },
      {
        nomor: 4,
        jenis: "sambung-surat",
        pertanyaan: "Sambungkan ayat terakhir Surat Al-Buruj ke awal Surat At-Tariq:",
        potonganAyat: "...غَفُورٌ وَدُودٌ",
        kunciJawaban: "وَالسَّمَاءِ وَالطَّارِقِ"
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
        potonganAyat: "وَفَرِيقًا هَدَىٰ ۝ فَأَمَّا الَّذِينَ كَفَرُوا فَأُولَٰئِكَ يَصْطَلُونَ",
        referensi: "Surat Al-Jinn (72): 16-17",
        kunciJawaban: "Surat Al-Jinn ayat 16-17"
      },
      {
        nomor: 2,
        jenis: "sambung",
        pertanyaan: "Sambungkan ayat berikut:",
        potonganAyat: "وَإِنَّهُ لَتَذْكِرَةٌ لِّلْمُتَّقِينَ ۝ وَإِنَّا لَنَعْلَمُ أَنَّ مِنكُم مُّكَذِّبِينَ",
        referensi: "Surat Al-Haqqah (69): 48-49",
        kunciJawaban: "Surat Al-Haqqah ayat 48-49"
      },
      {
        nomor: 3,
        jenis: "bacakan",
        pertanyaan: "Bacakan Quran Surat Al-Hashr ayat 21-25",
        rentangAyat: "21-25 (5 ayat)",
        kunciJawaban: "لَوْ أَنزَلْنَا هَٰذَا الْقُرْآنَ عَلَىٰ جَبَلٍ... الْمُؤْمِنُونَ"
      },
      {
        nomor: 4,
        jenis: "sambung-surat",
        pertanyaan: "Sambungkan ayat terakhir Surat Al-Inshiqaq ke awal Surat Al-Buruj:",
        potonganAyat: "...وَلَهُمْ عَذَابٌ مُّهِينٌ",
        kunciJawaban: "وَالسَّمَاءِ ذَاتِ الْبُرُوجِ"
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
        kunciJawaban: "Surat Al-Asr ayat 1-2 - Awal surat"
      },
      {
        nomor: 2,
        jenis: "sambung",
        pertanyaan: "Sambungkan ayat berikut:",
        potonganAyat: "إِنَّ الْمُصَّدِّقِينَ وَالْمُصَّدِّقَاتِ وَأَقْرَضُوا اللَّهَ قَرْضًا حَسَنًا يُضَاعَفُ لَهُمْ وَلَهُمْ أَجْرٌ كَرِيمٌ",
        referensi: "Surat Al-Hadid (57): 18",
        kunciJawaban: "Surat Al-Hadid ayat 18"
      },
      {
        nomor: 3,
        jenis: "bacakan",
        pertanyaan: "Bacakan Quran Surat An-Naba ayat 1-5",
        rentangAyat: "1-5 (5 ayat)",
        kunciJawaban: "عَمَّ يَتَسَاءَلُونَ ۝ عَنِ النَّبَإِ الْعَظِيمِ ۝ الَّذِي هُمْ فِيهِ مُخْتَلِفُونَ ۝ كَلَّا سَيَعْلَمُونَ ۝ ثُمَّ كَلَّا سَيَعْلَمُونَ"
      },
      {
        nomor: 4,
        jenis: "sambung-surat",
        pertanyaan: "Sambungkan ayat terakhir Surat Al-Mulk ke awal Surat Al-Qalam:",
        potonganAyat: "...بِمَاءٍ مَّعِينٍ",
        kunciJawaban: "ن ۚ وَالْقَلَمِ وَمَا يَسْطُرُونَ"
      }
    ]
  },
  // PAKET 6
  {
    id: 6,
    soal: [
      {
        nomor: 1,
        jenis: "sambung",
        pertanyaan: "Sambungkan ayat berikut:",
        potonganAyat: "كَلَّا لَوْ تَعْلَمُونَ عِلْمَ الْيَقِينِ ۝ لَتَرَوُنَّ الْجَحِيمَ",
        referensi: "Surat At-Takathur (102): 5-6",
        kunciJawaban: "Surat At-Takathur ayat 5-6"
      },
      {
        nomor: 2,
        jenis: "sambung",
        pertanyaan: "Sambungkan ayat berikut:",
        potonganAyat: "أَلَمْ تَرَ إِلَىٰ رَبِّكَ كَيْفَ مَدَّ الظِّلَّ وَلَوْ شَاءَ لَجَعَلَهُ سَاكِنًا",
        referensi: "Surat Al-Furqan (25): 45",
        kunciJawaban: "Surat Al-Furqan ayat 45"
      },
      {
        nomor: 3,
        jenis: "bacakan",
        pertanyaan: "Bacakan Quran Surat An-Nazi'at ayat 25-29",
        rentangAyat: "25-29 (5 ayat)",
        kunciJawaban: "فَأَخَذَهُ اللَّهُ نَكَالَ الْآخِرَةِ وَالْأُولَىٰ... يُحَذِّرَكُمْ"
      },
      {
        nomor: 4,
        jenis: "sambung-surat",
        pertanyaan: "Sambungkan ayat terakhir Surat Al-Jinn ke awal Surat Al-Muzzammil:",
        potonganAyat: "...وَاتَّخَذُوا شُرَكَاءَ اللَّهِ",
        kunciJawaban: "يَا أَيُّهَا الْمُزَّمِّلُ"
      }
    ]
  },
  // PAKET 7
  {
    id: 7,
    soal: [
      {
        nomor: 1,
        jenis: "sambung",
        pertanyaan: "Sambungkan ayat berikut:",
        potonganAyat: "أَفَرَأَيْتُمُ النَّارَ الَّتِي تُورُونَ ۝ أَأَنتُمْ أَنشَأْتُمْ شَجَرَتَهَا أَمْ نَحْنُ الْمُنشِئُونَ",
        referensi: "Surat Al-Waqi'ah (56): 71-72",
        kunciJawaban: "Surat Al-Waqi'ah ayat 71-72"
      },
      {
        nomor: 2,
        jenis: "sambung",
        pertanyaan: "Sambungkan ayat berikut:",
        potonganAyat: "وَأَمَّا مَنْ أُوتِيَ كِتَابَهُ وَرَاءَ ظَهْرِهِ ۝ فَسَوْفَ يَدْعُو ثُبُورًا",
        referensi: "Surat Al-Inshiqaq (84): 10-11",
        kunciJawaban: "Surat Al-Inshiqaq ayat 10-11"
      },
      {
        nomor: 3,
        jenis: "bacakan",
        pertanyaan: "Bacakan Quran Surat Abasa ayat 24-28",
        rentangAyat: "24-28 (5 ayat)",
        kunciJawaban: "فَلْيَنظُرِ الْإِنسَانُ إِلَىٰ طَعَامِهِ... بِقَدَرٍ عَلِيمٍ"
      },
      {
        nomor: 4,
        jenis: "sambung-surat",
        pertanyaan: "Sambungkan ayat terakhir Surat Al-Hashr ke awal Surat Al-Mumtahanah:",
        potonganAyat: "...بِكُمْ يَفْعَلُوا اللَّهُ مَا يَشَاءُ",
        kunciJawaban: "يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تَتَّخِذُوا عَدُوِّي وَعَدُوَّكُمْ"
      }
    ]
  },
  // PAKET 8
  {
    id: 8,
    soal: [
      {
        nomor: 1,
        jenis: "sambung",
        pertanyaan: "Sambungkan ayat berikut:",
        potonganAyat: "وَكُلُّ صَغِيرٍ وَكَبِيرٍ مُّسْتَطَرٌ ۝ إِنَّ الْمُتَّقِينَ فِي جَنَّاتٍ وَنَهَرٍ",
        referensi: "Surat Al-Dukhan (44): 53-54",
        kunciJawaban: "Surat Ad-Dukhan ayat 53-54"
      },
      {
        nomor: 2,
        jenis: "sambung",
        pertanyaan: "Sambungkan ayat berikut:",
        potonganAyat: "وَلَقَدْ خَلَقْنَا الْإِنسَانَ وَنَعْلَمُ مَا تُوَسْوِسُ بِهِ نَفْسُهُ ۖ وَنَحْنُ أَقْرَبُ إِلَيْهِ مِنْ حَبْلِ الْوَرِيدِ",
        referensi: "Surat Qaf (50): 16",
        kunciJawaban: "Surat Qaf ayat 16"
      },
      {
        nomor: 3,
        jenis: "bacakan",
        pertanyaan: "Bacakan Quran Surat At-Takwir ayat 1-5",
        rentangAyat: "1-5 (5 ayat)",
        kunciJawaban: "إِذَا الشَّمْسُ كُوِّرَتْ ۝ وَإِذَا النُّجُومُ انكَدَرَتْ ۝ وَإِذَا الْجِبَالُ سُيِّرَتْ ۝ وَإِذَا الْعِشَارُ عُطِّلَتْ ۝ وَإِذَا الْوُحُوشُ حُشِرَتْ"
      },
      {
        nomor: 4,
        jenis: "sambung-surat",
        pertanyaan: "Sambungkan ayat terakhir Surat Al-Infitar ke awal Surat Al-Mutaffifin:",
        potonganAyat: "...عَلِيمٌ خَبِيرٌ",
        kunciJawaban: "وَيْلٌ لِّلْمُطَفِّفِينَ"
      }
    ]
  },
  // PAKET 9
  {
    id: 9,
    soal: [
      {
        nomor: 1,
        jenis: "sambung",
        pertanyaan: "Sambungkan ayat berikut:",
        potonganAyat: "وَالنَّازِعَاتِ غَرْقًا ۝ وَالنَّاشِطَاتِ نَشْطًا",
        referensi: "Surat An-Nazi'at (79): 1-2",
        kunciJawaban: "Surat An-Nazi'at ayat 1-2 - Awal surat"
      },
      {
        nomor: 2,
        jenis: "sambung",
        pertanyaan: "Sambungkan ayat berikut:",
        potonganAyat: "يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تَقُومُوا وَكُلُوا مِنَ الطَّعَامِ حَتَّىٰ يُذْنَ لَكُمْ",
        referensi: "Surat An-Nur (24): 61",
        kunciJawaban: "Surat An-Nur ayat 61"
      },
      {
        nomor: 3,
        jenis: "bacakan",
        pertanyaan: "Bacakan Quran Surat Al-Infitar ayat 6-10",
        rentangAyat: "6-10 (5 ayat)",
        kunciJawaban: "يَا أَيُّهَا الْإِنسَانُ مَا غَرَّكَ بِرَبِّكَ الْكَرِيمِ... فِي أَعْنَاقِهِمْ أَغْلَالٌ"
      },
      {
        nomor: 4,
        jenis: "sambung-surat",
        pertanyaan: "Sambungkan ayat terakhir Surat Al-Ankabut ke awal Surat Ar-Rum:",
        potonganAyat: "...وَكَفَىٰ بِاللَّهِ شَهِيدًا",
        kunciJawaban: "الم ۝ غُلِبَتِ الرُّومُ"
      }
    ]
  },
  // PAKET 10
  {
    id: 10,
    soal: [
      {
        nomor: 1,
        jenis: "sambung",
        pertanyaan: "Sambungkan ayat berikut:",
        potonganAyat: "وَجَعَلْنَا اللَّيْلَ لِبَاسًا ۝ وَجَعَلْنَا النَّهَارَ مَعَاشًا",
        referensi: "Surat An-Naba (78): 10-11",
        kunciJawaban: "Surat An-Naba ayat 10-11"
      },
      {
        nomor: 2,
        jenis: "sambung",
        pertanyaan: "Sambungkan ayat berikut:",
        potonganAyat: "وَقِيلَ يَا أَرْضُ ابْلَعِي مَاءَكِ وَيَا سَمَاءُ أَقْلِعِي وَغِيضَ الْمَاءُ وَقُضِيَ الْأَمْرُ وَاسْتَوَتْ عَلَى الْجُودِيِّ",
        referensi: "Surat Hud (11): 44",
        kunciJawaban: "Surat Hud ayat 44"
      },
      {
        nomor: 3,
        jenis: "bacakan",
        pertanyaan: "Bacakan Quran Surat Al-Mursalat ayat 11-15",
        rentangAyat: "11-15 (5 ayat)",
        kunciJawaban: "وَإِذَا الرُّسُلُ أُقِّتَتْ... وَيْلٌ يَوْمَئِذٍ لِّلْمُكَذِّبِينَ"
      },
      {
        nomor: 4,
        jenis: "sambung-surat",
        pertanyaan: "Sambungkan ayat terakhir Surat Al-Mu'minun ke awal Surat An-Nur:",
        potonganAyat: "...فَاسْتَغْفِرْهُ ثُمَّ تُوبُوا إِلَيْهِ ۚ إِنَّ رَبِّي رَحِيمٌ وَدُودٌ",
        kunciJawaban: "سُورَةٌ أَنزَلْنَاهَا وَفَرَضْنَاهَا وَأَنزَلْنَا فِيهَا آيَاتٍ بَيِّنَاتٍ"
      }
    ]
  },
  // PAKET 11
  {
    id: 11,
    soal: [
      {
        nomor: 1,
        jenis: "sambung",
        pertanyaan: "Sambungkan ayat berikut:",
        potonganAyat: "لَقَدْ خَلَقْنَا الْإِنسَانَ فِي كَبَدٍ ۝ أَيَحْسَبُ أَن لَّن يَقْدِرَ عَلَيْهِ أَحَدٌ",
        referensi: "Surat Al-Balad (90): 4-5",
        kunciJawaban: "Surat Al-Balad ayat 4-5"
      },
      {
        nomor: 2,
        jenis: "sambung",
        pertanyaan: "Sambungkan ayat berikut:",
        potonganAyat: "أَلَمْ نَجْعَلِ الْأَرْضَ مِهَادًا ۝ وَالْجِبَالَ أَوْتَادًا",
        referensi: "Surat An-Naba (78): 6-7",
        kunciJawaban: "Surat An-Naba ayat 6-7 - Awal surat"
      },
      {
        nomor: 3,
        jenis: "bacakan",
        pertanyaan: "Bacakan Quran Surat Al-Jumu'ah ayat 1-5",
        rentangAyat: "1-5 (5 ayat)",
        kunciJawaban: "يُسَبِّحُ لِلَّهِ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ الْمَلِكِ الْقُدُّوسِ... وَآخَرِينَ مِنْهُمْ لَمَّا يَلْحَقُوا بِهِمْ"
      },
      {
        nomor: 4,
        jenis: "sambung-surat",
        pertanyaan: "Sambungkan ayat terakhir Surat Al-Fath ke awal Surat Al-Hujurat:",
        potonganAyat: "...وَكَانَ حَقًّا عَلَيْنَا نَصْرُ الْمُؤْمِنِينَ",
        kunciJawaban: "يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تُقَدِّمُوا بَيْنَ يَدَيِ اللَّهِ وَرَسُولِهِ"
      }
    ]
  },
  // PAKET 12
  {
    id: 12,
    soal: [
      {
        nomor: 1,
        jenis: "sambung",
        pertanyaan: "Sambungkan ayat berikut:",
        potonganAyat: "وَمَا نُرِيهِم مِّنْ آيَةٍ إِلَّا هِيَ أَكْبَرُ مِنْ أُخْتِهَا ۖ وَأَخَذْنَاهُم بِالْعَذَابِ لَعَلَّهُمْ يَرْجِعُونَ",
        referensi: "Surat Az-Zukhruf (43): 48",
        kunciJawaban: "Surat Az-Zukhruf ayat 48"
      },
      {
        nomor: 2,
        jenis: "sambung",
        pertanyaan: "Sambungkan ayat berikut:",
        potonganAyat: "وَمَن يُشْرِكْ بِاللَّهِ فَكَأَنَّمَا خَرَّ مِنَ السَّمَاءِ فَتَخْطَفُهُ الطَّيْرُ أَوْ تَهْوِي بِهِ الرِّيحُ فِي مَكَانٍ سَحِيقٍ",
        referensi: "Surat Al-Hajj (22): 31",
        kunciJawaban: "Surat Al-Hajj ayat 31"
      },
      {
        nomor: 3,
        jenis: "bacakan",
        pertanyaan: "Bacakan Quran Surat Al-Mumtahanah ayat 1-5",
        rentangAyat: "1-5 (5 ayat)",
        kunciJawaban: "يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تَتَّخِذُوا عَدُوِّي وَعَدُوَّكُمْ أَوْلِيَاءَ... وَتَرَقُّبٌ"
      },
      {
        nomor: 4,
        jenis: "sambung-surat",
        pertanyaan: "Sambungkan ayat terakhir Surat Al-Fajr ke awal Surat Al-Balad:",
        potonganAyat: "...يَا أَيَّتُهَا النَّفْسُ الْمُطْمَئِنَّةُ",
        kunciJawaban: "لَا أُقْسِمُ بِهَٰذَا الْبَلَدِ"
      }
    ]
  },
  // PAKET 13
  {
    id: 13,
    soal: [
      {
        nomor: 1,
        jenis: "sambung",
        pertanyaan: "Sambungkan ayat berikut:",
        potonganAyat: "وَالطَّيْرَ مَحْشُورَةً ۖ كُلٌّ لَّهُ أَوَّابٌ ۝ وَالْجِبَالَ أَرْسَىٰهَا",
        referensi: "Surat Sad (38): 19-20",
        kunciJawaban: "Surat Sad ayat 19-20"
      },
      {
        nomor: 2,
        jenis: "sambung",
        pertanyaan: "Sambungkan ayat berikut:",
        potonganAyat: "وَإِذَا رَأَوْهُمْ قَالُوا إِنَّ هَٰؤُلَاءِ لَضَالُّونَ ۝ وَأُلْقُوا إِلَيْهَا",
        referensi: "Surat Al-Mutaffifin (83): 32-33",
        kunciJawaban: "Surat Al-Mutaffifin ayat 32-33"
      },
      {
        nomor: 3,
        jenis: "bacakan",
        pertanyaan: "Bacakan Quran Surat Al-Ghashiyah ayat 1-5",
        rentangAyat: "1-5 (5 ayat)",
        kunciJawaban: "هَلْ أَتَاكَ حَدِيثُ الْغَاشِيَةِ ۝ وُجُوهٌ يَوْمَئِذٍ خَاشِعَةٌ ۝ عَامِلَةٌ نَّاصِبَةٌ ۝ تَصْلَىٰ نَارًا حَامِيَةً ۝ تُسْقَىٰ مِنْ عَيْنٍ آنِيَةٍ"
      },
      {
        nomor: 4,
        jenis: "sambung-surat",
        pertanyaan: "Sambungkan ayat terakhir Surat Al-Qiyamah ke awal Surat Al-Insan:",
        potonganAyat: "...فَإِذَا شَاءَ اللَّهُ لَأَمَرَهُمْ",
        kunciJawaban: "هَلْ أَتَىٰ عَلَى الْإِنسَانِ حِينٌ مِّنَ الدَّهْرِ"
      }
    ]
  },
  // PAKET 14
  {
    id: 14,
    soal: [
      {
        nomor: 1,
        jenis: "sambung",
        pertanyaan: "Sambungkan ayat berikut:",
        potonganAyat: "فَذُوقُوا بِمَا نَسِيتُمْ لِقَاءَ يَوْمِكُمْ هَٰذَا إِنَّا نَسِينَاكُمْ ۖ وَذُوقُوا عَذَابَ الْخُلْدِ بِمَا كُنتُمْ تَعْمَلُونَ",
        referensi: "Surat As-Sajdah (32): 14",
        kunciJawaban: "Surat As-Sajdah ayat 14"
      },
      {
        nomor: 2,
        jenis: "sambung",
        pertanyaan: "Sambungkan ayat berikut:",
        potonganAyat: "وَلَقَدْ فَتَنَّا الَّذِينَ مِن قَبْلِهِمْ فَلَيَعْلَمَنَّ اللَّهُ الَّذِينَ صَدَقُوا وَلَيَعْلَمَنَّ الْكَاذِبِينَ",
        referensi: "Surat Al-Ankabut (29): 3",
        kunciJawaban: "Surat Al-Ankabut ayat 3"
      },
      {
        nomor: 3,
        jenis: "bacakan",
        pertanyaan: "Bacakan Quran Surat Al-Fajr ayat 1-5",
        rentangAyat: "1-5 (5 ayat)",
        kunciJawaban: "وَالْفَجْرِ ۝ وَلَيَالٍ عَشْرٍ ۝ وَالشَّفْعِ وَالْوَتْرِ ۝ وَاللَّيْلِ إِذَا يَسْرِ ۝ هَلْ فِي ذَٰلِكَ قَسَمٌ لِّذِي حِجْرٍ"
      },
      {
        nomor: 4,
        jenis: "sambung-surat",
        pertanyaan: "Sambungkan ayat terakhir Surat Al-Lail ke awal Surat Ad-Duha:",
        potonganAyat: "...وَصَدَقَتِ الْمُصَدِّقُونَ",
        kunciJawaban: "وَالضُّحَىٰ ۝ وَاللَّيْلِ إِذَا سَجَىٰ"
      }
    ]
  },
  // PAKET 15
  {
    id: 15,
    soal: [
      {
        nomor: 1,
        jenis: "sambung",
        pertanyaan: "Sambungkan ayat berikut:",
        potonganAyat: "بَلَىٰ قَادِرِينَ عَلَىٰ أَن نُّسَوِّيَ بَنَانَهُ ۝ بَلْ يُرِيدُ الْإِنسَانُ لِيَفْجُرَ أَمَامَهُ",
        referensi: "Surat Al-Qiyamah (75): 4-5",
        kunciJawaban: "Surat Al-Qiyamah ayat 4-5"
      },
      {
        nomor: 2,
        jenis: "sambung",
        pertanyaan: "Sambungkan ayat berikut:",
        potonganAyat: "إِذْ قَالَ لِأَبِيهِ وَقَوْمِهِ مَاهَٰذِهِ التَّمَاثِيلُ الَّتِي أَنتُمْ لَهَا عَاكِفُونَ",
        referensi: "Surat Al-Anbiya (21): 52",
        kunciJawaban: "Surat Al-Anbiya ayat 52"
      },
      {
        nomor: 3,
        jenis: "bacakan",
        pertanyaan: "Bacakan Quran Surat Al-Inshirah ayat 1-5 (Alam Nashrah)",
        rentangAyat: "1-5 (5 ayat)",
        kunciJawaban: "أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ ۝ وَوَضَعْنَا عَنكَ وِزْرَكَ ۝ الَّذِي أَنقَضَ ظَهْرَكَ ۝ وَرَفَعْنَا لَكَ ذِكْرَكَ ۝ فَإِنَّ مَعَ الْعُسْرِ يُسْرًا"
      },
      {
        nomor: 4,
        jenis: "sambung-surat",
        pertanyaan: "Sambungkan ayat terakhir Surat Al-Ma'un ke awal Surat Al-Kawthar:",
        potonganAyat: "...وَيَمْنَعُونَ الْمَاعُونَ",
        kunciJawaban: "إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ"
      }
    ]
  },
  // PAKET 16
  {
    id: 16,
    soal: [
      {
        nomor: 1,
        jenis: "sambung",
        pertanyaan: "Sambungkan ayat berikut:",
        potonganAyat: "وَيَرَى الَّذِينَ أُوتُوا الْعِلْمَ الَّذِي أُنزِلَ إِلَيْكَ مِن رَّبِّكَ هُوَ الْحَقَّ وَيَهْدِي إِلَىٰ صِرَاطِ الْعَزِيزِ الْحَمِيدِ",
        referensi: "Surat Saba (34): 6",
        kunciJawaban: "Surat Saba ayat 6"
      },
      {
        nomor: 2,
        jenis: "sambung",
        pertanyaan: "Sambungkan ayat berikut:",
        potonganAyat: "وَمَا قَدَرُوا اللَّهَ حَقَّ قَدْرِهِ وَالْأَرْضُ جَمِيعًا قَبْضَتُهُ يَوْمَ الْقِيَامَةِ وَالسَّمَاوَاتُ مَطْوِيَّاتٌ بِيَمِينِهِ ۚ سُبْحَانَهُ وَتَعَالَىٰ عَمَّا يُشْرِكُونَ",
        referensi: "Surat Az-Zumar (39): 67",
        kunciJawaban: "Surat Az-Zumar ayat 67"
      },
      {
        nomor: 3,
        jenis: "bacakan",
        pertanyaan: "Bacakan Quran Surat An-Nasr ayat 1-3",
        rentangAyat: "1-3 (3 ayat, ulangi sampai 5 ayat)",
        kunciJawaban: "إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ ۝ وَرَأَيْتَ النَّاسَ يَدْخُلُونَ فِي دِينِ اللَّهِ أَفْوَاجًا ۝ فَسَبِّحْ بِحَمْدِ رَبِّكَ وَاسْتَغْفِرْهُ ۚ إِنَّهُ كَانَ تَوَّابًا"
      },
      {
        nomor: 4,
        jenis: "sambung-surat",
        pertanyaan: "Sambungkan ayat terakhir Surat Al-Qadr ke awal Surat Al-Bayyinah:",
        potonganAyat: "...سَلَامٌ هِيَ حَتَّىٰ مَطْلَعِ الْفَجْرِ",
        kunciJawaban: "لَمْ يَكُنِ الَّذِينَ كَفَرُوا مِنْ أَهْلِ الْكِتَابِ وَالْمُشْرِكِينَ"
      }
    ]
  },
  // PAKET 17
  {
    id: 17,
    soal: [
      {
        nomor: 1,
        jenis: "sambung",
        pertanyaan: "Sambungkan ayat berikut:",
        potonganAyat: "وَفِي الْأَرْضِ آيَاتٌ لِّلْمُوقِنِينَ ۝ وَفِي أَنفُسِكُمْ ۚ أَفَلَا تُبْصِرُونَ",
        referensi: "Surat Adh-Dhariyat (51): 20-21",
        kunciJawaban: "Surat Adh-Dhariyat ayat 20-21"
      },
      {
        nomor: 2,
        jenis: "sambung",
        pertanyaan: "Sambungkan ayat berikut:",
        potonganAyat: "وَعَدَ اللَّهُ الَّذِينَ آمَنُوا مِنكُمْ وَعَمِلُوا الصَّالِحَاتِ لَيَسْتَخْلِفَنَّهُمْ فِي الْأَرْضِ كَمَا اسْتَخْلَفَ الَّذِينَ مِن قَبْلِهِمْ",
        referensi: "Surat An-Nur (24): 55",
        kunciJawaban: "Surat An-Nur ayat 55"
      },
      {
        nomor: 3,
        jenis: "bacakan",
        pertanyaan: "Bacakan Quran Surat Al-Alaq ayat 1-5",
        rentangAyat: "1-5 (5 ayat)",
        kunciJawaban: "اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ ۝ خَلَقَ الْإِنسَانَ مِنْ عَلَقٍ ۝ اقْرَأْ وَرَبُّكَ الْأَكْرَمُ ۝ الَّذِي عَلَّمَ بِالْقَلَمِ ۝ عَلَّمَ الْإِنسَانَ مَا لَمْ يَعْلَمْ"
      },
      {
        nomor: 4,
        jenis: "sambung-surat",
        pertanyaan: "Sambungkan ayat terakhir Surat At-Takathur ke awal Surat Al-Asr:",
        potonganAyat: "...ثُمَّ لَتُسْأَلُنَّ يَوْمَئِذٍ عَنِ النَّعِيمِ",
        kunciJawaban: "وَالْعَصْرِ ۝ إِنَّ الْإِنسَانَ لَفِي خُسْرٍ"
      }
    ]
  },
  // PAKET 18
  {
    id: 18,
    soal: [
      {
        nomor: 1,
        jenis: "sambung",
        pertanyaan: "Sambungkan ayat berikut:",
        potonganAyat: "إِنَّا كُلَّ شَيْءٍ خَلَقْنَاهُ بِقَدَرٍ ۝ وَمَا أَمْرُنَا إِلَّا وَاحِدَةٌ كَلَمْحٍ بِالْبَصَرِ",
        referensi: "Surat Al-Qamar (54): 49-50",
        kunciJawaban: "Surat Al-Qamar ayat 49-50"
      },
      {
        nomor: 2,
        jenis: "sambung",
        pertanyaan: "Sambungkan ayat berikut:",
        potonganAyat: "وَنَفْسٍ وَمَا سَوَّاهَا ۝ فَأَلْهَمَهَا فُجُورَهَا وَتَقْوَاهَا",
        referensi: "Surat Ash-Shams (91): 7-8",
        kunciJawaban: "Surat Ash-Shams ayat 7-8"
      },
      {
        nomor: 3,
        jenis: "bacakan",
        pertanyaan: "Bacakan Quran Surat Al-Buruj ayat 1-5",
        rentangAyat: "1-5 (5 ayat)",
        kunciJawaban: "وَالسَّمَاءِ ذَاتِ الْبُرُوجِ ۝ وَالْيَوْمِ الْمَوْعُودِ ۝ وَشَاهِدٍ وَمَشْهُودٍ ۝ قُتِلَ أَصْحَابُ الْأُخْدُودِ ۝ النَّارِ ذَاتِ الْوَقُودِ"
      },
      {
        nomor: 4,
        jenis: "sambung-surat",
        pertanyaan: "Sambungkan ayat terakhir Surat An-Nazi'at ke awal Surat Abasa:",
        potonganAyat: "...فِي ذَٰلِكَ لَعِبْرَةٌ لِّمَن يَخْشَىٰ",
        kunciJawaban: "عَبَسَ وَتَوَلَّىٰ ۝ أَن جَاءَهُ الْأَعْمَىٰ"
      }
    ]
  },
  // PAKET 19
  {
    id: 19,
    soal: [
      {
        nomor: 1,
        jenis: "sambung",
        pertanyaan: "Sambungkan ayat berikut:",
        potonganAyat: "فَاصْفَحْ عَنْهُمْ وَقُلْ سَلَامٌ ۚ فَسَوْفَ يَعْلَمُونَ",
        referensi: "Surat Az-Zukhruf (43): 89 - Ayat terakhir surat",
        kunciJawaban: "Surat Az-Zukhruf ayat 89 - ayat terakhir"
      },
      {
        nomor: 2,
        jenis: "sambung",
        pertanyaan: "Sambungkan ayat berikut:",
        potonganAyat: "وَأَمَّا السَّائِلَ فَلَا تَنْهَرْ ۝ وَأَمَّا بِنِعْمَةِ رَبِّكَ فَحَدِّثْ",
        referensi: "Surat Ad-Duha (93): 10-11 - Ayat terakhir surat",
        kunciJawaban: "Surat Ad-Duha ayat 10-11 - ayat terakhir"
      },
      {
        nomor: 3,
        jenis: "bacakan",
        pertanyaan: "Bacakan Quran Surat Al-Kafirun ayat 1-6 (Alam Tera)",
        rentangAyat: "1-6 (6 ayat)",
        kunciJawaban: "قُلْ يَا أَيُّهَا الْكَافِرُونَ ۝ لَا أَعْبُدُ مَا تَعْبُدُونَ ۝ وَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ ۝ وَلَا أَنَا عَابِدٌ مَّا عَبَدتُّمْ ۝ وَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ ۝ لَكُمْ دِينُكُمْ وَلِيَ دِينِ"
      },
      {
        nomor: 4,
        jenis: "sambung-surat",
        pertanyaan: "Sambungkan ayat terakhir Surat Al-Jinn ke awal Surat Al-Muzzammil:",
        potonganAyat: "...لِّيَعْلَمَ أَنَّمَا إِلَٰهٌ إِلَٰهٌ وَاحِدٌ",
        kunciJawaban: "يَا أَيُّهَا الْمُزَّمِّلُ"
      }
    ]
  },
  // PAKET 20
  {
    id: 20,
    soal: [
      {
        nomor: 1,
        jenis: "sambung",
        pertanyaan: "Sambungkan ayat berikut:",
        potonganAyat: "وَهُوَ الَّذِي يَقْبَلُ التَّوْبَةَ عَنْ عِبَادِهِ وَيَعْفُو عَنِ السَّيِّئَاتِ وَيَعْلَمُ مَا تَفْعَلُونَ",
        referensi: "Surat Ash-Shura (42): 25",
        kunciJawaban: "Surat Ash-Shura ayat 25"
      },
      {
        nomor: 2,
        jenis: "sambung",
        pertanyaan: "Sambungkan ayat berikut:",
        potonganAyat: "إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ ۝ وَرَأَيْتَ النَّاسَ يَدْخُلُونَ فِي دِينِ اللَّهِ أَفْوَاجًا",
        referensi: "Surat An-Nasr (110): 1-2",
        kunciJawaban: "Surat An-Nasr ayat 1-2 - Awal surat"
      },
      {
        nomor: 3,
        jenis: "bacakan",
        pertanyaan: "Bacakan Quran Surat Al-Kawthar ayat 1-3",
        rentangAyat: "1-3 (3 ayat, ulangi sampai 5 ayat)",
        kunciJawaban: "إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ ۝ فَصَلِّ لِرَبِّكَ وَانْحَرْ ۝ إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ"
      },
      {
        nomor: 4,
        jenis: "sambung-surat",
        pertanyaan: "Sambungkan ayat terakhir Surat At-Tariq ke awal Surat Al-A'la:",
        potonganAyat: "...وَإِنَّ عَلَيْهِ لَقَادِرُونَ",
        kunciJawaban: "سَبِّحِ اسْمَ رَبِّكَ الْأَعْلَى"
      }
    ]
  },
  // PAKET 21
  {
    id: 21,
    soal: [
      {
        nomor: 1,
        jenis: "sambung",
        pertanyaan: "Sambungkan ayat berikut:",
        potonganAyat: "وَهُوَ الَّذِي أَنشَأَ جَنَّاتٍ مَّعْرُوشَاتٍ وَغَيْرَ مَعْرُوشَاتٍ وَالنَّخْلَ وَالزَّرْعَ مُخْتَلِفًا أُكُلُهُ وَالزَّيْتُونَ وَالرُّمَّانَ مُتَشَابِهًا وَغَيْرَ مُتَشَابِهٍ ۚ كُلُوا مِن ثَمَرِهِ إِذَا أَثْمَرَ وَآتُوا حَقَّهُ يَوْمَ حَصَادِهِ ۖ وَلَا تُسْرِفُوا ۚ إِنَّهُ لَا يُحِبُّ الْمُسْرِفِينَ",
        referensi: "Surat Al-An'am (6): 141",
        kunciJawaban: "Surat Al-An'am ayat 141"
      },
      {
        nomor: 2,
        jenis: "sambung",
        pertanyaan: "Sambungkan ayat berikut:",
        potonganAyat: "وَالشَّمْسِ وَضُحَاهَا ۝ وَالْقَمَرِ إِذَا تَلَاهَا",
        referensi: "Surat Ash-Shams (91): 1-2",
        kunciJawaban: "Surat Ash-Shams ayat 1-2 - Awal surat"
      },
      {
        nomor: 3,
        jenis: "bacakan",
        pertanyaan: "Bacakan Quran Surat Al-Lail ayat 5-9",
        rentangAyat: "5-9 (5 ayat)",
        kunciJawaban: "فَأَمَّا مَنْ أَعْطَىٰ وَاتَّقَىٰ... وَلَا يَصُدُّنَّكَ عَنْهَا"
      },
      {
        nomor: 4,
        jenis: "sambung-surat",
        pertanyaan: "Sambungkan ayat terakhir Surat Al-Hujurat ke awal Surat Qaf:",
        potonganAyat: "...إِنَّ اللَّهَ يُحِبُّ الْمُقْسِطِينَ",
        kunciJawaban: "ق ۚ وَالْقُرْآنِ الْمَجِيدِ"
      }
    ]
  },
  // PAKET 22
  {
    id: 22,
    soal: [
      {
        nomor: 1,
        jenis: "sambung",
        pertanyaan: "Sambungkan ayat berikut:",
        potonganAyat: "فَاصْبِرْ لِحُكْمِ رَبِّكَ وَلَا تَكُن كَصَاحِبِ الْحُوتِ إِذْ نَادَىٰ وَهُوَ مَكْظُومٌ",
        referensi: "Surat Al-Qalam (68): 48",
        kunciJawaban: "Surat Al-Qalam ayat 48"
      },
      {
        nomor: 2,
        jenis: "sambung",
        pertanyaan: "Sambungkan ayat berikut:",
        potonganAyat: "وَأَنذِرْهُمْ يَوْمَ الْآزِفَةِ إِذِ الْقُلُوبُ لَدَى الْحَنَاجِرِ كَاظِمِينَ ۚ مَا لِلظَّالِمِينَ مِنْ حَمِيمٍ وَلَا شَفِيعٍ يُطَاعُ",
        referensi: "Surat Ghafir (40): 18",
        kunciJawaban: "Surat Ghafir ayat 18"
      },
      {
        nomor: 3,
        jenis: "bacakan",
        pertanyaan: "Bacakan Quran Surat An-Nas ayat 1-6",
        rentangAyat: "1-6 (6 ayat)",
        kunciJawaban: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ ۝ مَلِكِ النَّاسِ ۝ إِلَٰهِ النَّاسِ ۝ مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ۝ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ۝ مِنَ الْجِنَّةِ وَالنَّاسِ"
      },
      {
        nomor: 4,
        jenis: "sambung-surat",
        pertanyaan: "Sambungkan ayat terakhir Surat Al-Bayyinah ke awal Surat Az-Zalzalah:",
        potonganAyat: "...وَذَٰلِكَ هُوَ الْفَلَاحُ الْأَكْبَرُ",
        kunciJawaban: "إِذَا زُلْزِلَتِ الْأَرْضُ زِلْزَالَهَا"
      }
    ]
  },
  // PAKET 23
  {
    id: 23,
    soal: [
      {
        nomor: 1,
        jenis: "sambung",
        pertanyaan: "Sambungkan ayat berikut:",
        potonganAyat: "يُخْرِجُ الْحَيَّ مِنَ الْمَيِّتِ وَيُخْرِجُ الْمَيِّتَ مِنَ الْحَيِّ وَيُحْيِي الْأَرْضَ بَعْدَ مَوْتِهَا ۚ وَكَذَٰلِكَ تُخْرَجُونَ",
        referensi: "Surat Ar-Rum (30): 19",
        kunciJawaban: "Surat Ar-Rum ayat 19"
      },
      {
        nomor: 2,
        jenis: "sambung",
        pertanyaan: "Sambungkan ayat berikut:",
        potonganAyat: "هُوَ الَّذِي يُصَلِّي عَلَيْكُمْ وَمَلَائِكَتُهُ لِيُخْرِجَكُم مِّنَ الظُّلُمَاتِ إِلَى النُّورِ ۚ وَكَانَ بِالْمُؤْمِنِينَ رَحِيمًا",
        referensi: "Surat Al-Ahzab (33): 43",
        kunciJawaban: "Surat Al-Ahzab ayat 43"
      },
      {
        nomor: 3,
        jenis: "bacakan",
        pertanyaan: "Bacakan Quran Surat Al-Fil ayat 1-5",
        rentangAyat: "1-5 (5 ayat)",
        kunciJawaban: "أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَابِ الْفِيلِ ۝ أَلَمْ يَجْعَلْ كَيْدَهُمْ فِي تَضْلِيلٍ ۝ وَأَرْسَلَ عَلَيْهِمْ طَيْرًا أَبَابِيلَ ۝ تَرْمِيهِم بِحِجَارَةٍ مِّن سِجِّيلٍ ۝ فَجَعَلَهُمْ كَعَصْفٍ مَّأْكُولٍ"
      },
      {
        nomor: 4,
        jenis: "sambung-surat",
        pertanyaan: "Sambungkan ayat terakhir Surat Al-Ikhlas ke awal Surat Al-Falaq:",
        potonganAyat: "...وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ",
        kunciJawaban: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ"
      }
    ]
  },
  // PAKET 24
  {
    id: 24,
    soal: [
      {
        nomor: 1,
        jenis: "sambung",
        pertanyaan: "Sambungkan ayat berikut:",
        potonganAyat: "قُلْ لَّن يُصِيبَنَا إِلَّا مَا كَتَبَ اللَّهُ لَنَا هُوَ مَوْلَانَا ۖ وَعَلَى اللَّهِ فَلْيَتَوَكَّلِ الْمُؤْمِنُونَ",
        referensi: "Surat At-Tawbah (9): 51",
        kunciJawaban: "Surat At-Tawbah ayat 51"
      },
      {
        nomor: 2,
        jenis: "sambung",
        pertanyaan: "Sambungkan ayat berikut:",
        potonganAyat: "أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ ۝ وَوَضَعْنَا عَنكَ وِزْرَكَ",
        referensi: "Surat Al-Inshirah (94): 1-2",
        kunciJawaban: "Surat Al-Inshirah ayat 1-2 - Awal surat"
      },
      {
        nomor: 3,
        jenis: "bacakan",
        pertanyaan: "Bacakan Quran Surat Quraysh ayat 1-4",
        rentangAyat: "1-4 (4 ayat, ulangi 1x)",
        kunciJawaban: "لِإِيلَافِ قُرَيْشٍ ۝ إِيلَافِهِمْ رِحْلَةَ الشِّتَاءِ وَالصَّيْفِ ۝ فَلْيَعْبُدُوا رَبَّ هَٰذَا الْبَيْتِ ۝ الَّذِي أَطْعَمَهُم مِّن جُوعٍ وَآمَنَهُم مِّنْ خَوْفٍ"
      },
      {
        nomor: 4,
        jenis: "sambung-surat",
        pertanyaan: "Sambungkan ayat terakhir Surat Al-Mursalat ke awal Surat An-Naba:",
        potonganAyat: "...فَبِأَيِّ حَدِيثٍ بَعْدَهُ يُؤْمِنُونَ",
        kunciJawaban: "عَمَّ يَتَسَاءَلُونَ"
      }
    ]
  },
  // PAKET 25
  {
    id: 25,
    soal: [
      {
        nomor: 1,
        jenis: "sambung",
        pertanyaan: "Sambungkan ayat berikut:",
        potonganAyat: "لَا إِلَٰهَ إِلَّا هُوَ يُحْيِي وَيُمِيتُ ۖ رَبُّكُمْ وَرَبُّ آبَائِكُمُ الْأَوَّلِينَ",
        referensi: "Surat Ad-Dukhan (44): 8",
        kunciJawaban: "Surat Ad-Dukhan ayat 8"
      },
      {
        nomor: 2,
        jenis: "sambung",
        pertanyaan: "Sambungkan ayat berikut:",
        potonganAyat: "إِذَا السَّمَاءُ انفَطَرَتْ ۝ وَإِذَا الْكَوَاكِبُ انتَثَرَتْ",
        referensi: "Surat Al-Infitar (82): 1-2",
        kunciJawaban: "Surat Al-Infitar ayat 1-2 - Awal surat"
      },
      {
        nomor: 3,
        jenis: "bacakan",
        pertanyaan: "Bacakan Quran Surat Al-Ma'un ayat 1-7",
        rentangAyat: "1-7 (7 ayat)",
        kunciJawaban: "أَرَأَيْتَ الَّذِي يُكَذِّبُ بِالدِّينِ... وَيَمْنَعُونَ الْمَاعُونَ"
      },
      {
        nomor: 4,
        jenis: "sambung-surat",
        pertanyaan: "Sambungkan ayat terakhir Surat At-Tin ke awal Surat Al-Alaq:",
        potonganAyat: "...أَلَيْسَ اللَّهُ بِأَحْكَمِ الْحَاكِمِينَ",
        kunciJawaban: "اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ"
      }
    ]
  },
  // PAKET 26
  {
    id: 26,
    soal: [
      {
        nomor: 1,
        jenis: "sambung",
        pertanyaan: "Sambungkan ayat berikut:",
        potonganAyat: "إِنَّ رَبَّكَ هُوَ أَعْلَمُ مَن يَضِلُّ عَن سَبِيلِهِ ۖ وَهُوَ أَعْلَمُ بِالْمُهْتَدِينَ",
        referensi: "Surat Al-An'am (6): 117",
        kunciJawaban: "Surat Al-An'am ayat 117"
      },
      {
        nomor: 2,
        jenis: "sambung",
        pertanyaan: "Sambungkan ayat berikut:",
        potonganAyat: "وَلَا تَكُونُوا كَالَّذِينَ قَالُوا سَمِعْنَا وَهُمْ لَا يَسْمَعُونَ ۝ إِنَّ شَرَّ الدَّوَابِّ عِندَ اللَّهِ الصُّمُّ الْبُكْمُ الَّذِينَ لَا يَعْقِلُونَ",
        referensi: "Surat Al-Anfal (8): 21-22",
        kunciJawaban: "Surat Al-Anfal ayat 21-22"
      },
      {
        nomor: 3,
        jenis: "bacakan",
        pertanyaan: "Bacakan Quran Surat Al-Humazah ayat 1-5",
        rentangAyat: "1-5 (5 ayat)",
        kunciJawaban: "وَيْلٌ لِّكُلِّ هُمَزَةٍ لُّمَزَةٍ... فِي جِيدِهَا حَبْلٌ مِّن مَّسَدٍ"
      },
      {
        nomor: 4,
        jenis: "sambung-surat",
        pertanyaan: "Sambungkan ayat terakhir Surat Al-An'am ke awal Surat Al-A'raf:",
        potonganAyat: "...إِنَّ رَبِّي عَلَىٰ صِرَاطٍ مُّسْتَقِيمٍ",
        kunciJawaban: "المص"
      }
    ]
  },
  // PAKET 27
  {
    id: 27,
    soal: [
      {
        nomor: 1,
        jenis: "sambung",
        pertanyaan: "Sambungkan ayat berikut:",
        potonganAyat: "يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَكُونُوا مَعَ الصَّادِقِينَ",
        referensi: "Surat At-Tawbah (9): 119",
        kunciJawaban: "Surat At-Tawbah ayat 119"
      },
      {
        nomor: 2,
        jenis: "sambung",
        pertanyaan: "Sambungkan ayat berikut:",
        potonganAyat: "وَلَقَدْ أَرْسَلْنَا مُوسَىٰ بِآيَاتِنَا أَنْ أَخْرِجْ قَوْمَكَ مِنَ الظُّلُمَاتِ إِلَى النُّورِ",
        referensi: "Surat Ibrahim (14): 5",
        kunciJawaban: "Surat Ibrahim ayat 5"
      },
      {
        nomor: 3,
        jenis: "bacakan",
        pertanyaan: "Bacakan Quran Surat At-Tariq ayat 1-5",
        rentangAyat: "1-5 (5 ayat)",
        kunciJawaban: "وَالسَّمَاءِ وَالطَّارِقِ... وَالْأَرْضِ ذَاتِ الصَّدْعِ"
      },
      {
        nomor: 4,
        jenis: "sambung-surat",
        pertanyaan: "Sambungkan ayat terakhir Surat Az-Zumar ke awal Surat Ghafir:",
        potonganAyat: "...قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنفُسِهِمْ",
        kunciJawaban: "حم ۝ تَنزِيلُ الْكِتَابِ مِنَ اللَّهِ الْعَزِيزِ الْعَلِيمِ"
      }
    ]
  },
  // PAKET 28
  {
    id: 28,
    soal: [
      {
        nomor: 1,
        jenis: "sambung",
        pertanyaan: "Sambungkan ayat berikut:",
        potonganAyat: "وَهُوَ الَّذِي أَنزَلَ مِنَ السَّمَاءِ مَاءً ۖ فَأَخْرَجْنَا بِهِ نَبَاتَ كُلِّ شَيْءٍ فَأَخْرَجْنَا مِنْهُ خَضِرًا",
        referensi: "Surat Al-An'am (6): 99",
        kunciJawaban: "Surat Al-An'am ayat 99"
      },
      {
        nomor: 2,
        jenis: "sambung",
        pertanyaan: "Sambungkan ayat berikut:",
        potonganAyat: "فَأَمَّا مَنْ أُوتِيَ كِتَابَهُ بِيَمِينِهِ ۝ فَيَقُولُ هَاؤُمُ اقْرَءُوا كِتَابِيَهْ",
        referensi: "Surat Al-Haqqah (69): 19-20",
        kunciJawaban: "Surat Al-Haqqah ayat 19-20"
      },
      {
        nomor: 3,
        jenis: "bacakan",
        pertanyaan: "Bacakan Quran Surat Al-A'la ayat 8-11",
        rentangAyat: "8-11 (4 ayat, ulangi 1x)",
        kunciJawaban: "وَنُيَسِّرُكَ لِلْيُسْرَىٰ... فَذَكِّرْ إِن نَّفَعَتِ الذِّكْرَىٰ"
      },
      {
        nomor: 4,
        jenis: "sambung-surat",
        pertanyaan: "Sambungkan ayat terakhir Surat Saba ke awal Surat Fatir:",
        potonganAyat: "...وَرَبِّكَ أَعْلَمُ بِمَن فِي السَّمَاوَاتِ وَالْأَرْضِ",
        kunciJawaban: "الْحَمْدُ لِلَّهِ فَاطِرِ السَّمَاوَاتِ وَالْأَرْضِ"
      }
    ]
  },
  // PAKET 29
  {
    id: 29,
    soal: [
      {
        nomor: 1,
        jenis: "sambung",
        pertanyaan: "Sambungkan ayat berikut:",
        potonganAyat: "يَا أَيُّهَا النَّاسُ ضُرِبَ مَثَلٌ فَاسْتَمِعُوا لَهُ ۚ إِنَّ الَّذِينَ تَدْعُونَ مِن دُونِ اللَّهِ لَن يَخْلُقُوا ذُبَابًا وَلَوِ اجْتَمَعُوا لَهُ ۖ وَإِن يَسْلُبْهُمُ الذُّبَابُ شَيْئًا لَّا يَسْتَنقِذُوهُ مِنْهُ",
        referensi: "Surat Al-Hajj (22): 73",
        kunciJawaban: "Surat Al-Hajj ayat 73"
      },
      {
        nomor: 2,
        jenis: "sambung",
        pertanyaan: "Sambungkan ayat berikut:",
        potonganAyat: "الَّذِي جَعَلَ لَكُم مِّنَ الشَّجَرِ الْأَخْضَرِ نَارًا فَإِذَا أَنتُم مِّنْهُ تُوقِدُونَ",
        referensi: "Surat Ya-Sin (36): 80",
        kunciJawaban: "Surat Ya-Sin ayat 80"
      },
      {
        nomor: 3,
        jenis: "bacakan",
        pertanyaan: "Bacakan Quran Surat Al-Mutaffifin ayat 1-5",
        rentangAyat: "1-5 (5 ayat)",
        kunciJawaban: "وَيْلٌ لِّلْمُطَفِّفِينَ... الَّذِينَ يَأْخُذُونَ الْكَيْلَ"
      },
      {
        nomor: 4,
        jenis: "sambung-surat",
        pertanyaan: "Sambungkan ayat terakhir Surat Al-Waqi'ah ke awal Surat Al-Hadid:",
        potonganAyat: "...فَسَبِّحْ بِاسْمِ رَبِّكَ الْعَظِيمِ",
        kunciJawaban: "سَبَّحَ لِلَّهِ مَا فِي السَّمَاوَاتِ وَالْأَرْضِ"
      }
    ]
  },
  // PAKET 30
  {
    id: 30,
    soal: [
      {
        nomor: 1,
        jenis: "sambung",
        pertanyaan: "Sambungkan ayat berikut:",
        potonganAyat: "قُلِ ادْعُوا الَّذِينَ زَعَمْتُم مِّن دُونِ اللَّهِ ۖ لَا يَمْلِكُونَ مِثْقَالَ ذَرَّةٍ فِي السَّمَاوَاتِ وَلَا فِي الْأَرْضِ وَمَا لَهُمْ فِيهِمَا مِن شِرْكٍ وَمَا لَهُ مِنْهُم مِّن ظَهِيرٍ",
        referensi: "Surat Saba (34): 22",
        kunciJawaban: "Surat Saba ayat 22"
      },
      {
        nomor: 2,
        jenis: "sambung",
        pertanyaan: "Sambungkan ayat berikut:",
        potonganAyat: "إِنَّ اللَّهَ يُمْسِكُ السَّمَاوَاتِ وَالْأَرْضَ أَن تَزُولَا ۚ وَلَئِن زَالَتَا إِنْ أَمْسَكَهُمَا مِنْ أَحَدٍ مِّن بَعْدِهِ ۚ إِنَّهُ كَانَ حَلِيمًا غَفُورًا",
        referensi: "Surat Fatir (35): 41",
        kunciJawaban: "Surat Fatir ayat 41"
      },
      {
        nomor: 3,
        jenis: "bacakan",
        pertanyaan: "Bacakan Quran Surat Az-Zalzalah ayat 1-8",
        rentangAyat: "1-8 (8 ayat)",
        kunciJawaban: "إِذَا زُلْزِلَتِ الْأَرْضُ زِلْزَالَهَا... مِثْقَالَ ذَرَّةٍ خَيْرًا يَرَهُ"
      },
      {
        nomor: 4,
        jenis: "sambung-surat",
        pertanyaan: "Sambungkan ayat terakhir Surat An-Nasr ke awal Surat Al-Masad:",
        potonganAyat: "...وَاسْتَغْفِرْهُ ۚ إِنَّهُ كَانَ تَوَّابًا",
        kunciJawaban: "تَبَّتْ يَدَا أَبِي لَهَبٍ وَتَبَّ"
      }
    ]
  }
];