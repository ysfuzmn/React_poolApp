

const companies = [
  {
    "name": "HBS",
    "city": "İstanbul",
    "date": "Şubat",
    "mayors": [
      { "name": "Murat Kurum", "profilePicture": "/base.jpg", "party": "AKP-MHP" },
      { "name": "Ekrem İmamoğlu", "profilePicture": "/base.jpg", "party": "CHP" },
      { "name": "Buğra Kavuncu", "profilePicture": "/base.jpg", "party": "İYİP" },
      { "name": "Murat Çepni", "profilePicture": "/base.jpg", "party": "DEM" },
      { "name": "Bilinmiyor", "profilePicture": "/base.jpg", "party": "TİP" },
      { "name": "Azmi Karamahmutoğlu", "profilePicture": "/base.jpg", "party": "ZP" },
      { "name": "Mehmet Altınöz", "profilePicture": "/base.jpg", "party": "YRP" }
    ],
    "results": ["%38,3", "%36,9", "%5,2", "%4,8", "—", "%2,0", "%1,9"]
  },
  {
    "name": "ORC",
    "city": "İstanbul",
    "date": "10-12 Şub",
    "mayors": [
      { "name": "Murat Kurum", "profilePicture": "/base.jpg", "party": "AKP-MHP" },
      { "name": "Ekrem İmamoğlu", "profilePicture": "/base.jpg", "party": "CHP" },
      { "name": "Buğra Kavuncu", "profilePicture": "/base.jpg", "party": "İYİP" },
      { "name": "Murat Çepni", "profilePicture": "/base.jpg", "party": "DEM" },
      { "name": "Bilinmiyor", "profilePicture": "/base.jpg", "party": "TİP" },
      { "name": "Azmi Karamahmutoğlu", "profilePicture": "/base.jpg", "party": "ZP" },
      { "name": "Mehmet Altınöz", "profilePicture": "/base.jpg", "party": "YRP" }
    ],
    "results": ["%37,7", "%36,5", "%3,6", "%6,8","-", "%3,7", "%2,9"]
  },
  {
    "name": "SONAR",
    "city": "İstanbul",
    "date": "Şubat",
    "mayors": [
      { "name": "Murat Kurum", "profilePicture": "/base.jpg", "party": "AKP-MHP" },
      { "name": "Ekrem İmamoğlu", "profilePicture": "/base.jpg", "party": "CHP" },
      { "name": "Buğra Kavuncu", "profilePicture": "/base.jpg", "party": "İYİP" },
      { "name": "Murat Çepni", "profilePicture": "/base.jpg", "party": "DEM" },
      { "name": "Bilinmiyor", "profilePicture": "/base.jpg", "party": "TİP" },
      { "name": "Azmi Karamahmutoğlu", "profilePicture": "/base.jpg", "party": "ZP" },
      { "name": "Mehmet Altınöz", "profilePicture": "/base.jpg", "party": "YRP" }
    ],
    "results": ["%40,6", "%41,1", "%4,3", "%6,5" ,"-", "%1,3", "%2,1"]  },
  {
    "name": "Optimar",
    "city": "İstanbul",
    "date": "Şubat",
    "mayors": [
      { "name": "Murat Kurum", "profilePicture": "/base.jpg", "party": "AKP-MHP" },
      { "name": "Ekrem İmamoğlu", "profilePicture": "/base.jpg", "party": "CHP" },
      { "name": "Buğra Kavuncu", "profilePicture": "/base.jpg", "party": "İYİP" },
      { "name": "Murat Çepni", "profilePicture": "/base.jpg", "party": "DEM" },
      { "name": "Bilinmiyor", "profilePicture": "/base.jpg", "party": "TİP" },
      { "name": "Azmi Karamahmutoğlu", "profilePicture": "/base.jpg", "party": "ZP" },
      { "name": "Mehmet Altınöz", "profilePicture": "/base.jpg", "party": "YRP" }
    ],
    "results": ["%37,7", "%39,1", "%5", "-" ,"-", "-", "-"] 
  },
  {
    "name": "HBS",
    "city": "İstanbul",
    "date": "1-3 Şub",
    "mayors": [
      { "name": "Murat Kurum", "profilePicture": "/base.jpg", "party": "AKP-MHP" },
      { "name": "Ekrem İmamoğlu", "profilePicture": "/base.jpg", "party": "CHP" },
      { "name": "Buğra Kavuncu", "profilePicture": "/base.jpg", "party": "İYİP" },
      { "name": "Murat Çepni", "profilePicture": "/base.jpg", "party": "DEM" },
      { "name": "Bilinmiyor", "profilePicture": "/base.jpg", "party": "TİP" },
      { "name": "Azmi Karamahmutoğlu", "profilePicture": "/base.jpg", "party": "ZP" },
      { "name": "Mehmet Altınöz", "profilePicture": "/base.jpg", "party": "YRP" }
    ],
    "results": ["%43,1", "%44,3", "%3,1", "%4,4", "-", "%2,0" ,"1,4",]
  },
  {
    "name": "Özdemir",
    "city": "İstanbul",
    "date": "30 Oca-1 Şub",
     "mayors": [
      { "name": "Murat Kurum", "profilePicture": "/base.jpg", "party": "AKP-MHP" },
      { "name": "Ekrem İmamoğlu", "profilePicture": "/base.jpg", "party": "CHP" },
      { "name": "Buğra Kavuncu", "profilePicture": "/base.jpg", "party": "İYİP" },
      { "name": "Murat Çepni", "profilePicture": "/base.jpg", "party": "DEM" },
      { "name": "Bilinmiyor", "profilePicture": "/base.jpg", "party": "TİP" },
      { "name": "Azmi Karamahmutoğlu", "profilePicture": "/base.jpg", "party": "ZP" },
      { "name": "Mehmet Altınöz", "profilePicture": "/base.jpg", "party": "YRP" }
    ],
    "results": ["%43,3", "%41,5", "%4,9", "%8,8", "-", "-" ,"-",]
  },
  {
    "name": "HBS",
    "city": "İstanbul",
    "date": "Ocak",
     "mayors": [
      { "name": "Murat Kurum", "profilePicture": "/base.jpg", "party": "AKP-MHP" },
      { "name": "Ekrem İmamoğlu", "profilePicture": "/base.jpg", "party": "CHP" },
      { "name": "Buğra Kavuncu", "profilePicture": "/base.jpg", "party": "İYİP" },
      { "name": "Murat Çepni", "profilePicture": "/base.jpg", "party": "DEM" },
      { "name": "Bilinmiyor", "profilePicture": "/base.jpg", "party": "TİP" },
      { "name": "Azmi Karamahmutoğlu", "profilePicture": "/base.jpg", "party": "ZP" },
      { "name": "Mehmet Altınöz", "profilePicture": "/base.jpg", "party": "YRP" }
    ],
    "results": ["%43,2", "%42,1", "%3,6", "%5,6", "-", "-" ,"-",]
  },
  {
    "name": "MEDAR",
    "city": "İstanbul",
    "date": "22-25 Oca",
     "mayors": [
      { "name": "Murat Kurum", "profilePicture": "/base.jpg", "party": "AKP-MHP" },
      { "name": "Ekrem İmamoğlu", "profilePicture": "/base.jpg", "party": "CHP" },
      { "name": "Buğra Kavuncu", "profilePicture": "/base.jpg", "party": "İYİP" },
      { "name": "Murat Çepni", "profilePicture": "/base.jpg", "party": "DEM" },
      { "name": "Bilinmiyor", "profilePicture": "/base.jpg", "party": "TİP" },
      { "name": "Azmi Karamahmutoğlu", "profilePicture": "/base.jpg", "party": "ZP" },
      { "name": "Mehmet Altınöz", "profilePicture": "/base.jpg", "party": "YRP" }
    ],
    "results": ["%40,67", "%40,35", "%4,22", "%5,34", "-", "-" ,"%3,13",]
  },
  {
    "name": "Optimar",
    "city": "İstanbul",
    "date": "16-19 Oca",
     "mayors": [
      { "name": "Murat Kurum", "profilePicture": "/base.jpg", "party": "AKP-MHP" },
      { "name": "Ekrem İmamoğlu", "profilePicture": "/base.jpg", "party": "CHP" },
      { "name": "Buğra Kavuncu", "profilePicture": "/base.jpg", "party": "İYİP" },
      { "name": "Murat Çepni", "profilePicture": "/base.jpg", "party": "DEM" },
      { "name": "Bilinmiyor", "profilePicture": "/base.jpg", "party": "TİP" },
      { "name": "Azmi Karamahmutoğlu", "profilePicture": "/base.jpg", "party": "ZP" },
      { "name": "Mehmet Altınöz", "profilePicture": "/base.jpg", "party": "YRP" }
    ],
    "results": ["%42,1", "%46,3", "-", "-", "-", "-" ,"-",]
  },
  {
    "name": "ORC",
    "city": "İstanbul",
    "date": "15-18 Oca",
     "mayors": [
      { "name": "Murat Kurum", "profilePicture": "/base.jpg", "party": "AKP-MHP" },
      { "name": "Ekrem İmamoğlu", "profilePicture": "/base.jpg", "party": "CHP" },
      { "name": "Buğra Kavuncu", "profilePicture": "/base.jpg", "party": "İYİP" },
      { "name": "Murat Çepni", "profilePicture": "/base.jpg", "party": "DEM" },
      { "name": "Bilinmiyor", "profilePicture": "/base.jpg", "party": "TİP" },
      { "name": "Azmi Karamahmutoğlu", "profilePicture": "/base.jpg", "party": "ZP" },
      { "name": "Mehmet Altınöz", "profilePicture": "/base.jpg", "party": "YRP" }
    ],
    "results": ["%37,2", "%38,9", "%4,1", "-", "-", "3,5" ,"2,5",]
  },
  {
    "name": "MetroPOLL",
    "city": "İstanbul",
    "date": "12-15 Oca",
     "mayors": [
      { "name": "Murat Kurum", "profilePicture": "/base.jpg", "party": "AKP-MHP" },
      { "name": "Ekrem İmamoğlu", "profilePicture": "/base.jpg", "party": "CHP" },
      { "name": "Buğra Kavuncu", "profilePicture": "/base.jpg", "party": "İYİP" },
      { "name": "Murat Çepni", "profilePicture": "/base.jpg", "party": "DEM" },
      { "name": "Bilinmiyor", "profilePicture": "/base.jpg", "party": "TİP" },
      { "name": "Azmi Karamahmutoğlu", "profilePicture": "/base.jpg", "party": "ZP" },
      { "name": "Mehmet Altınöz", "profilePicture": "/base.jpg", "party": "YRP" }
    ],
    "results": ["%38,0", "%41,6", "%2,9", "5,6", "-", "-" ,"-",]

  },
  {
    "name": "ASAL",
    "city": "İstanbul",
    "date": "9-12 Oca",
     "mayors": [
      { "name": "Murat Kurum", "profilePicture": "/base.jpg", "party": "AKP-MHP" },
      { "name": "Ekrem İmamoğlu", "profilePicture": "/base.jpg", "party": "CHP" },
      { "name": "Buğra Kavuncu", "profilePicture": "/base.jpg", "party": "İYİP" },
      { "name": "Murat Çepni", "profilePicture": "/base.jpg", "party": "DEM" },
      { "name": "Bilinmiyor", "profilePicture": "/base.jpg", "party": "TİP" },
      { "name": "Azmi Karamahmutoğlu", "profilePicture": "/base.jpg", "party": "ZP" },
      { "name": "Mehmet Altınöz", "profilePicture": "/base.jpg", "party": "YRP" }
    ],
    "results": ["%32,8", "%36,4", "%3,0", "%4,4", "—",  "-" , "%3,4"]
  },
  {
    "name": "YÖNEYLEM",
    "city": "İstanbul",
    "date": "7-9 Oca",
     "mayors": [
      { "name": "Murat Kurum", "profilePicture": "/base.jpg", "party": "AKP-MHP" },
      { "name": "Ekrem İmamoğlu", "profilePicture": "/base.jpg", "party": "CHP" },
      { "name": "Buğra Kavuncu", "profilePicture": "/base.jpg", "party": "İYİP" },
      { "name": "Murat Çepni", "profilePicture": "/base.jpg", "party": "DEM" },
      { "name": "Bilinmiyor", "profilePicture": "/base.jpg", "party": "TİP" },
      { "name": "Azmi Karamahmutoğlu", "profilePicture": "/base.jpg", "party": "ZP" },
      { "name": "Mehmet Altınöz", "profilePicture": "/base.jpg", "party": "YRP" }
    ],
    "results": ["%32,9", "%39,1", "%2,8", "%4,8", "—",  "-" , "%3,6"]
  },
  {
    "name": "SONAR",
    "city": "İstanbul",
    "date": "Aralık",
     "mayors": [
      { "name": "Murat Kurum", "profilePicture": "/base.jpg", "party": "AKP-MHP" },
      { "name": "Ekrem İmamoğlu", "profilePicture": "/base.jpg", "party": "CHP" },
      { "name": "Buğra Kavuncu", "profilePicture": "/base.jpg", "party": "İYİP" },
      { "name": "Murat Çepni", "profilePicture": "/base.jpg", "party": "DEM" },
      { "name": "Bilinmiyor", "profilePicture": "/base.jpg", "party": "TİP" },
      { "name": "Azmi Karamahmutoğlu", "profilePicture": "/base.jpg", "party": "ZP" },
      { "name": "Mehmet Altınöz", "profilePicture": "/base.jpg", "party": "YRP" }
    ],
    "results": ["%39,6", "%41,1", "%4,8", "%3,2", "—", "—", "—", "—", "—", "%3,7", "%7,6", "—", "%1,5"]
  },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    "name": "Özdemir",
    "city": "Ankara",
    "date": "7-14 Şubat",
     "mayors": [
      { "name": "Turgut Altınok", "profilePicture": "/base.jpg", "party": "AKP-MHP" },
      { "name": "Mansur Yavaş", "profilePicture": "/base.jpg", "party": "CHP" },
      { "name": "Cengiz Topel Yıldırım", "profilePicture": "/base.jpg", "party": "İYİP" },
      { "name": "Gültan Kışanak", "profilePicture": "/base.jpg", "party": "DEM" },
      { "name": "Bilinmiyor", "profilePicture": "/base.jpg", "party": "TİP" },
      { "name": "Bartu Soral", "profilePicture": "/base.jpg", "party": "ZP" },
      { "name": "Suat Kılıç", "profilePicture": "/base.jpg", "party": "YRP" }
    ],
    "results": ["%30,2", "%62,4", "%1,2", "%1,2", "—", "1,4", "1,4", "2,5"]
  },
  {
    "name": "HBS",
    "city": "Ankara",
    "date": "Şubat",
    "mayors": [
      { "name": "Turgut Altınok", "profilePicture": "/base.jpg", "party": "AKP-MHP" },
      { "name": "Mansur Yavaş", "profilePicture": "/base.jpg", "party": "CHP" },
      { "name": "Cengiz Topel Yıldırım", "profilePicture": "/base.jpg", "party": "İYİP" },
      { "name": "Gültan Kışanak", "profilePicture": "/base.jpg", "party": "DEM" },
      { "name": "Bilinmiyor", "profilePicture": "/base.jpg", "party": "TİP" },
      { "name": "Bartu Soral", "profilePicture": "/base.jpg", "party": "ZP" },
      { "name": "Suat Kılıç", "profilePicture": "/base.jpg", "party": "YRP" }
    ],
    "results": ["%35,2", "%40,3", "%6,1", "%2,6", "-", "2,5", "2,4"]
  },
  {
    "name": "AREA",
    "city": "Ankara",
    "date": "8-9 Şub",
    "mayors": [
      { "name": "Turgut Altınok", "profilePicture": "/base.jpg", "party": "AKP-MHP" },
      { "name": "Mansur Yavaş", "profilePicture": "/base.jpg", "party": "CHP" },
      { "name": "Cengiz Topel Yıldırım", "profilePicture": "/base.jpg", "party": "İYİP" },
      { "name": "Gültan Kışanak", "profilePicture": "/base.jpg", "party": "DEM" },
      { "name": "Bilinmiyor", "profilePicture": "/base.jpg", "party": "TİP" },
      { "name": "Bartu Soral", "profilePicture": "/base.jpg", "party": "ZP" },
      { "name": "Suat Kılıç", "profilePicture": "/base.jpg", "party": "YRP" }
    ],
    "results": [
      "%40,1",
      "%54,0",
      "%1,7",
      "—",
      "-",
      "%1,2",
      "%2,3"
    ]
  },
  {
    "name": "ORC",
    "city": "Ankara",
    "date": "24-26 Oca",
    "mayors": [
      { "name": "Turgut Altınok", "profilePicture": "/base.jpg", "party": "AKP-MHP" },
      { "name": "Mansur Yavaş", "profilePicture": "/base.jpg", "party": "CHP" },
      { "name": "Cengiz Topel Yıldırım", "profilePicture": "/base.jpg", "party": "İYİP" },
      { "name": "Gültan Kışanak", "profilePicture": "/base.jpg", "party": "DEM" },
      { "name": "Bilinmiyor", "profilePicture": "/base.jpg", "party": "TİP" },
      { "name": "Bartu Soral", "profilePicture": "/base.jpg", "party": "ZP" },
      { "name": "Suat Kılıç", "profilePicture": "/base.jpg", "party": "YRP" }
    ],
    "results": [
      "%40,9",
      "%43,7",
      "%5,2",
      "-",
      "—",
      "—",
      "—"
    ]
  },
  {
    "name": "AREA",
    "city": "Ankara",
    "date": "22-23 Oca",
    "mayors": [
      { "name": "Turgut Altınok", "profilePicture": "/base.jpg", "party": "AKP-MHP" },
      { "name": "Mansur Yavaş", "profilePicture": "/base.jpg", "party": "CHP" },
      { "name": "Cengiz Topel Yıldırım", "profilePicture": "/base.jpg", "party": "İYİP" },
      { "name": "Gültan Kışanak", "profilePicture": "/base.jpg", "party": "DEM" },
      { "name": "Bilinmiyor", "profilePicture": "/base.jpg", "party": "TİP" },
      { "name": "Bartu Soral", "profilePicture": "/base.jpg", "party": "ZP" },
      { "name": "Suat Kılıç", "profilePicture": "/base.jpg", "party": "YRP" }
    ],
    "results": [
      "%40,1",
      "%57",
      "-",
      "—",
      "—",
      "—",
      "—"
    ]
  },
  {
    "name": "HBS",
    "city": "Ankara",
    "date": "Ocak",
    "mayors": [
      { "name": "Turgut Altınok", "profilePicture": "/base.jpg", "party": "AKP-MHP" },
      { "name": "Mansur Yavaş", "profilePicture": "/base.jpg", "party": "CHP" },
      { "name": "Cengiz Topel Yıldırım", "profilePicture": "/base.jpg", "party": "İYİP" },
      { "name": "Gültan Kışanak", "profilePicture": "/base.jpg", "party": "DEM" },
      { "name": "Bilinmiyor", "profilePicture": "/base.jpg", "party": "TİP" },
      { "name": "Bartu Soral", "profilePicture": "/base.jpg", "party": "ZP" },
      { "name": "Suat Kılıç", "profilePicture": "/base.jpg", "party": "YRP" }
    ],
    "results": ["%34,3", "%36,8", "%6,1", "%3,1", "*-" ,"2,9", "%3,0"]
  },
  ///////////////////////////////////////////////////////////////////////////////////
  {
    "name": "ASAL",
    "city": "Antalya",
    "date": "Eylül",
    "mayors": [
      { "name": "Hakan Tütüncü", "profilePicture": "/base.jpg", "party": "AKP-MHP" },
      { "name": "Muhittin Böcek", "profilePicture": "/base.jpg", "party": "CHP" },
      { "name": "Buğra Kavuncu", "profilePicture": "/base.jpg", "party": "İYİP" },
      { "name": "Nesrin Ünal", "profilePicture": "/base.jpg", "party": "DEM" },
      { "name": "Bilinmiyor", "profilePicture": "/base.jpg", "party": "TİP" },
      { "name": "Bilinmiyor", "profilePicture": "/base.jpg", "party": "ZP" },
      { "name": "Ümit Özkurt", "profilePicture": "/base.jpg", "party": "YRP" }
    ],
    "results": ["%34-%9,3", "%37,3", "%10,6", "%2,1", "-" ,"-", "-"]
  },
    ///////////////////////////////////////////////////////////////////////////////////

  {
    "name": "ORC",
    "city": "Bursa",
    "date": "26-29 Oca",
    "mayors": [
      { "name": "Alinur Aktaş", "profilePicture": "/base.jpg", "party": "AKP-MHP" },
      { "name": "Mustafa Bozbey", "profilePicture": "/base.jpg", "party": "CHP" },
      { "name": "Yüksel Selçuk Türkoğlu", "profilePicture": "/base.jpg", "party": "İYİP" },
      { "name": "Kasım Yıldırım", "profilePicture": "/base.jpg", "party": "DEM" },
      { "name": "Bilinmiyor", "profilePicture": "/base.jpg", "party": "TİP" },
      { "name": "Bayram Kazancı", "profilePicture": "/base.jpg", "party": "ZP" },
      { "name": "Sedat Yalçın", "profilePicture": "/base.jpg", "party": "YRP" }
    ],
    "results": ["%38,3", "%41,4", "%5,4", "%2,1", "-" ,"-", "-"]
  },
      ///////////////////////////////////////////////////////////////////////////////////

  {
    "name": "ORC",
    "city": "İzmir",
    "date": "1-3 Şubat",
    "mayors": [
      { "name": "Hamza Dağ", "profilePicture": "/base.jpg", "party": "AKP-MHP" },
      { "name": "Cemil Tugay", "profilePicture": "/base.jpg", "party": "CHP" },
      { "name": "Ümit Özlale", "profilePicture": "/base.jpg", "party": "İYİP" },
      { "name": "Akın Birdal", "profilePicture": "/base.jpg", "party": "DEM" },
      { "name": "Bilinmiyor", "profilePicture": "/base.jpg", "party": "TİP" },
      { "name": "Naşit Birgüvi", "profilePicture": "/base.jpg", "party": "ZP" },
      { "name": "Cemal Arıkan", "profilePicture": "/base.jpg", "party": "YRP" }
    ],
    "results": ["%34,7", "%38,2", "%8,6", "%5,9", "-" ,"-", "-"]
  },
  {
    "name": "ALF",
    "city": "İzmir",
    "date": "15-19 Aralık",
    "mayors": [
      { "name": "Hamza Dağ", "profilePicture": "/base.jpg", "party": "AKP-MHP" },
      { "name": "Cemil Tugay", "profilePicture": "/base.jpg", "party": "CHP" },
      { "name": "Ümit Özlale", "profilePicture": "/base.jpg", "party": "İYİP" },
      { "name": "Akın Birdal", "profilePicture": "/base.jpg", "party": "DEM" },
      { "name": "Bilinmiyor", "profilePicture": "/base.jpg", "party": "TİP" },
      { "name": "Naşit Birgüvi", "profilePicture": "/base.jpg", "party": "ZP" },
      { "name": "Cemal Arıkan", "profilePicture": "/base.jpg", "party": "YRP" }
    ],
    "results": ["%34,5", "%49,2", "%6,3", "%6,5", "-" ,"-", "-"]
  },
  /////////////////////////////////////////////////////////////////////////////////////////////
  {
    "name": "TÜSİAR",
    "city": "Konya",
    "date": "Ekim",
    "mayors": [
      { "name": "Uğur İbrahim Altay", "profilePicture": "/base.jpg", "party": "AKP-MHP" },
      { "name": "İsmail Sonkaya", "profilePicture": "/base.jpg", "party": "CHP" },
      { "name": "Abdullah Yıldırım", "profilePicture": "/base.jpg", "party": "İYİP" },
      { "name": "Bülent Kılıç", "profilePicture": "/base.jpg", "party": "DEM" },
      { "name": "Bilal Ortakalaycı", "profilePicture": "/base.jpg", "party": "TİP" },
      { "name": "Ayhan Milci", "profilePicture": "/base.jpg", "party": "ZP" },
      { "name": "Mehmet Köseoğlu", "profilePicture": "/base.jpg", "party": "YRP" }
    ],
    "results": ["%41,3-%9,7", "%6,5", "%5,1", "%0,3", "-" ,"-", "%11,7"]
  },

  {
    "name": "ASAL",
    "city": "Konya",
    "date": "Eylül	",
    "mayors": [
      { "name": "Uğur İbrahim Altay", "profilePicture": "/base.jpg", "party": "AKP-MHP" },
      { "name": "İsmail Sonkaya", "profilePicture": "/base.jpg", "party": "CHP" },
      { "name": "Abdullah Yıldırım", "profilePicture": "/base.jpg", "party": "İYİP" },
      { "name": "Bülent Kılıç", "profilePicture": "/base.jpg", "party": "DEM" },
      { "name": "Bilal Ortakalaycı", "profilePicture": "/base.jpg", "party": "TİP" },
      { "name": "Ayhan Milci", "profilePicture": "/base.jpg", "party": "ZP" },
      { "name": "Mehmet Köseoğlu", "profilePicture": "/base.jpg", "party": "YRP" }
    ],
    "results": ["%55.9-%11,3", "%12.5", "%7.8", "%4.2", "-" ,"-", "-"]
  },
  
];


  
  export default companies;
  