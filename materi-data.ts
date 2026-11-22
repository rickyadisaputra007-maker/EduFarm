import { Materi } from '../models/Materi';

export const daftarMateri: Materi[] = [
  // Kategori 1: Pengetahuan Dasar
  {
    id: 1,
    judul: 'Dasar-Dasar Peternakan',
    kategori: 'Pengetahuan Dasar',
    konten: `
      <p style="margin-bottom: 15px; line-height: 1.8;">Peternakan adalah kegiatan memelihara dan mengembangbiakkan hewan untuk menghasilkan produk seperti daging, susu, telur, kulit, maupun untuk tujuan usaha lainnya. Tujuan utama dari beternak adalah untuk memperoleh hasil yang bermanfaat, seperti menjual hewan, menghasilkan telur atau susu, memenuhi kebutuhan pangan, dan tentunya mendapatkan keuntungan ekonomi.</p>
      <p style="margin-bottom: 15px; line-height: 1.8;">Beberapa jenis hewan ternak yang umum dipelihara di Indonesia antara lain sapi, kambing, ayam, bebek, domba, dan kerbau. Sebelum memulai peternakan, seorang peternak perlu menyiapkan kandang, lahan, pakan, air bersih, modal, pengetahuan dasar, serta rencana pemeliharaan yang matang. Beternak juga tidak selalu harus memiliki lahan yang sangat luas, karena luas lahan bergantung pada jenis hewan, jumlah hewan yang dipelihara, serta sistem peternakan yang digunakan.</p>
    `
  },
  {
    id: 2,
    judul: 'Mengenal Jenis dan Karakteristik Ternak',
    kategori: 'Pengetahuan Dasar',
    konten: `
      <p style="margin-bottom: 15px; line-height: 1.8;">Setiap jenis ternak memiliki karakteristik dan peruntukannya masing-masing. Sapi merupakan ternak besar yang dapat dimanfaatkan daging dan susunya. Kambing merupakan ternak ruminansia yang dapat menghasilkan daging dan susu. Sementara itu, ayam merupakan unggas yang dapat menghasilkan daging dan telur. Kambing dan sapi disebut sebagai ternak ruminansia karena memiliki sistem pencernaan khusus dengan beberapa bagian lambung dan melakukan proses memamah biak.</p>
      <p style="margin-bottom: 15px; line-height: 1.8;">Bagi peternak, mengenali karakteristik hewan sangatlah penting agar dapat memberikan pakan, kandang, dan perawatan yang sesuai dengan kebutuhan masing-masing hewan. Sebagai contoh, ayam pedaging dipelihara terutama untuk menghasilkan daging, sedangkan ayam petelur dipelihara untuk menghasilkan telur. Kebutuhan pakan, kandang, suhu, perawatan, dan pengelolaan setiap jenis ternak tentu berbeda dan tidak bisa disamakan.</p>
    `
  },
  // Kategori 2: Kandang dan Perawatan
  {
    id: 3,
    judul: 'Kandang dan Lingkungan Peternakan',
    kategori: 'Kandang dan Perawatan',
    konten: `
      <p style="margin-bottom: 15px; line-height: 1.8;">Kandang berfungsi sebagai tempat tinggal dan perlindungan hewan dari hujan, panas, predator, serta gangguan lingkungan lainnya. Kandang yang baik harus memiliki ventilasi yang cukup, tidak terlalu lembap, mudah dibersihkan, memiliki saluran pembuangan, dan menyediakan ruang yang cukup bagi hewan untuk bergerak.</p>
      <p style="margin-bottom: 15px; line-height: 1.8;">Kebersihan kandang harus selalu dijaga karena kandang yang kotor dapat menjadi tempat berkembangnya kuman, parasit, dan sumber penyakit bagi ternak. Kandang perlu diperiksa dan dibersihkan secara rutin. Kotoran dan sisa pakan sebaiknya tidak dibiarkan menumpuk. Untuk mengurangi bau tidak sedap dari kandang, Anda dapat membersihkan kotoran secara teratur, menjaga sirkulasi udara, mengelola limbah, dan memastikan lantai kandang tidak terlalu basah.</p>
    `
  },
  {
    id: 4,
    judul: 'Pakan dan Nutrisi Ternak',
    kategori: 'Kandang dan Perawatan',
    konten: `
      <p style="margin-bottom: 15px; line-height: 1.8;">Pakan sangat penting bagi hewan ternak karena menyediakan energi dan nutrisi yang dibutuhkan hewan untuk tumbuh, menjaga kesehatan, dan menghasilkan produk. Pakan ternak dapat berupa hijauan, biji-bijian, konsentrat, dedak, dan pakan tambahan sesuai kebutuhan hewan. Hijauan adalah pakan yang berasal dari tanaman seperti rumput dan daun, sedangkan konsentrat merupakan pakan dengan kandungan nutrisi lebih terkonsentrasi untuk melengkapi kebutuhan ternak.</p>
      <p style="margin-bottom: 15px; line-height: 1.8;">Tidak semua ternak boleh diberi jenis pakan yang sama. Jenis pakan harus disesuaikan dengan spesies, umur, kondisi tubuh, dan tujuan pemeliharaan ternak. Jika ternak kekurangan nutrisi, mereka dapat mengalami pertumbuhan yang lambat, tubuh lemah, penurunan produksi, dan lebih mudah mengalami gangguan kesehatan.</p>
    `
  },
  {
    id: 5,
    judul: 'Air Minum dan Kebersihan Ternak',
    kategori: 'Kandang dan Perawatan',
    konten: `
      <p style="margin-bottom: 15px; line-height: 1.8;">Air minum memegang peranan penting bagi ternak karena membantu proses pencernaan, mengatur suhu tubuh, dan mendukung fungsi tubuh serta produksi ternak. Ciri air minum yang layak untuk ternak adalah air yang bersih, tidak berbau, tidak tercemar, dan tersedia sesuai kebutuhan hewan. Tempat minum juga harus dibersihkan secara rutin agar tidak menjadi tempat penumpukan kotoran dan mikroorganisme.</p>
      <p style="margin-bottom: 15px; line-height: 1.8;">Jika ternak kekurangan air, mereka dapat mengalami dehidrasi, lemas, penurunan nafsu makan, dan penurunan produksi. Selain air minum, kebersihan tubuh ternak juga perlu dijaga dengan cara menjaga kebersihan kandang, memeriksa kondisi tubuh secara rutin, serta melakukan pembersihan atau perawatan sesuai jenis hewan.</p>
    `
  },
  {
    id: 6,
    judul: 'Pemeliharaan dan Perawatan Harian',
    kategori: 'Kandang dan Perawatan',
    konten: `
      <p style="margin-bottom: 15px; line-height: 1.8;">Kegiatan perawatan ternak setiap hari meliputi pemberian pakan, penyediaan air, pemeriksaan kondisi hewan, pembersihan kandang, dan pencatatan kegiatan. Ternak perlu diperiksa setiap hari untuk membantu peternak mengetahui lebih awal jika ada perubahan perilaku, nafsu makan, atau kondisi tubuh hewan. Beberapa tanda ternak sedang tidak sehat yang perlu diperhatikan adalah tidak mau makan, terlihat lemas, perubahan kotoran, batuk, luka, atau perilaku yang tidak biasa.</p>
      <p style="margin-bottom: 15px; line-height: 1.8;">Jadwal pemberian pakan perlu dibuat untuk menjaga keteraturan dan memudahkan pengawasan. Dalam kondisi tertentu, pemisahan ternak berdasarkan umur atau kondisi sangat diperlukan untuk memudahkan pemberian pakan, mengurangi persaingan, dan melindungi hewan yang sakit atau masih muda.</p>
    `
  },
  // Kategori 3: Kesehatan dan Reproduksi
  {
    id: 7,
    judul: 'Kesehatan dan Pencegahan Penyakit',
    kategori: 'Kesehatan dan Reproduksi',
    konten: `
      <p style="margin-bottom: 15px; line-height: 1.8;">Kesehatan ternak harus selalu diperhatikan karena sangat berpengaruh terhadap pertumbuhan, produktivitas, kualitas hasil ternak, dan keberlangsungan usaha. Pencegahan penyakit adalah tindakan untuk mengurangi risiko penyakit, seperti menjaga kebersihan kandang, memberikan pakan yang sesuai, dan melakukan pemeriksaan kesehatan secara berkala.</p>
      <p style="margin-bottom: 15px; line-height: 1.8;">Jika ada ternak yang terlihat sakit, segera pisahkan dari ternak sehat, amati gejalanya, jaga kebersihan, dan segera hubungi dokter hewan atau petugas kesehatan hewan. Vaksinasi juga sangat membantu melindungi ternak dari penyakit tertentu. Jenis dan jadwal vaksin harus disesuaikan dengan spesies, kondisi wilayah, dan arahan petugas kesehatan. Jangan lupa mencatat semua riwayat kesehatan untuk memudahkan evaluasi.</p>
    `
  },
  {
    id: 8,
    judul: 'Reproduksi dan Pengembangbiakan',
    kategori: 'Kesehatan dan Reproduksi',
    konten: `
      <p style="margin-bottom: 15px; line-height: 1.8;">Reproduksi adalah proses perkembangbiakan hewan untuk menghasilkan keturunan. Memahami reproduksi ternak membantu peternak merencanakan perkembangbiakan dan menjaga keberlanjutan populasi ternak. Masa kebuntingan adalah periode ketika hewan betina mengandung anak hingga melahirkan, dan lamanya berbeda pada setiap jenis hewan.</p>
      <p style="margin-bottom: 15px; line-height: 1.8;">Saat ternak bunting, peternak perlu memperhatikan pakan, kebersihan kandang, kondisi tubuh, dan pemeriksaan oleh tenaga kesehatan hewan bila diperlukan. Setelah lahir, anak ternak juga perlu mendapatkan perawatan khusus karena masih dalam masa pertumbuhan. Mereka membutuhkan pakan, lingkungan, dan pengawasan yang sesuai agar dapat tumbuh dengan baik.</p>
    `
  },
  // Kategori 4: Data dan Produksi
  {
    id: 9,
    judul: 'Pertumbuhan, Umur, dan Pencatatan',
    kategori: 'Data dan Produksi',
    konten: `
      <p style="margin-bottom: 15px; line-height: 1.8;">Pencatatan umur ternak sangat penting untuk membantu peternak memperkirakan tahap pertumbuhan dan menyesuaikan perawatan serta pemberian pakan. Umur dapat diperkirakan melalui catatan kelahiran, riwayat pembelian, ciri fisik, dan pemeriksaan gigi pada jenis ternak tertentu oleh orang yang memahami teknik tersebut.</p>
      <p style="margin-bottom: 15px; line-height: 1.8;">Pencatatan ternak dapat dilakukan per individu maupun per kelompok. Pencatatan per individu mencakup data setiap hewan secara terpisah, seperti nama atau kode, jenis, umur, berat badan, dan riwayat kesehatan. Sedangkan pencatatan per kelompok dilakukan berdasarkan kesamaan, misalnya jenis, umur, lokasi kandang, atau periode pembelian. Data pertumbuhan ternak perlu dicatat untuk memantau perkembangan hewan dan mengevaluasi apakah pemeliharaan sudah berjalan dengan baik.</p>
    `
  },
  {
    id: 10,
    judul: 'Produksi dan Hasil Peternakan',
    kategori: 'Data dan Produksi',
    konten: `
      <p style="margin-bottom: 15px; line-height: 1.8;">Hasil yang dapat diperoleh dari peternakan antara lain daging, susu, telur, kulit, pupuk kandang, dan hewan hidup untuk dijual. Produk utama merupakan hasil yang menjadi tujuan utama pemeliharaan, seperti telur pada ayam petelur. Sedangkan produk sampingan adalah hasil lain yang masih dapat dimanfaatkan, seperti kotoran ternak untuk pupuk.</p>
      <p style="margin-bottom: 15px; line-height: 1.8;">Untuk menjaga kualitas telur, kumpulkan telur secara rutin, lakukan sortir, bersihkan dengan metode yang tepat, dan simpan dalam kondisi yang sesuai. Untuk menjaga kualitas susu, susu harus ditangani secara higienis, menggunakan peralatan bersih, dan segera disimpan pada suhu yang sesuai. Semua hasil peternakan ini perlu dicatat dengan baik untuk mengetahui jumlah produksi, kualitas hasil, jumlah yang terjual, dan pendapatan yang diperoleh.</p>
    `
  },
  // Kategori 5: Manajemen
  {
    id: 11,
    judul: 'Manajemen Operasional Peternakan',
    kategori: 'Manajemen Peternakan',
    konten: `
      <p style="margin-bottom: 15px; line-height: 1.8;">Manajemen operasional adalah kegiatan mengatur seluruh proses peternakan agar berjalan teratur, mulai dari pemeliharaan hingga pengelolaan hasil. Peternak perlu memiliki jadwal kegiatan untuk mengatur pemberian pakan, pembersihan kandang, pemeriksaan kesehatan, dan kegiatan lainnya.</p>
      <p style="margin-bottom: 15px; line-height: 1.8;">Pencatatan stok pakan juga berfungsi untuk mengetahui jumlah pakan yang tersedia sehingga peternak dapat merencanakan pembelian sebelum persediaan habis. Jika memiliki tenaga kerja, bagi tugasnya dengan jelas seperti pemberian pakan, pembersihan kandang, pemeriksaan ternak, dan pencatatan hasil kerja. Terakhir, lakukan evaluasi secara berkala untuk mengetahui masalah, mengukur keberhasilan, dan menentukan perbaikan ke depannya.</p>
    `
  },
  // Kategori 6: Bisnis dan Keuangan
  {
    id: 12,
    judul: 'Manajemen Keuangan dan Bisnis',
    kategori: 'Bisnis dan Keuangan',
    konten: `
      <p style="margin-bottom: 15px; line-height: 1.8;">Modal usaha peternakan adalah sumber daya yang digunakan untuk menjalankan usaha, seperti uang, kandang, peralatan, pakan, dan pembelian ternak. Contoh biaya dalam usaha peternakan meliputi biaya pembelian ternak, pakan, obat atau layanan kesehatan, perawatan kandang, tenaga kerja, dan transportasi.</p>
      <p style="margin-bottom: 15px; line-height: 1.8;">Penting untuk membedakan antara omzet dan keuntungan. Omzet adalah total pendapatan dari penjualan sebelum dikurangi biaya, sedangkan keuntungan adalah sisa pendapatan setelah dikurangi seluruh biaya usaha. Pencatatan transaksi jual beli ternak harus dilakukan dengan rapi untuk mengetahui riwayat pembelian, penjualan, harga, jumlah ternak, dan kondisi keuangan usaha. Usaha dinyatakan untung jika total pendapatan lebih besar daripada total biaya dalam periode tertentu.</p>
    `
  },
  {
    id: 13,
    judul: 'Pembelian, Penjualan, dan Pemasaran',
    kategori: 'Bisnis dan Keuangan',
    konten: `
      <p style="margin-bottom: 15px; line-height: 1.8;">Sebelum membeli ternak, perhatikan kondisi kesehatan, umur, jenis, berat atau ukuran, riwayat pemeliharaan, harga, dan asal ternak. Sebelum menjual ternak, ketahuilah kondisi ternak, tujuan penjualan, harga pasar, biaya yang telah dikeluarkan, dan calon pembeli. Harga jual dapat ditentukan dengan mempertimbangkan biaya pemeliharaan, kondisi dan kualitas ternak, harga pasar, serta keuntungan yang diharapkan.</p>
      <p style="margin-bottom: 15px; line-height: 1.8;">Pemasaran melalui internet sangat bermanfaat untuk menjangkau calon pembeli yang lebih luas melalui media sosial, marketplace, dan platform digital lainnya. Yang terpenting, peternak harus selalu menjaga kepercayaan pembeli. Kepercayaan membuat pembeli merasa aman, meningkatkan kemungkinan pembelian ulang, dan membantu membangun reputasi usaha yang baik.</p>
    `
  },
  // Kategori 7: Pengembangan Usaha
  {
    id: 14,
    judul: 'Pengelolaan Risiko dan Pengembangan Usaha',
    kategori: 'Pengembangan Usaha',
    konten: `
      <p style="margin-bottom: 15px; line-height: 1.8;">Risiko usaha peternakan adalah kemungkinan terjadinya masalah yang dapat memengaruhi kegiatan dan keuntungan peternakan, seperti penyakit, kenaikan harga pakan, atau penurunan harga jual. Cara mengurangi risiko kerugian adalah dengan menjaga kesehatan ternak, membuat catatan keuangan yang rapi, menyediakan dana cadangan, dan merencanakan pembelian pakan serta penjualan dengan baik.</p>
      <p style="margin-bottom: 15px; line-height: 1.8;">Memiliki dana darurat sangat penting untuk mengantisipasi kebutuhan mendadak, seperti perbaikan kandang atau penanganan masalah kesehatan ternak. Untuk mengembangkan usaha, peternak dapat meningkatkan kualitas pemeliharaan, memperbaiki pencatatan, memperluas pemasaran, dan menambah jumlah ternak secara bertahap sesuai kemampuan. Di era modern ini, teknologi sangat penting untuk membantu peternak mencatat data, memantau perkembangan ternak, mengatur transaksi, dan memperoleh informasi dengan lebih mudah.</p>
    `
  }
];