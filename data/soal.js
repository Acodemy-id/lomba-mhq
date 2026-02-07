/**
 * DATA 30 PAKET SOAL LOMBA MHQ - REVISI RANDOM
 * Semua soal dari Juz 29 (Tabarak) dan Juz 30 ('Amma)
 * 
 * Format Soal:
 * - Soal 1 & 2: Sambung ayat, kunci jawaban = 3 ayat lengkap (RANDOM, tidak selalu awal)
 * - Soal 3: Bacakan 5 ayat
 * - Soal 4: Sambung surat (ayat terakhir ke awal surat berikutnya)
 */

const PAKET_SOAL = [
  {
    "id": 1,
    "soal": [
      {
        "nomor": 1,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "فِيهَا كُتُبٌ قَيِّمَةٌ وَمَا تَفَرَّقَ الَّذِينَ أُوتُوا الْكِتَابَ إِلَّا مِن بَعْدِ مَا جَاءَتْهُمُ الْبَيِّنَةُ",
        "referensi": "Surat Al-Bayyinah: 3-4",
        "kunciLabel": "3 Ayat Surat Al-Bayyinah (ayat 3-5):",
        "kunciArab": "(٣) فِيهَا كُتُبٌ قَيِّمَةٌ ۝ (٤) وَمَا تَفَرَّقَ الَّذِينَ أُوتُوا الْكِتَابَ إِلَّا مِن بَعْدِ مَا جَاءَتْهُمُ الْبَيِّنَةُ ۝ (٥) وَمَا أُمِرُوا إِلَّا لِيَعْبُدُوا اللَّهَ مُخْلِصِينَ لَهُ الدِّينَ"
      },
      {
        "nomor": 2,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "إِن كُلُّ نَفْسٍ لَّمَّا عَلَيْهَا حَافِظٌ فَلْيَنظُرِ الْإِنسَانُ مِمَّ خُلِقَ خُلِقَ مِن مَّاءٍ دَافِقٍ",
        "referensi": "Surat At-Tariq: 6-8",
        "kunciLabel": "3 Ayat Surat At-Tariq (ayat 6-8):",
        "kunciArab": "(٦) إِن كُلُّ نَفْسٍ لَّمَّا عَلَيْهَا حَافِظٌ ۝ (٧) فَلْيَنظُرِ الْإِنسَانُ مِمَّ خُلِقَ ۝ (٨) خُلِقَ مِن مَّاءٍ دَافِقٍ"
      },
      {
        "nomor": 3,
        "jenis": "bacakan",
        "pertanyaan": "Bacakan Quran Surat Al-Ma'arij ayat 19-23",
        "rentangAyat": "Ayat 19-23",
        "kunciLabel": "5 Ayat lengkap (Surat Al-Ma'arij 19-23):",
        "kunciArab": "[Ayat 19-23 Surat Al-Ma'arij]"
      },
      {
        "nomor": 4,
        "jenis": "sambung-surat",
        "pertanyaan": "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:",
        "potonganAyat": "...سَلَامٌ هِيَ حَتَّىٰ مَطْلَعِ الْفَجْرِ",
        "kunciLabel": "Surat berikutnya: Al-Bayyinah - 5 ayat awal:",
        "kunciArab": "(١) [Ayat 1 Surat Al-Bayyinah] ۝ (٢) [Ayat 2 Surat Al-Bayyinah] ۝ (٣) [Ayat 3 Surat Al-Bayyinah] ۝ (٤) [Ayat 4 Surat Al-Bayyinah] ۝ (٥) [Ayat 5 Surat Al-Bayyinah]"
      }
    ]
  },
  {
    "id": 2,
    "soal": [
      {
        "nomor": 1,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "لَقَدْ خَلَقْنَا الْإِنسَانَ فِي أَحْسَنِ تَقْوِيمٍ ثُمَّ رَدَدْنَاهُ أَسْفَلَ سَافِلِينَ",
        "referensi": "Surat At-Tin: 4-5",
        "kunciLabel": "3 Ayat Surat At-Tin (ayat 4-6):",
        "kunciArab": "(٤) لَقَدْ خَلَقْنَا الْإِنسَانَ فِي أَحْسَنِ تَقْوِيمٍ ۝ (٥) ثُمَّ رَدَدْنَاهُ أَسْفَلَ سَافِلِينَ ۝ (٦) إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ فَلَهُمْ أَجْرٌ غَيْرُ مَمْنُونٍ"
      },
      {
        "nomor": 2,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "وَأَمَّا مَنْ أُوتِيَ كِتَابَهُ بِشِمَالِهِ فَيَقُولُ يَا لَيْتَنِي لَمْ أُوتَ كِتَابِيهْ وَلَمْ أَدْرِ مَا حِسَابِيهْ",
        "referensi": "Surat Al-Haqqah: 25-27",
        "kunciLabel": "3 Ayat Surat Al-Haqqah (ayat 25-27):",
        "kunciArab": "(٢٥) وَأَمَّا مَنْ أُوتِيَ كِتَابَهُ بِشِمَالِهِ فَيَقُولُ يَا لَيْتَنِي لَمْ أُوتَ كِتَابِيهْ ۝ (٢٦) وَلَمْ أَدْرِ مَا حِسَابِيهْ ۝ (٢٧) يَا لَيْتَهَا كَانَتِ الْقَاضِيَةَ"
      },
      {
        "nomor": 3,
        "jenis": "bacakan",
        "pertanyaan": "Bacakan Quran Surat Al-Ma'un ayat 1-5",
        "rentangAyat": "Ayat 1-5",
        "kunciLabel": "5 Ayat lengkap (Surat Al-Ma'un 1-5):",
        "kunciArab": "[Ayat 1-5 Surat Al-Ma'un]"
      },
      {
        "nomor": 4,
        "jenis": "sambung-surat",
        "pertanyaan": "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:",
        "potonganAyat": "...عَلِيمٌ خَبِيرٌ",
        "kunciLabel": "Surat berikutnya: Al-Mutaffifin - 5 ayat awal:",
        "kunciArab": "(١) [Ayat 1 Surat Al-Mutaffifin] ۝ (٢) [Ayat 2 Surat Al-Mutaffifin] ۝ (٣) [Ayat 3 Surat Al-Mutaffifin] ۝ (٤) [Ayat 4 Surat Al-Mutaffifin] ۝ (٥) [Ayat 5 Surat Al-Mutaffifin]"
      }
    ]
  },
  {
    "id": 3,
    "soal": [
      {
        "nomor": 1,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "كَلَّا إِنَّ كِتَابَ الْأَبْرَارِ لَفِي عِلِّيِّينَ وَمَا أَدْرَاكَ مَا عِلِّيُّونَ كِتَابٌ مَّرْقُومٌ",
        "referensi": "Surat Al-Mutaffifin: 18-20",
        "kunciLabel": "3 Ayat Surat Al-Mutaffifin (ayat 18-20):",
        "kunciArab": "(١٨) كَلَّا إِنَّ كِتَابَ الْأَبْرَارِ لَفِي عِلِّيِّينَ ۝ (١٩) وَمَا أَدْرَاكَ مَا عِلِّيُّونَ ۝ (٢٠) كِتَابٌ مَّرْقُومٌ"
      },
      {
        "nomor": 2,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "وَإِذَا الْوُحُوشُ حُشِرَتْ وَإِذَا الْبِحَارُ سُجِّرَتْ وَإِذَا النُّفُوسُ زُوِّجَتْ",
        "referensi": "Surat At-Takwir: 5-7",
        "kunciLabel": "3 Ayat Surat At-Takwir (ayat 5-7):",
        "kunciArab": "(٥) وَإِذَا الْوُحُوشُ حُشِرَتْ ۝ (٦) وَإِذَا الْبِحَارُ سُجِّرَتْ ۝ (٧) وَإِذَا النُّفُوسُ زُوِّجَتْ"
      },
      {
        "nomor": 3,
        "jenis": "bacakan",
        "pertanyaan": "Bacakan Quran Surat Al-Inshiqaq ayat 1-5",
        "rentangAyat": "Ayat 1-5",
        "kunciLabel": "5 Ayat lengkap (Surat Al-Inshiqaq 1-5):",
        "kunciArab": "[Ayat 1-5 Surat Al-Inshiqaq]"
      },
      {
        "nomor": 4,
        "jenis": "sambung-surat",
        "pertanyaan": "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:",
        "potonganAyat": "...فَإِذَا فَرَغْتَ فَانصَبْ",
        "kunciLabel": "Surat berikutnya: At-Tin - 5 ayat awal:",
        "kunciArab": "(١) [Ayat 1 Surat At-Tin] ۝ (٢) [Ayat 2 Surat At-Tin] ۝ (٣) [Ayat 3 Surat At-Tin] ۝ (٤) [Ayat 4 Surat At-Tin] ۝ (٥) [Ayat 5 Surat At-Tin]"
      }
    ]
  },
  {
    "id": 4,
    "soal": [
      {
        "nomor": 1,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "وَلَالْآخِرَةُ خَيْرٌ لَّكَ مِنَ الْأُولَىٰ وَلَسَوْفَ يُعْطِيكَ رَبُّكَ فَتَرْضَىٰ",
        "referensi": "Surat Ad-Duha: 4-5",
        "kunciLabel": "3 Ayat Surat Ad-Duha (ayat 4-6):",
        "kunciArab": "(٤) وَلَالْآخِرَةُ خَيْرٌ لَّكَ مِنَ الْأُولَىٰ ۝ (٥) وَلَسَوْفَ يُعْطِيكَ رَبُّكَ فَتَرْضَىٰ ۝ (٦) أَلَمْ يَجِدْكَ يَتِيمًا فَآوَىٰ"
      },
      {
        "nomor": 2,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "ثُمَّ جَعَلَهُ غُثَاءً أَحْوَىٰ سَنُقْرِئُكَ فَلَا تَنسَىٰ إِلَّا مَا شَاءَ اللَّهُ",
        "referensi": "Surat Al-'Alaq: 5-7",
        "kunciLabel": "3 Ayat Surat Al-'Alaq (ayat 5-7):",
        "kunciArab": "(٥) ثُمَّ جَعَلَهُ غُثَاءً أَحْوَىٰ ۝ (٦) سَنُقْرِئُكَ فَلَا تَنسَىٰ ۝ (٧) إِلَّا مَا شَاءَ اللَّهُ"
      },
      {
        "nomor": 3,
        "jenis": "bacakan",
        "pertanyaan": "Bacakan Quran Surat Al-Qari'ah ayat 1-5",
        "rentangAyat": "Ayat 1-5",
        "kunciLabel": "5 Ayat lengkap (Surat Al-Qari'ah 1-5):",
        "kunciArab": "[Ayat 1-5 Surat Al-Qari'ah]"
      },
      {
        "nomor": 4,
        "jenis": "sambung-surat",
        "pertanyaan": "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:",
        "potonganAyat": "...هَلْ فِي ذَٰلِكَ قَسَمٌ لِّذِي حِجْرٍ",
        "kunciLabel": "Surat berikutnya: Al-Fajr - 5 ayat awal:",
        "kunciArab": "(١) [Ayat 1 Surat Al-Fajr] ۝ (٢) [Ayat 2 Surat Al-Fajr] ۝ (٣) [Ayat 3 Surat Al-Fajr] ۝ (٤) [Ayat 4 Surat Al-Fajr] ۝ (٥) [Ayat 5 Surat Al-Fajr]"
      }
    ]
  },
  {
    "id": 5,
    "soal": [
      {
        "nomor": 1,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "وَلَقَدْ زَيَّنَّا السَّمَاءَ الدُّنْيَا بِمَصَابِيحَ وَجَعَلْنَاهَا رُجُومًا لِّلشَّيَاطِينِ",
        "referensi": "Surat Al-Mulk: 5-6",
        "kunciLabel": "3 Ayat Surat Al-Mulk (ayat 5-7):",
        "kunciArab": "(٥) وَلَقَدْ زَيَّنَّا السَّمَاءَ الدُّنْيَا بِمَصَابِيحَ ۝ (٦) وَجَعَلْنَاهَا رُجُومًا لِّلشَّيَاطِينِ ۝ (٧) وَأَعْتَدْنَا لَهُمْ عَذَابَ السَّعِيرِ"
      },
      {
        "nomor": 2,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "يَا أَيُّهَا الْإِنسَانُ إِنَّكَ كَادِحٌ إِلَىٰ رَبِّكَ كَدْحًا فَمُلَاقِيهِ فَأَمَّا مَنْ أُوتِيَ كِتَابَهُ بِيَمِينِهِ",
        "referensi": "Surat Al-Inshiqaq: 6-8",
        "kunciLabel": "3 Ayat Surat Al-Inshiqaq (ayat 6-8):",
        "kunciArab": "(٦) يَا أَيُّهَا الْإِنسَانُ إِنَّكَ كَادِحٌ إِلَىٰ رَبِّكَ كَدْحًا فَمُلَاقِيهِ ۝ (٧) فَأَمَّا مَنْ أُوتِيَ كِتَابَهُ بِيَمِينِهِ ۝ (٨) فَسَوْفَ يُحَاسَبُ حِسَابًا يَسِيرًا"
      },
      {
        "nomor": 3,
        "jenis": "bacakan",
        "pertanyaan": "Bacakan Quran Surat Al-'Alaq ayat 1-5",
        "rentangAyat": "Ayat 1-5",
        "kunciLabel": "5 Ayat lengkap (Surat Al-'Alaq 1-5):",
        "kunciArab": "[Ayat 1-5 Surat Al-'Alaq]"
      },
      {
        "nomor": 4,
        "jenis": "sambung-surat",
        "pertanyaan": "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:",
        "potonganAyat": "...إِنَّ هَٰذَا لَرِزْقٌ لَّنَا",
        "kunciLabel": "Surat berikutnya: Al-Mursalat - 5 ayat awal:",
        "kunciArab": "(١) [Ayat 1 Surat Al-Mursalat] ۝ (٢) [Ayat 2 Surat Al-Mursalat] ۝ (٣) [Ayat 3 Surat Al-Mursalat] ۝ (٤) [Ayat 4 Surat Al-Mursalat] ۝ (٥) [Ayat 5 Surat Al-Mursalat]"
      }
    ]
  },
  {
    "id": 6,
    "soal": [
      {
        "nomor": 1,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "وَمَا أُمِرُوا إِلَّا لِيَعْبُدُوا اللَّهَ مُخْلِصِينَ لَهُ الدِّينَ حُنَفَاءَ وَيُقِيمُوا الصَّلَاةَ وَيُؤْتُوا الزَّكَاةَ",
        "referensi": "Surat Al-Bayyinah: 5-6",
        "kunciLabel": "3 Ayat Surat Al-Bayyinah (ayat 5-7):",
        "kunciArab": "(٥) وَمَا أُمِرُوا إِلَّا لِيَعْبُدُوا اللَّهَ مُخْلِصِينَ لَهُ الدِّينَ ۝ (٦) حُنَفَاءَ وَيُقِيمُوا الصَّلَاةَ وَيُؤْتُوا الزَّكَاةَ ۝ (٧) وَذَٰلِكَ دِينُ الْقَيِّمَةِ"
      },
      {
        "nomor": 2,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "قُتِلَ أَصْحَابُ الْأُخْدُودِ النَّارِ ذَاتِ الْوَقُودِ إِذْ هُمْ عَلَيْهَا قُعُودٌ",
        "referensi": "Surat Al-Buruj: 4-6",
        "kunciLabel": "3 Ayat Surat Al-Buruj (ayat 4-6):",
        "kunciArab": "(٤) قُتِلَ أَصْحَابُ الْأُخْدُودِ ۝ (٥) النَّارِ ذَاتِ الْوَقُودِ ۝ (٦) إِذْ هُمْ عَلَيْهَا قُعُودٌ"
      },
      {
        "nomor": 3,
        "jenis": "bacakan",
        "pertanyaan": "Bacakan Quran Surat An-Nasr ayat 1-3",
        "rentangAyat": "Ayat 1-3",
        "kunciLabel": "3 Ayat lengkap (Surat An-Nasr 1-3):",
        "kunciArab": "[Ayat 1-3 Surat An-Nasr]"
      },
      {
        "nomor": 4,
        "jenis": "sambung-surat",
        "pertanyaan": "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:",
        "potonganAyat": "...إِنَّ رَبَّهُم بِهِمْ يَوْمَئِذٍ لَّخَبِيرٌ",
        "kunciLabel": "Surat berikutnya: Al-Qari'ah - 5 ayat awal:",
        "kunciArab": "(١) [Ayat 1 Surat Al-Qari'ah] ۝ (٢) [Ayat 2 Surat Al-Qari'ah] ۝ (٣) [Ayat 3 Surat Al-Qari'ah] ۝ (٤) [Ayat 4 Surat Al-Qari'ah] ۝ (٥) [Ayat 5 Surat Al-Qari'ah]"
      }
    ]
  },
  {
    "id": 7,
    "soal": [
      {
        "nomor": 1,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "إِنَّ فِي ذَٰلِكَ لَعِبْرَةً لِّمَن يَخْشَىٰ كَذَّبَتْ ثَمُودُ وَعَادٌ بِالْقَارِعَةِ",
        "referensi": "Surat Al-Haqqah: 4-6",
        "kunciLabel": "3 Ayat Surat Al-Haqqah (ayat 4-6):",
        "kunciArab": "(٤) كَذَّبَتْ ثَمُودُ وَعَادٌ بِالْقَارِعَةِ ۝ (٥) فَأَمَّا ثَمُودُ فَأُهْلِكُوا بِالطَّاغِيَةِ ۝ (٦) وَأَمَّا عَادٌ فَأُهْلِكُوا بِرِيحٍ صَرْصَرٍ عَاتِيَةٍ"
      },
      {
        "nomor": 2,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "إِذَا الشَّمْسُ كُوِّرَتْ وَإِذَا النُّجُومُ انكَدَرَتْ وَإِذَا الْجِبَالُ سُيِّرَتْ",
        "referensi": "Surat At-Takwir: 1-3",
        "kunciLabel": "3 Ayat awal Surat At-Takwir (1-3):",
        "kunciArab": "(١) إِذَا الشَّمْسُ كُوِّرَتْ ۝ (٢) وَإِذَا النُّجُومُ انكَدَرَتْ ۝ (٣) وَإِذَا الْجِبَالُ سُيِّرَتْ"
      },
      {
        "nomor": 3,
        "jenis": "bacakan",
        "pertanyaan": "Bacakan Quran Surat At-Tin ayat 1-5",
        "rentangAyat": "Ayat 1-5",
        "kunciLabel": "5 Ayat lengkap (Surat At-Tin 1-5):",
        "kunciArab": "[Ayat 1-5 Surat At-Tin]"
      },
      {
        "nomor": 4,
        "jenis": "sambung-surat",
        "pertanyaan": "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:",
        "potonganAyat": "...ثُمَّ كَلَّا سَيَعْلَمُونَ",
        "kunciLabel": "Surat berikutnya: Al-Ma'arij - 5 ayat awal:",
        "kunciArab": "(١) [Ayat 1 Surat Al-Ma'arij] ۝ (٢) [Ayat 2 Surat Al-Ma'arij] ۝ (٣) [Ayat 3 Surat Al-Ma'arij] ۝ (٤) [Ayat 4 Surat Al-Ma'arij] ۝ (٥) [Ayat 5 Surat Al-Ma'arij]"
      }
    ]
  },
  {
    "id": 8,
    "soal": [
      {
        "nomor": 1,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "أَلَمْ نَجْعَلِ الْأَرْضَ كِفَاتًا أَحْيَاءً وَأَمْوَاتًا وَجَعَلْنَا فِيهَا رَوَاسِيَ شَامِخَاتٍ",
        "referensi": "Surat Al-Mursalat: 25-27",
        "kunciLabel": "3 Ayat Surat Al-Mursalat (ayat 25-27):",
        "kunciArab": "(٢٥) أَلَمْ نَجْعَلِ الْأَرْضَ كِفَاتًا ۝ (٢٦) أَحْيَاءً وَأَمْوَاتًا ۝ (٢٧) وَجَعَلْنَا فِيهَا رَوَاسِيَ شَامِخَاتٍ"
      },
      {
        "nomor": 2,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "وَإِنَّ لَكَ لَأَجْرًا غَيْرَ مَمْنُونٍ وَإِنَّكَ لَعَلَىٰ خُلُقٍ عَظِيمٍ فَسَتُبْصِرُ وَيُبْصِرُونَ",
        "referensi": "Surat Al-Qalam: 3-5",
        "kunciLabel": "3 Ayat Surat Al-Qalam (ayat 3-5):",
        "kunciArab": "(٣) وَإِنَّ لَكَ لَأَجْرًا غَيْرَ مَمْنُونٍ ۝ (٤) وَإِنَّكَ لَعَلَىٰ خُلُقٍ عَظِيمٍ ۝ (٥) فَسَتُبْصِرُ وَيُبْصِرُونَ"
      },
      {
        "nomor": 3,
        "jenis": "bacakan",
        "pertanyaan": "Bacakan Quran Surat Az-Zalzalah ayat 1-5",
        "rentangAyat": "Ayat 1-5",
        "kunciLabel": "5 Ayat lengkap (Surat Az-Zalzalah 1-5):",
        "kunciArab": "[Ayat 1-5 Surat Az-Zalzalah]"
      },
      {
        "nomor": 4,
        "jenis": "sambung-surat",
        "pertanyaan": "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:",
        "potonganAyat": "...مِثْقَالَ ذَرَّةٍ خَيْرًا يَرَهُ",
        "kunciLabel": "Surat berikutnya: Al-'Adiyat - 5 ayat awal:",
        "kunciArab": "(١) [Ayat 1 Surat Al-'Adiyat] ۝ (٢) [Ayat 2 Surat Al-'Adiyat] ۝ (٣) [Ayat 3 Surat Al-'Adiyat] ۝ (٤) [Ayat 4 Surat Al-'Adiyat] ۝ (٥) [Ayat 5 Surat Al-'Adiyat]"
      }
    ]
  },
  {
    "id": 9,
    "soal": [
      {
        "nomor": 1,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "فَذَرْنِي وَمَن يُكَذِّبُ بِهَٰذَا الْحَدِيثِ سَنَسْتَدْرِجُهُم مِّنْ حَيْثُ لَا يَعْلَمُونَ وَأُمْلِي لَهُمْ",
        "referensi": "Surat Al-Qalam: 44-46",
        "kunciLabel": "3 Ayat Surat Al-Qalam (ayat 44-46):",
        "kunciArab": "(٤٤) فَذَرْنِي وَمَن يُكَذِّبُ بِهَٰذَا الْحَدِيثِ ۝ (٤٥) سَنَسْتَدْرِجُهُم مِّنْ حَيْثُ لَا يَعْلَمُونَ ۝ (٤٦) وَأُمْلِي لَهُمْ"
      },
      {
        "nomor": 2,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "فِي جَنَّاتٍ يَتَسَاءَلُونَ عَنِ الْمُجْرِمِينَ مَا سَلَكَكُمْ فِي سَقَرَ",
        "referensi": "Surat Al-Muddassir: 40-42",
        "kunciLabel": "3 Ayat Surat Al-Muddassir (ayat 40-42):",
        "kunciArab": "(٤٠) فِي جَنَّاتٍ يَتَسَاءَلُونَ ۝ (٤١) عَنِ الْمُجْرِمِينَ ۝ (٤٢) مَا سَلَكَكُمْ فِي سَقَرَ"
      },
      {
        "nomor": 3,
        "jenis": "bacakan",
        "pertanyaan": "Bacakan Quran Surat Al-Ghashiyah ayat 1-5",
        "rentangAyat": "Ayat 1-5",
        "kunciLabel": "5 Ayat lengkap (Surat Al-Ghashiyah 1-5):",
        "kunciArab": "[Ayat 1-5 Surat Al-Ghashiyah]"
      },
      {
        "nomor": 4,
        "jenis": "sambung-surat",
        "pertanyaan": "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:",
        "potonganAyat": "...وَمَا أُمِرُوا إِلَّا لِيَعْبُدُوا اللَّهَ",
        "kunciLabel": "Surat berikutnya: Az-Zalzalah - 5 ayat awal:",
        "kunciArab": "(١) [Ayat 1 Surat Az-Zalzalah] ۝ (٢) [Ayat 2 Surat Az-Zalzalah] ۝ (٣) [Ayat 3 Surat Az-Zalzalah] ۝ (٤) [Ayat 4 Surat Az-Zalzalah] ۝ (٥) [Ayat 5 Surat Az-Zalzalah]"
      }
    ]
  },
  {
    "id": 10,
    "soal": [
      {
        "nomor": 1,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "إِنَّ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ لَهُمْ أَجْرٌ غَيْرُ مَمْنُونٍ فَمَا لَكَ كَيْفَ تَحْكُمُ أَمْ تَأْتِيهِم بِجُنَّةٍ",
        "referensi": "Surat Al-Qalam: 30-32",
        "kunciLabel": "3 Ayat Surat Al-Qalam (ayat 30-32):",
        "kunciArab": "(٣٠) إِنَّ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ لَهُمْ أَجْرٌ غَيْرُ مَمْنُونٍ ۝ (٣١) فَمَا لَكَ كَيْفَ تَحْكُمُ ۝ (٣٢) أَمْ تَأْتِيهِم بِجُنَّةٍ"
      },
      {
        "nomor": 2,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "كَلَّا إِنَّ كِتَابَ الْفُجَّارِ لَفِي سِجِّينٍ وَمَا أَدْرَاكَ مَا سِجِّينٌ كِتَابٌ مَّرْقُومٌ",
        "referensi": "Surat Al-Mutaffifin: 7-9",
        "kunciLabel": "3 Ayat Surat Al-Mutaffifin (ayat 7-9):",
        "kunciArab": "(٧) كَلَّا إِنَّ كِتَابَ الْفُجَّارِ لَفِي سِجِّينٍ ۝ (٨) وَمَا أَدْرَاكَ مَا سِجِّينٌ ۝ (٩) كِتَابٌ مَّرْقُومٌ"
      },
      {
        "nomor": 3,
        "jenis": "bacakan",
        "pertanyaan": "Bacakan Quran Surat Al-Infitar ayat 6-10",
        "rentangAyat": "Ayat 6-10",
        "kunciLabel": "5 Ayat lengkap (Surat Al-Infitar 6-10):",
        "kunciArab": "[Ayat 6-10 Surat Al-Infitar]"
      },
      {
        "nomor": 4,
        "jenis": "sambung-surat",
        "pertanyaan": "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:",
        "potonganAyat": "...وَإِنَّ لَكَ لَأَجْرًا غَيْرَ مَمْنُونٍ",
        "kunciLabel": "Surat berikutnya: Al-Haqqah - 5 ayat awal:",
        "kunciArab": "(١) [Ayat 1 Surat Al-Haqqah] ۝ (٢) [Ayat 2 Surat Al-Haqqah] ۝ (٣) [Ayat 3 Surat Al-Haqqah] ۝ (٤) [Ayat 4 Surat Al-Haqqah] ۝ (٥) [Ayat 5 Surat Al-Haqqah]"
      }
    ]
  },
  {
    "id": 11,
    "soal": [
      {
        "nomor": 1,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "مَا لَهُم مِّنَ اللَّهِ مِنْ عَاصِمٍ كَأَنَّهُمْ حُمُرٌ مُّسْتَنفِرَةٌ فَرَّتْ مِن قَسْوَرَةٍ",
        "referensi": "Surat Al-Muddassir: 50-52",
        "kunciLabel": "3 Ayat Surat Al-Muddassir (ayat 50-52):",
        "kunciArab": "(٥٠) مَا لَهُم مِّنَ اللَّهِ مِنْ عَاصِمٍ ۝ (٥١) كَأَنَّهُمْ حُمُرٌ مُّسْتَنفِرَةٌ ۝ (٥٢) فَرَّتْ مِن قَسْوَرَةٍ"
      },
      {
        "nomor": 2,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "أَلَمْ نَجْعَلِ الْأَرْضَ مِهَادًا وَالْجِبَالَ أَوْتَادًا وَخَلَقْنَاكُمْ أَزْوَاجًا",
        "referensi": "Surat An-Naba': 6-8",
        "kunciLabel": "3 Ayat Surat An-Naba' (ayat 6-8):",
        "kunciArab": "(٦) أَلَمْ نَجْعَلِ الْأَرْضَ مِهَادًا ۝ (٧) وَالْجِبَالَ أَوْتَادًا ۝ (٨) وَخَلَقْنَاكُمْ أَزْوَاجًا"
      },
      {
        "nomor": 3,
        "jenis": "bacakan",
        "pertanyaan": "Bacakan Quran Surat Al-A'la ayat 1-5",
        "rentangAyat": "Ayat 1-5",
        "kunciLabel": "5 Ayat lengkap (Surat Al-A'la 1-5):",
        "kunciArab": "[Ayat 1-5 Surat Al-A'la]"
      },
      {
        "nomor": 4,
        "jenis": "sambung-surat",
        "pertanyaan": "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:",
        "potonganAyat": "...فَذَكِّرْ إِن نَّفَعَتِ الذِّكْرَىٰ",
        "kunciLabel": "Surat berikutnya: Al-Ghashiyah - 5 ayat awal:",
        "kunciArab": "(١) [Ayat 1 Surat Al-Ghashiyah] ۝ (٢) [Ayat 2 Surat Al-Ghashiyah] ۝ (٣) [Ayat 3 Surat Al-Ghashiyah] ۝ (٤) [Ayat 4 Surat Al-Ghashiyah] ۝ (٥) [Ayat 5 Surat Al-Ghashiyah]"
      }
    ]
  },
  {
    "id": 12,
    "soal": [
      {
        "nomor": 1,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "فَسَوْفَ يُحَاسَبُ حِسَابًا يَسِيرًا وَيَنقَلِبُ إِلَىٰ أَهْلِهِ مَسْرُورًا وَأَمَّا مَنْ أُوتِيَ كِتَابَهُ",
        "referensi": "Surat Al-Inshiqaq: 8-10",
        "kunciLabel": "3 Ayat Surat Al-Inshiqaq (ayat 8-10):",
        "kunciArab": "(٨) فَسَوْفَ يُحَاسَبُ حِسَابًا يَسِيرًا ۝ (٩) وَيَنقَلِبُ إِلَىٰ أَهْلِهِ مَسْرُورًا ۝ (١٠) وَأَمَّا مَنْ أُوتِيَ كِتَابَهُ وَرَاءَ ظَهْرِهِ"
      },
      {
        "nomor": 2,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "فَسَيَذْكُرُ مَا يُرَىٰ أَوْفَىٰ لَكَ فَأَوْفَىٰ وَإِنَّ ذَٰلِكَ لَفِي صُحُفِ الْأُولَىٰ",
        "referensi": "Surat An-Nazi'at: 35-37",
        "kunciLabel": "3 Ayat Surat An-Nazi'at (ayat 35-37):",
        "kunciArab": "(٣٥) فَسَيَذْكُرُ مَا يُرَىٰ ۝ (٣٦) أَوْفَىٰ لَكَ فَأَوْفَىٰ ۝ (٣٧) وَإِنَّ ذَٰلِكَ لَفِي صُحُفِ الْأُولَىٰ"
      },
      {
        "nomor": 3,
        "jenis": "bacakan",
        "pertanyaan": "Bacakan Quran Surat Al-Haqqah ayat 19-23",
        "rentangAyat": "Ayat 19-23",
        "kunciLabel": "5 Ayat lengkap (Surat Al-Haqqah 19-23):",
        "kunciArab": "[Ayat 19-23 Surat Al-Haqqah]"
      },
      {
        "nomor": 4,
        "jenis": "sambung-surat",
        "pertanyaan": "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:",
        "potonganAyat": "...وَصَدَقَتِ الْمُصَدِّقُونَ",
        "kunciLabel": "Surat berikutnya: Ad-Duha - 5 ayat awal:",
        "kunciArab": "(١) [Ayat 1 Surat Ad-Duha] ۝ (٢) [Ayat 2 Surat Ad-Duha] ۝ (٣) [Ayat 3 Surat Ad-Duha] ۝ (٤) [Ayat 4 Surat Ad-Duha] ۝ (٥) [Ayat 5 Surat Ad-Duha]"
      }
    ]
  },
  {
    "id": 13,
    "soal": [
      {
        "nomor": 1,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "وَاللَّيْلِ إِذَا يَغْشَىٰ وَالنَّهَارِ إِذَا تَجَلَّىٰ وَمَا خَلَقَ الذَّكَرَ وَالْأُنثَىٰ",
        "referensi": "Surat Al-Lail: 1-3",
        "kunciLabel": "3 Ayat awal Surat Al-Lail (1-3):",
        "kunciArab": "(١) وَاللَّيْلِ إِذَا يَغْشَىٰ ۝ (٢) وَالنَّهَارِ إِذَا تَجَلَّىٰ ۝ (٣) وَمَا خَلَقَ الذَّكَرَ وَالْأُنثَىٰ"
      },
      {
        "nomor": 2,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "فَلْيَنظُرِ الْإِنسَانُ إِلَىٰ طَعَامِهِ أَنَّا صَبَبْنَا الْمَاءَ صَبًّا ثُمَّ شَقَقْنَا الْأَرْضَ شَقًّا",
        "referensi": "Surat 'Abasa: 24-26",
        "kunciLabel": "3 Ayat Surat 'Abasa (ayat 24-26):",
        "kunciArab": "(٢٤) فَلْيَنظُرِ الْإِنسَانُ إِلَىٰ طَعَامِهِ ۝ (٢٥) أَنَّا صَبَبْنَا الْمَاءَ صَبًّا ۝ (٢٦) ثُمَّ شَقَقْنَا الْأَرْضَ شَقًّا"
      },
      {
        "nomor": 3,
        "jenis": "bacakan",
        "pertanyaan": "Bacakan Quran Surat Al-'Adiyat ayat 1-5",
        "rentangAyat": "Ayat 1-5",
        "kunciLabel": "5 Ayat lengkap (Surat Al-'Adiyat 1-5):",
        "kunciArab": "[Ayat 1-5 Surat Al-'Adiyat]"
      },
      {
        "nomor": 4,
        "jenis": "sambung-surat",
        "pertanyaan": "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:",
        "potonganAyat": "...فَسَيُنزِلُ اللَّهُ عَزَابًا مِّنَ السَّمَاءِ",
        "kunciLabel": "Surat berikutnya: At-Takwir - 5 ayat awal:",
        "kunciArab": "(١) [Ayat 1 Surat At-Takwir] ۝ (٢) [Ayat 2 Surat At-Takwir] ۝ (٣) [Ayat 3 Surat At-Takwir] ۝ (٤) [Ayat 4 Surat At-Takwir] ۝ (٥) [Ayat 5 Surat At-Takwir]"
      }
    ]
  },
  {
    "id": 14,
    "soal": [
      {
        "nomor": 1,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "وَمَا يُدْرِيكَ لَعَلَّهُ يَزَّكَّىٰ أَوْ يَذَّكَّرُ فَتَنفَعَهُ الذِّكْرَىٰ أَمَّا مَنِ اسْتَغْنَىٰ",
        "referensi": "Surat 'Abasa: 3-5",
        "kunciLabel": "3 Ayat Surat 'Abasa (ayat 3-5):",
        "kunciArab": "(٣) وَمَا يُدْرِيكَ لَعَلَّهُ يَزَّكَّىٰ ۝ (٤) أَوْ يَذَّكَّرُ فَتَنفَعَهُ الذِّكْرَىٰ ۝ (٥) أَمَّا مَنِ اسْتَغْنَىٰ"
      },
      {
        "nomor": 2,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "أَفَمَنْ هُوَ مُؤْمِنٌ كَمَنْ هُوَ فَاسِقٌ لَّا يَسْتَوُونَ أَمَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ فَلَهُمْ",
        "referensi": "Surat As-Sajdah: 18-20",
        "kunciLabel": "3 Ayat Surat As-Sajdah (ayat 18-20):",
        "kunciArab": "(١٨) أَفَمَنْ هُوَ مُؤْمِنٌ كَمَنْ هُوَ فَاسِقٌ ۝ (١٩) لَّا يَسْتَوُونَ ۝ (٢٠) أَمَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ فَلَهُمْ جَنَّاتُ الْمَأْوَىٰ"
      },
      {
        "nomor": 3,
        "jenis": "bacakan",
        "pertanyaan": "Bacakan Quran Surat An-Nas ayat 1-6",
        "rentangAyat": "Ayat 1-6",
        "kunciLabel": "6 Ayat lengkap (Surat An-Nas 1-6):",
        "kunciArab": "[Ayat 1-6 Surat An-Nas]"
      },
      {
        "nomor": 4,
        "jenis": "sambung-surat",
        "pertanyaan": "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:",
        "potonganAyat": "...إِنَّ فِي ذَٰلِكَ لَذِكْرَىٰ لِمَن كَانَ لَهُ قَلْبٌ",
        "kunciLabel": "Surat berikutnya: Al-Muddassir - 5 ayat awal:",
        "kunciArab": "(١) [Ayat 1 Surat Al-Muddassir] ۝ (٢) [Ayat 2 Surat Al-Muddassir] ۝ (٣) [Ayat 3 Surat Al-Muddassir] ۝ (٤) [Ayat 4 Surat Al-Muddassir] ۝ (٥) [Ayat 5 Surat Al-Muddassir]"
      }
    ]
  },
  {
    "id": 15,
    "soal": [
      {
        "nomor": 1,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "إِنَّهَا لَإِحْدَى الْكُبَرِ نَذِيرًا لِّلْبَشَرِ لِمَن شَاءَ مِنكُمْ أَن يَتَقَدَّمَ أَوْ يَتَأَخَّرَ",
        "referensi": "Surat Al-Muddassir: 35-37",
        "kunciLabel": "3 Ayat Surat Al-Muddassir (ayat 35-37):",
        "kunciArab": "(٣٥) إِنَّهَا لَإِحْدَى الْكُبَرِ ۝ (٣٦) نَذِيرًا لِّلْبَشَرِ ۝ (٣٧) لِمَن شَاءَ مِنكُمْ أَن يَتَقَدَّمَ أَوْ يَتَأَخَّرَ"
      },
      {
        "nomor": 2,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "إِذَا السَّمَاءُ انشَقَّتْ وَأَذِنَتْ لِرَبِّهَا وَحُقَّتْ وَإِذَا الْأَرْضُ مُدَّتْ وَأَلْقَتْ مَا فِيهَا",
        "referensi": "Surat Al-Inshiqaq: 1-4",
        "kunciLabel": "3 Ayat Surat Al-Inshiqaq (ayat 1-3):",
        "kunciArab": "(١) إِذَا السَّمَاءُ انشَقَّتْ ۝ (٢) وَأَذِنَتْ لِرَبِّهَا وَحُقَّتْ ۝ (٣) وَإِذَا الْأَرْضُ مُدَّتْ"
      },
      {
        "nomor": 3,
        "jenis": "bacakan",
        "pertanyaan": "Bacakan Quran Surat Ad-Duha ayat 1-5",
        "rentangAyat": "Ayat 1-5",
        "kunciLabel": "5 Ayat lengkap (Surat Ad-Duha 1-5):",
        "kunciArab": "[Ayat 1-5 Surat Ad-Duha]"
      },
      {
        "nomor": 4,
        "jenis": "sambung-surat",
        "pertanyaan": "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:",
        "potonganAyat": "...أَلَيْسَ اللَّهُ بِأَحْكَمِ الْحَاكِمِينَ",
        "kunciLabel": "Surat berikutnya: Al-'Alaq - 5 ayat awal:",
        "kunciArab": "(١) [Ayat 1 Surat Al-'Alaq] ۝ (٢) [Ayat 2 Surat Al-'Alaq] ۝ (٣) [Ayat 3 Surat Al-'Alaq] ۝ (٤) [Ayat 4 Surat Al-'Alaq] ۝ (٥) [Ayat 5 Surat Al-'Alaq]"
      }
    ]
  },
  {
    "id": 16,
    "soal": [
      {
        "nomor": 1,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "فِيهَا زُجَاجٌ وَفِيهَا سَطْوَعٌ وَفِيهَا كَأْسٌ مَّقَامٌ وَفِيهَا الْخَالِصُ الطَّيِّبُ",
        "referensi": "Surat As-Saffat: 45-47",
        "kunciLabel": "3 Ayat Surat As-Saffat (ayat 45-47):",
        "kunciArab": "(٤٥) فِيهَا زُجَاجٌ ۝ (٤٦) وَفِيهَا سَطْوَعٌ ۝ (٤٧) وَفِيهَا كَأْسٌ مَّقَامٌ"
      },
      {
        "nomor": 2,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "فِي أَيَّامٍ نَّحِسَاتٍ حَتَّىٰ يَبْلُغَ أَشُدَّهُ وَيَبْلُغَ أَرْبَعِينَ سَنَةً قَالَ رَبِّ أَوْزِعْنِي",
        "referensi": "Surat Al-Ahqaf: 15",
        "kunciLabel": "3 Ayat Surat Al-Ahqaf (ayat 15-17):",
        "kunciArab": "(١٥) فِي أَيَّامٍ نَّحِسَاتٍ حَتَّىٰ يَبْلُغَ أَشُدَّهُ وَيَبْلُغَ أَرْبَعِينَ سَنَةً ۝ (١٦) قَالَ رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ وَعَلَىٰ وَالِدَيَّ ۝ (١٧) وَأَنْ أَعْمَلَ صَالِحًا تَرْضَاهُ"
      },
      {
        "nomor": 3,
        "jenis": "bacakan",
        "pertanyaan": "Bacakan Quran Surat Al-Humazah ayat 1-5",
        "rentangAyat": "Ayat 1-5",
        "kunciLabel": "5 Ayat lengkap (Surat Al-Humazah 1-5):",
        "kunciArab": "[Ayat 1-5 Surat Al-Humazah]"
      },
      {
        "nomor": 4,
        "jenis": "sambung-surat",
        "pertanyaan": "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:",
        "potonganAyat": "...ثُمَّ كَلَّا سَيَعْلَمُونَ",
        "kunciLabel": "Surat berikutnya: An-Nazi'at - 5 ayat awal:",
        "kunciArab": "(١) [Ayat 1 Surat An-Nazi'at] ۝ (٢) [Ayat 2 Surat An-Nazi'at] ۝ (٣) [Ayat 3 Surat An-Nazi'at] ۝ (٤) [Ayat 4 Surat An-Nazi'at] ۝ (٥) [Ayat 5 Surat An-Nazi'at]"
      }
    ]
  },
  {
    "id": 17,
    "soal": [
      {
        "nomor": 1,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "وَالَّذِي أَحْسَنَ فَأَحْسَنَ رَبُّكَ لِلْأَكْثَرِينَ أَشْقَىٰ وَالَّذِي أَحْسَنَ فَأَحْسَنَ",
        "referensi": "Surat Al-Lail: 10-12",
        "kunciLabel": "3 Ayat Surat Al-Lail (ayat 10-12):",
        "kunciArab": "(١٠) وَالَّذِي أَحْسَنَ فَأَحْسَنَ رَبُّكَ لِلْأَكْثَرِينَ أَشْقَىٰ ۝ (١١) وَالَّذِي أَحْسَنَ فَأَحْسَنَ ۝ (١٢) إِنَّ عَلَيْنَا لَلْهُدَىٰ"
      },
      {
        "nomor": 2,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "أَشْجَعُ وَأَقْنَىٰ وَأَكْثَرُ مَالًا وَوَلَدًا وَجَاءَ كُلُّهُمْ بِجَحِيمٍ",
        "referensi": "Surat Al-Ma'arij: 11-13",
        "kunciLabel": "3 Ayat Surat Al-Ma'arij (ayat 11-13):",
        "kunciArab": "(١١) أَشْجَعُ وَأَقْنَىٰ ۝ (١٢) وَأَكْثَرُ مَالًا وَوَلَدًا ۝ (١٣) وَجَاءَ كُلُّهُمْ بِجَحِيمٍ"
      },
      {
        "nomor": 3,
        "jenis": "bacakan",
        "pertanyaan": "Bacakan Quran Surat Al-Balad ayat 1-5",
        "rentangAyat": "Ayat 1-5",
        "kunciLabel": "5 Ayat lengkap (Surat Al-Balad 1-5):",
        "kunciArab": "[Ayat 1-5 Surat Al-Balad]"
      },
      {
        "nomor": 4,
        "jenis": "sambung-surat",
        "pertanyaan": "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:",
        "potonganAyat": "...وَأَنَّهُ كَانَ رِجَالٌ مِّنَ الْإِنسِ يَعُوذُونَ بِرِجَالٍ مِّنَ الْجِنِّ",
        "kunciLabel": "Surat berikutnya: Al-Muzzammil - 5 ayat awal:",
        "kunciArab": "(١) [Ayat 1 Surat Al-Muzzammil] ۝ (٢) [Ayat 2 Surat Al-Muzzammil] ۝ (٣) [Ayat 3 Surat Al-Muzzammil] ۝ (٤) [Ayat 4 Surat Al-Muzzammil] ۝ (٥) [Ayat 5 Surat Al-Muzzammil]"
      }
    ]
  },
  {
    "id": 18,
    "soal": [
      {
        "nomor": 1,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "قَدْ أَفْلَحَ مَن زَكَّاهَا وَقَدْ خَابَ مَن دَسَّاهَا كَذَّبَتْ ثَمُودُ بِطَغْوَاهَا",
        "referensi": "Surat Ash-Shams: 9-11",
        "kunciLabel": "3 Ayat Surat Ash-Shams (ayat 9-11):",
        "kunciArab": "(٩) قَدْ أَفْلَحَ مَن زَكَّاهَا ۝ (١٠) وَقَدْ خَابَ مَن دَسَّاهَا ۝ (١١) كَذَّبَتْ ثَمُودُ بِطَغْوَاهَا"
      },
      {
        "nomor": 2,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "خُلِقَ مِن مَّاءٍ دَافِقٍ يَخْرُجُ مِن بَيْنِ الصُّلْبِ وَالتَّرَائِبِ إِنَّهُ عَلَىٰ رَجْعِهِ لَقَادِرٌ",
        "referensi": "Surat At-Tariq: 6-8",
        "kunciLabel": "3 Ayat Surat At-Tariq (ayat 6-8):",
        "kunciArab": "(٦) يَخْرُجُ مِن بَيْنِ الصُّلْبِ وَالتَّرَائِبِ ۝ (٧) إِنَّهُ عَلَىٰ رَجْعِهِ لَقَادِرٌ ۝ (٨) يَوْمَ تُبْلَى السَّرَائِرُ"
      },
      {
        "nomor": 3,
        "jenis": "bacakan",
        "pertanyaan": "Bacakan Quran Surat 'Abasa ayat 24-28",
        "rentangAyat": "Ayat 24-28",
        "kunciLabel": "5 Ayat lengkap (Surat 'Abasa 24-28):",
        "kunciArab": "[Ayat 24-28 Surat 'Abasa]"
      },
      {
        "nomor": 4,
        "jenis": "sambung-surat",
        "pertanyaan": "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:",
        "potonganAyat": "...أُولَٰئِكَ أَصْحَابُ الْمَيْمَنَةِ",
        "kunciLabel": "Surat berikutnya: Ash-Shams - 5 ayat awal:",
        "kunciArab": "(١) [Ayat 1 Surat Ash-Shams] ۝ (٢) [Ayat 2 Surat Ash-Shams] ۝ (٣) [Ayat 3 Surat Ash-Shams] ۝ (٤) [Ayat 4 Surat Ash-Shams] ۝ (٥) [Ayat 5 Surat Ash-Shams]"
      }
    ]
  },
  {
    "id": 19,
    "soal": [
      {
        "nomor": 1,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "فَأَمَّا مَنْ أُوتِيَ كِتَابَهُ بِيَمِينِهِ فَيَقُولُ هَاؤُمُ اقْرَءُوا كِتَابِيهْ إِنِّي ظَنَنتُ",
        "referensi": "Surat Al-Haqqah: 19-21",
        "kunciLabel": "3 Ayat Surat Al-Haqqah (ayat 19-21):",
        "kunciArab": "(١٩) فَأَمَّا مَنْ أُوتِيَ كِتَابَهُ بِيَمِينِهِ فَيَقُولُ هَاؤُمُ اقْرَءُوا كِتَابِيهْ ۝ (٢٠) إِنِّي ظَنَنتُ أَنِّي مُلَاقٍ حِسَابِيهْ ۝ (٢١) فَهُوَ فِي عِيشَةٍ رَّاضِيَةٍ"
      },
      {
        "nomor": 2,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "يُعْرَفُ الْمُجْرِمُونَ بِسِيمَاهُمْ فَيُؤْخَذُ بِالنَّوَاصِي وَالْأَقْدَامِ فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ",
        "referensi": "Surat Ar-Rahman: 41-43",
        "kunciLabel": "3 Ayat Surat Ar-Rahman (ayat 41-43):",
        "kunciArab": "(٤١) يُعْرَفُ الْمُجْرِمُونَ بِسِيمَاهُمْ فَيُؤْخَذُ بِالنَّوَاصِي وَالْأَقْدَامِ ۝ (٤٢) فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ ۝ (٤٣) هَٰذِهِ جَهَنَّمُ الَّتِي يُكَذِّبُ بِهَا الْمُجْرِمُونَ"
      },
      {
        "nomor": 3,
        "jenis": "bacakan",
        "pertanyaan": "Bacakan Quran Surat An-Nazi'at ayat 11-15",
        "rentangAyat": "Ayat 11-15",
        "kunciLabel": "5 Ayat lengkap (Surat An-Nazi'at 11-15):",
        "kunciArab": "[Ayat 11-15 Surat An-Nazi'at]"
      },
      {
        "nomor": 4,
        "jenis": "sambung-surat",
        "pertanyaan": "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:",
        "potonganAyat": "...قُلْ أَرَأَيْتُمْ إِنْ أَصْبَحَ مَاؤُكُمْ غَوْرًا فَمَنْ يَأْتِيكُمْ بِمَاءٍ مَعِينٍ",
        "kunciLabel": "Surat berikutnya: Al-Qalam - 5 ayat awal:",
        "kunciArab": "(١) [Ayat 1 Surat Al-Qalam] ۝ (٢) [Ayat 2 Surat Al-Qalam] ۝ (٣) [Ayat 3 Surat Al-Qalam] ۝ (٤) [Ayat 4 Surat Al-Qalam] ۝ (٥) [Ayat 5 Surat Al-Qalam]"
      }
    ]
  },
  {
    "id": 20,
    "soal": [
      {
        "nomor": 1,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "كَلَّا بَلْ تُحِبُّونَ الْعَاجِلَةَ وَتَذَرُونَ الْآخِرَةَ وُجُوهٌ يَوْمَئِذٍ نَّاضِرَةٌ إِلَىٰ رَبِّهَا نَاظِرَةٌ",
        "referensi": "Surat Al-Qiyamah: 20-23",
        "kunciLabel": "3 Ayat Surat Al-Qiyamah (ayat 21-23):",
        "kunciArab": "(٢١) وَتَذَرُونَ الْآخِرَةَ ۝ (٢٢) وُجُوهٌ يَوْمَئِذٍ نَّاضِرَةٌ ۝ (٢٣) إِلَىٰ رَبِّهَا نَاظِرَةٌ"
      },
      {
        "nomor": 2,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "يَوْمَ يُكْشَفُ عَن سَاقٍ وَيُدْعَوْنَ إِلَى السُّجُودِ فَلَا يَسْتَطِيعُونَ خَاشِعَةً أَبْصَارُهُمْ",
        "referensi": "Surat Al-Qalam: 42-44",
        "kunciLabel": "3 Ayat Surat Al-Qalam (ayat 42-44):",
        "kunciArab": "(٤٢) يَوْمَ يُكْشَفُ عَن سَاقٍ وَيُدْعَوْنَ إِلَى السُّجُودِ فَلَا يَسْتَطِيعُونَ ۝ (٤٣) خَاشِعَةً أَبْصَارُهُمْ ۝ (٤٤) تَرْهَقُهُمْ ذِلَّةٌ"
      },
      {
        "nomor": 3,
        "jenis": "bacakan",
        "pertanyaan": "Bacakan Quran Surat Al-Kafirun ayat 1-6",
        "rentangAyat": "Ayat 1-6",
        "kunciLabel": "6 Ayat lengkap (Surat Al-Kafirun 1-6):",
        "kunciArab": "[Ayat 1-6 Surat Al-Kafirun]"
      },
      {
        "nomor": 4,
        "jenis": "sambung-surat",
        "pertanyaan": "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:",
        "potonganAyat": "...كَلَّا لَا تُطِعْهُ",
        "kunciLabel": "Surat berikutnya: Al-Qadr - 5 ayat awal:",
        "kunciArab": "(١) [Ayat 1 Surat Al-Qadr] ۝ (٢) [Ayat 2 Surat Al-Qadr] ۝ (٣) [Ayat 3 Surat Al-Qadr] ۝ (٤) [Ayat 4 Surat Al-Qadr] ۝ (٥) [Ayat 5 Surat Al-Qadr]"
      }
    ]
  },
  {
    "id": 21,
    "soal": [
      {
        "nomor": 1,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "إِنَّ رَبَّكَ يَعْلَمُ أَنَّكَ تَقُومُ أَدْنَىٰ مِن ثُلُثَيِ اللَّيْلِ وَنِصْفَهُ وَثُلُثَهُ وَطَائِفَةٌ مِّنَ الَّذِينَ مَعَكَ",
        "referensi": "Surat Al-Muzzammil: 20",
        "kunciLabel": "3 Ayat Surat Al-Muzzammil (ayat 20-22):",
        "kunciArab": "(٢٠) إِنَّ رَبَّكَ يَعْلَمُ أَنَّكَ تَقُومُ أَدْنَىٰ مِن ثُلُثَيِ اللَّيْلِ وَنِصْفَهُ وَثُلُثَهُ ۝ (٢١) إِنَّ لَكَ فِي النَّهَارِ سَبْحًا طَوِيلًا ۝ (٢٢) وَاذْكُرِ اسْمَ رَبِّكَ وَتَبَتَّلْ إِلَيْهِ تَبْتِيلًا"
      },
      {
        "nomor": 2,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "سَأَلَ سَائِلٌ بِعَذَابٍ وَاقِعٍ لِّلْكَافِرِينَ لَيْسَ لَهُ دَافِعٌ مِّنَ اللَّهِ ذِي الْمَعَارِجِ",
        "referensi": "Surat Al-Ma'arij: 1-3",
        "kunciLabel": "3 Ayat awal Surat Al-Ma'arij (1-3):",
        "kunciArab": "(١) سَأَلَ سَائِلٌ بِعَذَابٍ وَاقِعٍ ۝ (٢) لِّلْكَافِرِينَ لَيْسَ لَهُ دَافِعٌ ۝ (٣) مِّنَ اللَّهِ ذِي الْمَعَارِجِ"
      },
      {
        "nomor": 3,
        "jenis": "bacakan",
        "pertanyaan": "Bacakan Quran Surat Al-Lail ayat 1-5",
        "rentangAyat": "Ayat 1-5",
        "kunciLabel": "5 Ayat lengkap (Surat Al-Lail 1-5):",
        "kunciArab": "[Ayat 1-5 Surat Al-Lail]"
      },
      {
        "nomor": 4,
        "jenis": "sambung-surat",
        "pertanyaan": "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:",
        "potonganAyat": "...وَقَدْ خَابَ مَن دَسَّاهَا",
        "kunciLabel": "Surat berikutnya: Al-Lail - 5 ayat awal:",
        "kunciArab": "(١) [Ayat 1 Surat Al-Lail] ۝ (٢) [Ayat 2 Surat Al-Lail] ۝ (٣) [Ayat 3 Surat Al-Lail] ۝ (٤) [Ayat 4 Surat Al-Lail] ۝ (٥) [Ayat 5 Surat Al-Lail]"
      }
    ]
  },
  {
    "id": 22,
    "soal": [
      {
        "nomor": 1,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "خُلِقَ مِن مَّاءٍ دَافِقٍ يَخْرُجُ مِن بَيْنِ الصُّلْبِ وَالتَّرَائِبِ إِنَّهُ عَلَىٰ رَجْعِهِ لَقَادِرٌ",
        "referensi": "Surat At-Tariq: 6-8",
        "kunciLabel": "3 Ayat Surat At-Tariq (ayat 6-8):",
        "kunciArab": "(٦) خُلِقَ مِن مَّاءٍ دَافِقٍ ۝ (٧) يَخْرُجُ مِن بَيْنِ الصُّلْبِ وَالتَّرَائِبِ ۝ (٨) إِنَّهُ عَلَىٰ رَجْعِهِ لَقَادِرٌ"
      },
      {
        "nomor": 2,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "وَمَا تُجْزَوْنَ إِلَّا مَا كُنتُمْ تَعْمَلُونَ إِنَّ الْمُتَّقِينَ فِي جَنَّاتٍ وَنَعِيمٍ فَاكِهِينَ بِمَا آتَاهُمْ",
        "referensi": "Surat As-Saffat: 39-41",
        "kunciLabel": "3 Ayat Surat As-Saffat (ayat 39-41):",
        "kunciArab": "(٣٩) وَمَا تُجْزَوْنَ إِلَّا مَا كُنتُمْ تَعْمَلُونَ ۝ (٤٠) إِنَّ الْمُتَّقِينَ فِي جَنَّاتٍ وَنَعِيمٍ ۝ (٤١) فَاكِهِينَ بِمَا آتَاهُمْ رَبُّهُمْ"
      },
      {
        "nomor": 3,
        "jenis": "bacakan",
        "pertanyaan": "Bacakan Quran Surat Al-Mutaffifin ayat 1-5",
        "rentangAyat": "Ayat 1-5",
        "kunciLabel": "5 Ayat lengkap (Surat Al-Mutaffifin 1-5):",
        "kunciArab": "[Ayat 1-5 Surat Al-Mutaffifin]"
      },
      {
        "nomor": 4,
        "jenis": "sambung-surat",
        "pertanyaan": "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:",
        "potonganAyat": "...فَوَيْلٌ يَوْمَئِذٍ لِّلْمُكَذِّبِينَ",
        "kunciLabel": "Surat berikutnya: Al-Inshiqaq - 5 ayat awal:",
        "kunciArab": "(١) [Ayat 1 Surat Al-Inshiqaq] ۝ (٢) [Ayat 2 Surat Al-Inshiqaq] ۝ (٣) [Ayat 3 Surat Al-Inshiqaq] ۝ (٤) [Ayat 4 Surat Al-Inshiqaq] ۝ (٥) [Ayat 5 Surat Al-Inshiqaq]"
      }
    ]
  },
  {
    "id": 23,
    "soal": [
      {
        "nomor": 1,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "أَلَمْ تَكُنْ آيَاتِي تُتْلَىٰ عَلَيْكُمْ فَكُنتُم بِهَا تُكَذِّبُونَ قَالُوا رَبَّنَا غَلَبَتْ عَلَيْنَا شِقْوَتُنَا",
        "referensi": "Surat Al-Mu'minun: 105-107",
        "kunciLabel": "3 Ayat Surat Al-Mu'minun (ayat 105-107):",
        "kunciArab": "(١٠٥) أَلَمْ تَكُنْ آيَاتِي تُتْلَىٰ عَلَيْكُمْ فَكُنتُم بِهَا تُكَذِّبُونَ ۝ (١٠٦) قَالُوا رَبَّنَا غَلَبَتْ عَلَيْنَا شِقْوَتُنَا ۝ (١٠٧) رَبَّنَا أَخْرِجْنَا مِنْهَا"
      },
      {
        "nomor": 2,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "فَسُبْحَانَ الَّذِي بِيَدِهِ مَلَكُوتُ كُلِّ شَيْءٍ وَإِلَيْهِ تُرْجَعُونَ أَلَمْ يَأْتِكُمْ نَبَأُ الْكَثِيرِ الْأَشْرَارِ",
        "referensi": "Surat Ya Sin: 83 & Al-Muddassir: 1",
        "kunciLabel": "3 Ayat Surat Ya Sin (ayat 82-83) & Al-Muddassir 1:",
        "kunciArab": "(٨٢) إِنَّمَا أَمْرُهُ إِذَا أَرَادَ شَيْئًا أَن يَقُولَ لَهُ كُن فَيَكُونُ ۝ (٨٣) فَسُبْحَانَ الَّذِي بِيَدِهِ مَلَكُوتُ كُلِّ شَيْءٍ وَإِلَيْهِ تُرْجَعُونَ"
      },
      {
        "nomor": 3,
        "jenis": "bacakan",
        "pertanyaan": "Bacakan Quran Surat At-Takwir ayat 1-5",
        "rentangAyat": "Ayat 1-5",
        "kunciLabel": "5 Ayat lengkap (Surat At-Takwir 1-5):",
        "kunciArab": "[Ayat 1-5 Surat At-Takwir]"
      },
      {
        "nomor": 4,
        "jenis": "sambung-surat",
        "pertanyaan": "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:",
        "potonganAyat": "...فَإِذَا شَاءَ اللَّهُ لَأَمَرَهُمْ",
        "kunciLabel": "Surat berikutnya: Al-Insan - 5 ayat awal:",
        "kunciArab": "(١) [Ayat 1 Surat Al-Insan] ۝ (٢) [Ayat 2 Surat Al-Insan] ۝ (٣) [Ayat 3 Surat Al-Insan] ۝ (٤) [Ayat 4 Surat Al-Insan] ۝ (٥) [Ayat 5 Surat Al-Insan]"
      }
    ]
  },
  {
    "id": 24,
    "soal": [
      {
        "nomor": 1,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "كَلَّا إِنَّ كِتَابَ الْفُجَّارِ لَفِي سِجِّينٍ وَمَا أَدْرَاكَ مَا سِجِّينٌ كِتَابٌ مَّرْقُومٌ",
        "referensi": "Surat Al-Mutaffifin: 7-9",
        "kunciLabel": "3 Ayat Surat Al-Mutaffifin (ayat 7-9):",
        "kunciArab": "(٧) كَلَّا إِنَّ كِتَابَ الْفُجَّارِ لَفِي سِجِّينٍ ۝ (٨) وَمَا أَدْرَاكَ مَا سِجِّينٌ ۝ (٩) كِتَابٌ مَّرْقُومٌ"
      },
      {
        "nomor": 2,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "عَمَّ يَتَسَاءَلُونَ عَنِ النَّبَإِ الْعَظِيمِ الَّذِي هُمْ فِيهِ مُخْتَلِفُونَ",
        "referensi": "Surat An-Naba': 1-3",
        "kunciLabel": "3 Ayat awal Surat An-Naba' (1-3):",
        "kunciArab": "(١) عَمَّ يَتَسَاءَلُونَ ۝ (٢) عَنِ النَّبَإِ الْعَظِيمِ ۝ (٣) الَّذِي هُمْ فِيهِ مُخْتَلِفُونَ"
      },
      {
        "nomor": 3,
        "jenis": "bacakan",
        "pertanyaan": "Bacakan Quran Surat Al-Buruj ayat 1-5",
        "rentangAyat": "Ayat 1-5",
        "kunciLabel": "5 Ayat lengkap (Surat Al-Buruj 1-5):",
        "kunciArab": "[Ayat 1-5 Surat Al-Buruj]"
      },
      {
        "nomor": 4,
        "jenis": "sambung-surat",
        "pertanyaan": "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:",
        "potonganAyat": "...وَأَمَّا بِنِعْمَةِ رَبِّكَ فَحَدِّثْ",
        "kunciLabel": "Surat berikutnya: Al-Inshirah - 5 ayat awal:",
        "kunciArab": "(١) [Ayat 1 Surat Al-Inshirah] ۝ (٢) [Ayat 2 Surat Al-Inshirah] ۝ (٣) [Ayat 3 Surat Al-Inshirah] ۝ (٤) [Ayat 4 Surat Al-Inshirah] ۝ (٥) [Ayat 5 Surat Al-Inshirah]"
      }
    ]
  },
  {
    "id": 25,
    "soal": [
      {
        "nomor": 1,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "إِنَّ الْإِنسَانَ لِرَبِّهِ لَكَنُودٌ وَإِنَّهُ عَلَىٰ ذَٰلِكَ لَشَهِيدٌ وَإِنَّهُ لِحُبِّ الْخَيْرِ لَشَدِيدٌ",
        "referensi": "Surat Al-'Adiyat: 6-8",
        "kunciLabel": "3 Ayat Surat Al-'Adiyat (ayat 6-8):",
        "kunciArab": "(٦) إِنَّ الْإِنسَانَ لِرَبِّهِ لَكَنُودٌ ۝ (٧) وَإِنَّهُ عَلَىٰ ذَٰلِكَ لَشَهِيدٌ ۝ (٨) وَإِنَّهُ لِحُبِّ الْخَيْرِ لَشَدِيدٌ"
      },
      {
        "nomor": 2,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "قَدْ أَفْلَحَ مَن زَكَّاهَا وَقَدْ خَابَ مَن دَسَّاهَا كَذَّبَتْ ثَمُودُ بِطَغْوَاهَا",
        "referensi": "Surat Ash-Shams: 9-11",
        "kunciLabel": "3 Ayat Surat Ash-Shams (ayat 9-11):",
        "kunciArab": "(٩) قَدْ أَفْلَحَ مَن زَكَّاهَا ۝ (١٠) وَقَدْ خَابَ مَن دَسَّاهَا ۝ (١١) كَذَّبَتْ ثَمُودُ بِطَغْوَاهَا"
      },
      {
        "nomor": 3,
        "jenis": "bacakan",
        "pertanyaan": "Bacakan Quran Surat Al-Falaq ayat 1-5",
        "rentangAyat": "Ayat 1-5",
        "kunciLabel": "5 Ayat lengkap (Surat Al-Falaq 1-5):",
        "kunciArab": "[Ayat 1-5 Surat Al-Falaq]"
      },
      {
        "nomor": 4,
        "jenis": "sambung-surat",
        "pertanyaan": "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:",
        "potonganAyat": "...غَفُورٌ وَدُودٌ",
        "kunciLabel": "Surat berikutnya: At-Tariq - 5 ayat awal:",
        "kunciArab": "(١) [Ayat 1 Surat At-Tariq] ۝ (٢) [Ayat 2 Surat At-Tariq] ۝ (٣) [Ayat 3 Surat At-Tariq] ۝ (٤) [Ayat 4 Surat At-Tariq] ۝ (٥) [Ayat 5 Surat At-Tariq]"
      }
    ]
  },
  {
    "id": 26,
    "soal": [
      {
        "nomor": 1,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "كُلَّمَا دَخَلَ عَلَيْهَا زَكَرِيَّا الْمِحْرَابَ وَجَدَ عِندَهَا رِزْقًا قَالَ يَا مَرْيَمُ أَنَّىٰ لَكِ هَٰذَا",
        "referensi": "Surat Aali Imran: 37",
        "kunciLabel": "3 Ayat Surat Aali Imran (ayat 37-39):",
        "kunciArab": "(٣٧) كُلَّمَا دَخَلَ عَلَيْهَا زَكَرِيَّا الْمِحْرَابَ وَجَدَ عِندَهَا رِزْقًا ۝ (٣٨) هُنَالِكَ دَعَا زَكَرِيَّا رَبَّهُ ۝ (٣٩) فَنَادَتْهُ الْمَلَائِكَةُ"
      },
      {
        "nomor": 2,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تُحِلُّوا شَعَائِرَ اللَّهِ وَلَا الشَّهْرَ الْحَرَامَ وَلَا الْهَدْيَ وَلَا الْقَلَائِدَ",
        "referensi": "Surat Al-Ma'idah: 2",
        "kunciLabel": "3 Ayat Surat Al-Ma'idah (ayat 2-4):",
        "kunciArab": "(٢) يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تُحِلُّوا شَعَائِرَ اللَّهِ ۝ (٣) حُرِّمَتْ عَلَيْكُمُ الْمَيْتَةُ وَالدَّمُ ۝ (٤) يَسْأَلُونَكَ مَاذَا أُحِلَّ لَهُمْ"
      },
      {
        "nomor": 3,
        "jenis": "bacakan",
        "pertanyaan": "Bacakan Quran Surat Quraysh ayat 1-4",
        "rentangAyat": "Ayat 1-4",
        "kunciLabel": "4 Ayat lengkap (Surat Quraysh 1-4):",
        "kunciArab": "[Ayat 1-4 Surat Quraysh]"
      },
      {
        "nomor": 4,
        "jenis": "sambung-surat",
        "pertanyaan": "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:",
        "potonganAyat": "...وَمَا هُوَ بِقَوْلِ شَيْطَانٍ رَّجِيمٍ",
        "kunciLabel": "Surat berikutnya: Al-Infitar - 5 ayat awal:",
        "kunciArab": "(١) [Ayat 1 Surat Al-Infitar] ۝ (٢) [Ayat 2 Surat Al-Infitar] ۝ (٣) [Ayat 3 Surat Al-Infitar] ۝ (٤) [Ayat 4 Surat Al-Infitar] ۝ (٥) [Ayat 5 Surat Al-Infitar]"
      }
    ]
  },
  {
    "id": 27,
    "soal": [
      {
        "nomor": 1,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "أَمْ يَقُولُونَ نَحْنُ جَمِيعٌ مُّنتَصِرٌ سَيُهْزَمُ الْجَمْعُ وَيُوَلُّونَ الدُّبُرَ بَلِ السَّاعَةُ مَوْعِدُهُمْ",
        "referensi": "Surat Al-Qamar: 44-46",
        "kunciLabel": "3 Ayat Surat Al-Qamar (ayat 44-46):",
        "kunciArab": "(٤٤) أَمْ يَقُولُونَ نَحْنُ جَمِيعٌ مُّنتَصِرٌ ۝ (٤٥) سَيُهْزَمُ الْجَمْعُ وَيُوَلُّونَ الدُّبُرَ ۝ (٤٦) بَلِ السَّاعَةُ مَوْعِدُهُمْ وَالسَّاعَةُ أَدْهَىٰ وَأَمَرُّ"
      },
      {
        "nomor": 2,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "إِذَا السَّمَاءُ انفَطَرَتْ وَإِذَا الْكَوَاكِبُ انتَثَرَتْ وَإِذَا الْبِحَارُ فُجِّرَتْ",
        "referensi": "Surat Al-Infitar: 1-3",
        "kunciLabel": "3 Ayat awal Surat Al-Infitar (1-3):",
        "kunciArab": "(١) إِذَا السَّمَاءُ انفَطَرَتْ ۝ (٢) وَإِذَا الْكَوَاكِبُ انتَثَرَتْ ۝ (٣) وَإِذَا الْبِحَارُ فُجِّرَتْ"
      },
      {
        "nomor": 3,
        "jenis": "bacakan",
        "pertanyaan": "Bacakan Quran Surat Ash-Shams ayat 1-5",
        "rentangAyat": "Ayat 1-5",
        "kunciLabel": "5 Ayat lengkap (Surat Ash-Shams 1-5):",
        "kunciArab": "[Ayat 1-5 Surat Ash-Shams]"
      },
      {
        "nomor": 4,
        "jenis": "sambung-surat",
        "pertanyaan": "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:",
        "potonganAyat": "...إِنَّهُ كَانَ عَبْدًا شَكُورًا",
        "kunciLabel": "Surat berikutnya: Al-Jinn - 5 ayat awal:",
        "kunciArab": "(١) [Ayat 1 Surat Al-Jinn] ۝ (٢) [Ayat 2 Surat Al-Jinn] ۝ (٣) [Ayat 3 Surat Al-Jinn] ۝ (٤) [Ayat 4 Surat Al-Jinn] ۝ (٥) [Ayat 5 Surat Al-Jinn]"
      }
    ]
  },
  {
    "id": 28,
    "soal": [
      {
        "nomor": 1,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "وَالسَّمَاءِ ذَاتِ الْبُرُوجِ وَالْيَوْمِ الْمَوْعُودِ وَشَاهِدٍ وَمَشْهُودٍ قُتِلَ أَصْحَابُ الْأُخْدُودِ",
        "referensi": "Surat Al-Buruj: 1-4",
        "kunciLabel": "3 Ayat Surat Al-Buruj (ayat 1-3):",
        "kunciArab": "(١) وَالسَّمَاءِ ذَاتِ الْبُرُوجِ ۝ (٢) وَالْيَوْمِ الْمَوْعُودِ ۝ (٣) وَشَاهِدٍ وَمَشْهُودٍ"
      },
      {
        "nomor": 2,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "وَيْلٌ يَوْمَئِذٍ لِّلْمُكَذِّبِينَ الَّذِينَ يُكَذِّبُونَ بِيَوْمِ الدِّينِ وَمَا يُكَذِّبُ بِهِ إِلَّا كُلُّ مُعْتَدٍ أَثِيمٍ",
        "referensi": "Surat Al-Mutaffifin: 10-12",
        "kunciLabel": "3 Ayat Surat Al-Mutaffifin (ayat 10-12):",
        "kunciArab": "(١٠) وَيْلٌ يَوْمَئِذٍ لِّلْمُكَذِّبِينَ ۝ (١١) الَّذِينَ يُكَذِّبُونَ بِيَوْمِ الدِّينِ ۝ (١٢) وَمَا يُكَذِّبُ بِهِ إِلَّا كُلُّ مُعْتَدٍ أَثِيمٍ"
      },
      {
        "nomor": 3,
        "jenis": "bacakan",
        "pertanyaan": "Bacakan Quran Surat At-Tariq ayat 1-5",
        "rentangAyat": "Ayat 1-5",
        "kunciLabel": "5 Ayat lengkap (Surat At-Tariq 1-5):",
        "kunciArab": "[Ayat 1-5 Surat At-Tariq]"
      },
      {
        "nomor": 4,
        "jenis": "sambung-surat",
        "pertanyaan": "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:",
        "potonganAyat": "...وَلَهُمْ عَذَابٌ مُّهِينٌ",
        "kunciLabel": "Surat berikutnya: Al-Buruj - 5 ayat awal:",
        "kunciArab": "(١) [Ayat 1 Surat Al-Buruj] ۝ (٢) [Ayat 2 Surat Al-Buruj] ۝ (٣) [Ayat 3 Surat Al-Buruj] ۝ (٤) [Ayat 4 Surat Al-Buruj] ۝ (٥) [Ayat 5 Surat Al-Buruj]"
      }
    ]
  },
  {
    "id": 29,
    "soal": [
      {
        "nomor": 1,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "إِنَّ رَبَّهُم بِهِمْ يَوْمَئِذٍ لَّخَبِيرٌ وَإِنَّ الْإِنسَانَ لِيَطْغَىٰ أَن رَّآهُ اسْتَغْنَىٰ",
        "referensi": "Surat Al-'Adiyat: 11-13",
        "kunciLabel": "3 Ayat Surat Al-'Adiyat (ayat 11-13):",
        "kunciArab": "(١١) إِنَّ رَبَّهُم بِهِمْ يَوْمَئِذٍ لَّخَبِيرٌ ۝ (١٢) وَإِنَّ الْإِنسَانَ لِيَطْغَىٰ ۝ (١٣) أَن رَّآهُ اسْتَغْنَىٰ"
      },
      {
        "nomor": 2,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "وَلَقَدْ خَلَقْنَا الْإِنسَانَ وَنَعْلَمُ مَا تُوَسْوِسُ بِهِ نَفْسُهُ وَنَحْنُ أَقْرَبُ إِلَيْهِ مِنْ حَبْلِ الْوَرِيدِ",
        "referensi": "Surat Qaf: 16",
        "kunciLabel": "3 Ayat Surat Qaf (ayat 16-18):",
        "kunciArab": "(١٦) وَلَقَدْ خَلَقْنَا الْإِنسَانَ وَنَعْلَمُ مَا تُوَسْوِسُ بِهِ نَفْسُهُ ۝ (١٧) إِذْ يَتَلَقَّى الْمُتَلَقِّيَانِ ۝ (١٨) مَا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ"
      },
      {
        "nomor": 3,
        "jenis": "bacakan",
        "pertanyaan": "Bacakan Quran Surat Al-Masad ayat 1-5",
        "rentangAyat": "Ayat 1-5",
        "kunciLabel": "5 Ayat lengkap (Surat Al-Masad 1-5):",
        "kunciArab": "[Ayat 1-5 Surat Al-Masad]"
      },
      {
        "nomor": 4,
        "jenis": "sambung-surat",
        "pertanyaan": "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:",
        "potonganAyat": "...وَإِنَّ عَلَيْهِ لَقَادِرُونَ",
        "kunciLabel": "Surat berikutnya: Al-A'la - 5 ayat awal:",
        "kunciArab": "(١) [Ayat 1 Surat Al-A'la] ۝ (٢) [Ayat 2 Surat Al-A'la] ۝ (٣) [Ayat 3 Surat Al-A'la] ۝ (٤) [Ayat 4 Surat Al-A'la] ۝ (٥) [Ayat 5 Surat Al-A'la]"
      }
    ]
  },
  {
    "id": 30,
    "soal": [
      {
        "nomor": 1,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "فَاسْأَلْ بِهِ خَبِيرًا سَأَلَ سَائِلٌ بِعَذَابٍ وَاقِعٍ لِّلْكَافِرِينَ لَيْسَ لَهُ دَافِعٌ",
        "referensi": "Surat Al-Ma'arij: 10-12",
        "kunciLabel": "3 Ayat Surat Al-Ma'arij (ayat 10-12):",
        "kunciArab": "(١٠) فَاسْأَلْ بِهِ خَبِيرًا ۝ (١١) سَأَلَ سَائِلٌ بِعَذَابٍ وَاقِعٍ ۝ (١٢) لِّلْكَافِرِينَ لَيْسَ لَهُ دَافِعٌ"
      },
      {
        "nomor": 2,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "وَفِي ذَٰلِكَ فَلْيَتَنَافَسِ الْمُتَنَافِسُونَ وَمَا أَدْرَاكَ مَا لَيْلَةُ الْقَدْرِ خَيْرٌ مِّنْ أَلْفِ شَهْرٍ",
        "referensi": "Surat Al-Mutaffifin: 26 & Al-Qadr: 2-3",
        "kunciLabel": "3 Ayat Surat Al-Mutaffifin 26 & Al-Qadr (2-3):",
        "kunciArab": "(٢٦) وَمَا أَدْرَاكَ مَا لَيْلَةُ الْقَدْرِ ۝ (٢) خَيْرٌ مِّنْ أَلْفِ شَهْرٍ ۝ (٣) تَنَزَّلُ الْمَلَائِكَةُ وَالرُّوحُ"
      },
      {
        "nomor": 3,
        "jenis": "bacakan",
        "pertanyaan": "Bacakan Quran Surat Al-Fajr ayat 1-5",
        "rentangAyat": "Ayat 1-5",
        "kunciLabel": "5 Ayat lengkap (Surat Al-Fajr 1-5):",
        "kunciArab": "[Ayat 1-5 Surat Al-Fajr]"
      },
      {
        "nomor": 4,
        "jenis": "sambung-surat",
        "pertanyaan": "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:",
        "potonganAyat": "...فِي ذَٰلِكَ لَعِبْرَةٌ لِّمَن يَخْشَىٰ",
        "kunciLabel": "Surat berikutnya: 'Abasa - 5 ayat awal:",
        "kunciArab": "(١) [Ayat 1 Surat 'Abasa] ۝ (٢) [Ayat 2 Surat 'Abasa] ۝ (٣) [Ayat 3 Surat 'Abasa] ۝ (٤) [Ayat 4 Surat 'Abasa] ۝ (٥) [Ayat 5 Surat 'Abasa]"
      }
    ]
  }
];

// Export untuk digunakan di browser
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PAKET_SOAL };
}
