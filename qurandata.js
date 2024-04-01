
    const surahNames = [
        { id: 1, name: "Al-Fatihah" },
        { id: 2, name: "Al-Baqarah" },
        { id: 3, name: "Al-Imran" },
        { id: 4, name: "An-Nisa'" },
        { id: 5, name: "Al-Ma'idah" },
        { id: 6, name: "Al-An'am" },
        { id: 7, name: "Al-A'raf" },
        { id: 8, name: "Al-Anfal" },
        { id: 9, name: "At-Tawbah" },
        { id: 10, name: "Yunus" },
        { id: 11, name: "Hud" },
        { id: 12, name: "Yusuf" },
        { id: 13, name: "Ar-Ra'd" },
        { id: 14, name: "Ibrahim" },
        { id: 15, name: "Al-Hijr" },
        { id: 16, name: "An-Nahl" },
        { id: 17, name: "Al-Isra'" },
        { id: 18, name: "Al-Kahf" },
        { id: 19, name: "Maryam" },
        { id: 20, name: "Ta-Ha" },
        { id: 21, name: "Al-Anbiya'" },
        { id: 22, name: "Al-Hajj" },
        { id: 23, name: "Al-Mu'minun" },
        { id: 24, name: "An-Nur" },
        { id: 25, name: "Al-Furqan" },
        { id: 26, name: "Ash-Shu'ara'" },
        { id: 27, name: "An-Naml" },
        { id: 28, name: "Al-Qasas" },
        { id: 29, name: "Al-Ankabut" },
        { id: 30, name: "Ar-Rum" },
        { id: 31, name: "Luqman" },
        { id: 32, name: "As-Sajda" },
        { id: 33, name: "Al-Ahzab" },
        { id: 34, name: "Saba'" },
        { id: 35, name: "Fatir" },
        { id: 36, name: "Ya-Sin" },
        { id: 37, name: "As-Saffat" },
        { id: 38, name: "Sad" },
        { id: 39, name: "Az-Zumar" },
        { id: 40, name: "Ghafir" },
        { id: 41, name: "Fussilat" },
        { id: 42, name: "Ash-Shura" },
        { id: 43, name: "Az-Zukhruf" },
        { id: 44, name: "Ad-Dukhan" },
        { id: 45, name: "Al-Jathiyah" },
        { id: 46, name: "Al-Ahqaf" },
        { id: 47, name: "Muhammad" },
        { id: 48, name: "Al-Fath" },
        { id: 49, name: "Al-Hujurat" },
        { id: 50, name: "Qaf" },
        { id: 51, name: "Adh-Dhariyat" },
        { id: 52, name: "At-Tur" },
        { id: 53, name: "An-Najm" },
        { id: 54, name: "Al-Qamar" },
        { id: 55, name: "Ar-Rahman" },
        { id: 56, name: "Al-Waqi'ah" },
        { id: 57, name: "Al-Hadid" },
        { id: 58, name: "Al-Mujadila" },
        { id: 59, name: "Al-Hashr" },
        { id: 60, name: "Al-Mumtahina" },
        { id: 61, name: "As-Saff" },
        { id: 62, name: "Al-Jumu'ah" },
        { id: 63, name: "Al-Munafiqun" },
        { id: 64, name: "At-Taghabun" },
        { id: 65, name: "At-Talaq" },
        { id: 66, name: "At-Tahrim" },
        { id: 67, name: "Al-Mulk" },
        { id: 68, name: "Al-Qalam" },
        { id: 69, name: "Al-Haqqah" },
        { id: 70, name: "Al-Ma'arij" },
        { id: 71, name: "Nuh" },
        { id: 72, name: "Al-Jinn" },
        { id: 73, name: "Al-Muzzammil" },
        { id: 74, name: "Al-Muddathir" },
        { id: 75, name: "Al-Qiyamah" },
        { id: 76, name: "Al-Insan" },
        { id: 77, name: "Al-Mursalat" },
        { id: 78, name: "An-Naba'" },
        { id: 79, name: "An-Nazi'at" },
        { id: 80, name: "'Abasa" },
        { id: 81, name: "At-Takwir" },
        { id: 82, name: "Al-Infitar" },
        { id: 83, name: "Al-Mutaffifin" },
        { id: 84, name: "Al-Inshiqaq" },
        { id: 85, name: "Al-Buruj" },
        { id: 86, name: "At-Tariq" },
        { id: 87, name: "Al-A'la" },
        { id: 88, name: "Al-Ghashiyah" },
        { id: 89, name: "Al-Fajr" },
        { id: 90, name: "Al-Balad" },
        { id: 91, name: "Ash-Shams" },
        { id: 92, name: "Al-Lail" },
        { id: 93, name: "Ad-Duha" },
        { id: 94, name: "Ash-Sharh" },
        { id: 95, name: "At-Tin" },
        { id: 96, name: "Al-'Alaq" },
        { id: 97, name: "Al-Qadr" },
        { id: 98, name: "Al-Bayyinah" },
        { id: 99, name: "Az-Zalzalah" },
        { id: 100, name: "Al-'Adiyat" },
        { id: 101, name: "Al-Qari'ah" },
        { id: 102, name: "At-Takathur" },
        { id: 103, name: "Al-'Asr" },
        { id: 104, name: "Al-Humazah" },
        { id: 105, name: "Al-Fil" },
        { id: 106, name: "Quraish" },
        { id: 107, name: "Al-Ma'un" },
        { id: 108, name: "Al-Kawthar" },
        { id: 109, name: "Al-Kafirun" },
        { id: 110, name: "An-Nasr" },
        { id: 111, name: "Al-Masad" },
        { id: 112, name: "Al-Ikhlas" },
        { id: 113, name: "Al-Falaq" },
        { id: 114, name: "An-Nas" }
    ];

    const surahDetails = [
        { id: 1, details: { numberOfAyahs: 7 } },
        { id: 2, details: { numberOfAyahs: 286 } },
        { id: 3, details: { numberOfAyahs: 200 } },
        { id: 4, details: { numberOfAyahs: 176 } },
        { id: 5, details: { numberOfAyahs: 120 } },
        { id: 6, details: { numberOfAyahs: 165 } },
        { id: 7, details: { numberOfAyahs: 206 } },
        { id: 8, details: { numberOfAyahs: 75 } },
        { id: 9, details: { numberOfAyahs: 129 } },
        { id: 10, details: { numberOfAyahs: 109 } },
        { id: 11, details: { numberOfAyahs: 123 } },
        { id: 12, details: { numberOfAyahs: 111 } },
        { id: 13, details: { numberOfAyahs: 43 } },
        { id: 14, details: { numberOfAyahs: 52 } },
        { id: 15, details: { numberOfAyahs: 99 } },
        { id: 16, details: { numberOfAyahs: 128 } },
        { id: 17, details: { numberOfAyahs: 111 } },
        { id: 18, details: { numberOfAyahs: 110 } },
        { id: 19, details: { numberOfAyahs: 98 } },
        { id: 20, details: { numberOfAyahs: 135 } },
        { id: 21, details: { numberOfAyahs: 112 } },
        { id: 22, details: { numberOfAyahs: 78 } },
        { id: 23, details: { numberOfAyahs: 118 } },
        { id: 24, details: { numberOfAyahs: 64 } },
        { id: 25, details: { numberOfAyahs: 77 } },
        { id: 26, details: { numberOfAyahs: 227 } },
        { id: 27, details: { numberOfAyahs: 93 } },
        { id: 28, details: { numberOfAyahs: 88 } },
        { id: 29, details: { numberOfAyahs: 69 } },
        { id: 30, details: { numberOfAyahs: 60 } },
        { id: 31, details: { numberOfAyahs: 34 } },
        { id: 32, details: { numberOfAyahs: 30 } },
        { id: 33, details: { numberOfAyahs: 73 } },
        { id: 34, details: { numberOfAyahs: 54 } },
        { id: 35, details: { numberOfAyahs: 45 } },
        { id: 36, details: { numberOfAyahs: 83 } },
        { id: 37, details: { numberOfAyahs: 182 } },
        { id: 38, details: { numberOfAyahs: 88 } },
        { id: 39, details: { numberOfAyahs: 75 } },
        { id: 40, details: { numberOfAyahs: 85 } },
        { id: 41, details: { numberOfAyahs: 54 } },
        { id: 42, details: { numberOfAyahs: 53 } },
        { id: 43, details: { numberOfAyahs: 89 } },
        { id: 44, details: { numberOfAyahs: 59 } },
        { id: 45, details: { numberOfAyahs: 37 } },
        { id: 46, details: { numberOfAyahs: 35 } },
        { id: 47, details: { numberOfAyahs: 38 } },
        { id: 48, details: { numberOfAyahs: 29 } },
        { id: 49, details: { numberOfAyahs: 18 } },
        { id: 50, details: { numberOfAyahs: 45 } },
        { id: 51, details: { numberOfAyahs: 60 } },
        { id: 52, details: { numberOfAyahs: 49 } },
        { id: 53, details: { numberOfAyahs: 62 } },
        { id: 54, details: { numberOfAyahs: 55 } },
        { id: 55, details: { numberOfAyahs: 78 } },
        { id: 56, details: { numberOfAyahs: 96 } },
        { id: 57, details: { numberOfAyahs: 29 } },
        { id: 58, details: { numberOfAyahs: 22 } },
        { id: 59, details: { numberOfAyahs: 24 } },
        { id: 60, details: { numberOfAyahs: 13 } },
        { id: 61, details: { numberOfAyahs: 14 } },
        { id: 62, details: { numberOfAyahs: 11 } },
        { id: 63, details: { numberOfAyahs: 11 } },
        { id: 64, details: { numberOfAyahs: 18 } },
        { id: 65, details: { numberOfAyahs: 12 } },
        { id: 66, details: { numberOfAyahs: 12 } },
        { id: 67, details: { numberOfAyahs: 30 } },
        { id: 68, details: { numberOfAyahs: 52 } },
        { id: 69, details: { numberOfAyahs: 52 } },
        { id: 70, details: { numberOfAyahs: 44 } },
        { id: 71, details: { numberOfAyahs: 28 } },
        { id: 72, details: { numberOfAyahs: 28 } },
        { id: 73, details: { numberOfAyahs: 20 } },
        { id: 74, details: { numberOfAyahs: 56 } },
        { id: 75, details: { numberOfAyahs: 40 } },
        { id: 76, details: { numberOfAyahs: 31 } },
        { id: 77, details: { numberOfAyahs: 50 } },
        { id: 78, details: { numberOfAyahs: 40 } },
        { id: 79, details: { numberOfAyahs: 46 } },
        { id: 80, details: { numberOfAyahs: 42 } },
        { id: 81, details: { numberOfAyahs: 29 } },
        { id: 82, details: { numberOfAyahs: 19 } },
        { id: 83, details: { numberOfAyahs: 36 } },
        { id: 84, details: { numberOfAyahs: 25 } },
        { id: 85, details: { numberOfAyahs: 22 } },
        { id: 86, details: { numberOfAyahs: 17 } },
        { id: 87, details: { numberOfAyahs: 19 } },
        { id: 88, details: { numberOfAyahs: 26 } },
        { id: 89, details: { numberOfAyahs: 30 } },
        { id: 90, details: { numberOfAyahs: 20 } },
        { id: 91, details: { numberOfAyahs: 15 } },
        { id: 92, details: { numberOfAyahs: 21 } },
        { id: 93, details: { numberOfAyahs: 11 } },
        { id: 94, details: { numberOfAyahs: 8 } },
        { id: 95, details: { numberOfAyahs: 8 } },
        { id: 96, details: { numberOfAyahs: 19 } },
        { id: 97, details: { numberOfAyahs: 5 } },
        { id: 98, details: { numberOfAyahs: 8 } },
        { id: 99, details: { numberOfAyahs: 8 } },
        { id: 100, details: { numberOfAyahs: 11 } },
        { id: 101, details: { numberOfAyahs: 11 } },
        { id: 102, details: { numberOfAyahs: 8 } },
        { id: 103, details: { numberOfAyahs: 3 } },
        { id: 104, details: { numberOfAyahs: 9 } },
        { id: 105, details: { numberOfAyahs: 5 } },
        { id: 106, details: { numberOfAyahs: 4 } },
        { id: 107, details: { numberOfAyahs: 7 } },
        { id: 108, details: { numberOfAyahs: 3 } },
        { id: 109, details: { numberOfAyahs: 6 } },
        { id: 110, details: { numberOfAyahs: 3 } },
        { id: 111, details: { numberOfAyahs: 5 } },
        { id: 112, details: { numberOfAyahs: 4 } },
        { id: 113, details: { numberOfAyahs: 5 } },
        { id: 114, details: { numberOfAyahs: 6 } }
    ];
    
   
export{surahNames,surahDetails};













