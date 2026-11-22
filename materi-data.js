export const daftarMateri = [
    // Kategori 1: Pengetahuan Dasar
    {
        id: 1,
        judul: 'Dasar-Dasar Peternakan',
        kategori: 'Pengetahuan Dasar',
        konten: `
      <p><strong>Pengertian Peternakan:</strong> Kegiatan memelihara dan mengembangbiakkan hewan untuk menghasilkan produk seperti daging, susu, telur, kulit, maupun tujuan usaha lainnya.</p>
      <p><strong>Tujuan Beternak:</strong> Memperoleh hasil bermanfaat (jual hewan, telur/susu), memenuhi pangan, dan keuntungan.</p>
      <p><strong>Ternak Umum:</strong> Sapi, kambing, ayam, bebek, domba, kerbau.</p>
      <p><strong>Persiapan Awal:</strong> Kandang, lahan, pakan, air bersih, modal, pengetahuan, dan rencana pemeliharaan.</p>
    `
    },
    {
        id: 2,
        judul: 'Mengenal Jenis dan Karakteristik Ternak',
        kategori: 'Pengetahuan Dasar',
        konten: `
      <p><strong>Perbedaan Utama:</strong> Sapi (daging & susu), Kambing (daging & susu, ruminansia), Ayam (daging & telur).</p>
      <p><strong>Ternak Ruminansia:</strong> Memiliki sistem pencernaan khusus (memamah biak) seperti sapi dan kambing.</p>
      <p><strong>Ayam Pedaging vs Petelur:</strong> Pedaging untuk daging, Petelur untuk telur. Kebutuhan pakan dan kandangnya berbeda.</p>
    `
    },
    // Kategori 2: Kandang dan Perawatan
    {
        id: 3,
        judul: 'Kandang dan Lingkungan Peternakan',
        kategori: 'Kandang dan Perawatan',
        konten: `
      <p><strong>Fungsi Kandang:</strong> Tempat tinggal, perlindungan dari cuaca dan predator.</p>
      <p><strong>Ciri Kandang Baik:</strong> Ventilasi cukup, tidak lembap, mudah dibersihkan, ada saluran pembuangan, ruang cukup.</p>
      <p><strong>Kebersihan:</strong> Kandang kotor menjadi sarang kuman/parasit. Bersihkan rutin, jangan biarkan kotoran menumpuk. Jaga sirkulasi udara untuk mengurangi bau.</p>
    `
    },
    {
        id: 4,
        judul: 'Pakan dan Nutrisi Ternak',
        kategori: 'Kandang dan Perawatan',
        konten: `
      <p><strong>Pentingnya Pakan:</strong> Sumber energi untuk tumbuh, sehat, dan berproduksi.</p>
      <p><strong>Jenis Pakan:</strong> Hijauan (rumput/daun), Konsentrat (nutrisi tinggi), biji-bijian, dedak.</p>
      <p><strong>Aturan Pakan:</strong> Tidak semua ternak boleh diberi pakan yang sama. Sesuaikan dengan spesies, umur, dan kondisi. Kurang nutrisi menyebabkan lambat tumbuh dan mudah sakit.</p>
    `
    },
    {
        id: 5,
        judul: 'Air Minum dan Kebersihan Ternak',
        kategori: 'Kandang dan Perawatan',
        konten: `
      <p><strong>Pentingnya Air:</strong> Melancarkan pencernaan, mengatur suhu tubuh, dan mendukung produksi.</p>
      <p><strong>Kualitas Air:</strong> Bersih, tidak berbau, tidak tercemar. Tempat minum wajib dicuci rutin.</p>
      <p><strong>Kekurangan Air:</strong> Ternak dehidrasi, lemas, nafsu makan turun, produksi menurun.</p>
    `
    },
    {
        id: 6,
        judul: 'Pemeliharaan dan Perawatan Harian',
        kategori: 'Kandang dan Perawatan',
        konten: `
      <p><strong>Kegiatan Harian:</strong> Beri pakan, air, periksa kondisi hewan, bersihkan kandang, dan catat kegiatan.</p>
      <p><strong>Tanda Sakit:</strong> Tidak mau makan, lemas, kotoran berubah, batuk, luka, atau perilaku aneh.</p>
      <p><strong>Pemisahan:</strong> Pisahkan ternak berdasarkan umur atau kondisi (terutama yang sakit) untuk mencegah penularan dan persaingan makan.</p>
    `
    },
    // Kategori 3: Kesehatan dan Reproduksi
    {
        id: 7,
        judul: 'Kesehatan dan Pencegahan Penyakit',
        kategori: 'Kesehatan dan Reproduksi',
        konten: `
      <p><strong>Pencegahan:</strong> Jaga kebersihan kandang, beri pakan sesuai, dan lakukan pemeriksaan rutin.</p>
      <p><strong>Jika Sakit:</strong> Pisahkan ternak, amati gejala, jaga kebersihan, hubungi dokter hewan.</p>
      <p><strong>Vaksinasi:</strong> Melindungi dari penyakit spesifik. Jadwal disesuaikan dengan arahan petugas. Catat semua riwayat kesehatan!</p>
    `
    },
    {
        id: 8,
        judul: 'Reproduksi dan Pengembangbiakan',
        kategori: 'Kesehatan dan Reproduksi',
        konten: `
      <p><strong>Masa Kebuntingan:</strong> Periode betina mengandung anak hingga melahirkan (berbeda tiap hewan).</p>
      <p><strong>Perawatan Bunting:</strong> Perhatikan pakan, kebersihan kandang, dan pemeriksaan rutin.</p>
      <p><strong>Anak Ternak:</strong> Butuh perawatan khusus, pakan yang sesuai, dan pengawasan ekstra ketat.</p>
    `
    },
    // Kategori 4: Data dan Produksi
    {
        id: 9,
        judul: 'Pertumbuhan, Umur, dan Pencatatan',
        kategori: 'Data dan Produksi',
        konten: `
      <p><strong>Pencatatan Umur:</strong> Membantu memperkirakan tahap pertumbuhan dan pakan yang pas.</p>
      <p><strong>Per individu vs Kelompok:</strong> Individu (per ekor: nama, berat, riwayat), Kelompok (per kumpulan ternak sejenis).</p>
      <p><strong>Data Pertumbuhan:</strong> Untuk memantau perkembangan dan mengevaluasi keberhasilan pemeliharaan.</p>
    `
    },
    {
        id: 10,
        judul: 'Produksi dan Hasil Peternakan',
        kategori: 'Data dan Produksi',
        konten: `
      <p><strong>Hasil Ternak:</strong> Daging, susu, telur, kulit, pupuk kandang, hewan hidup.</p>
      <p><strong>Utama vs Sampingan:</strong> Utama (tujuan pemeliharaan, cth: telur), Sampingan (hasil lain, cth: kotoran jadi pupuk).</p>
      <p><strong>Kualitas Produk:</strong> Telur & susu harus dikumpulkan rutin, disortir, dijaga higienitasnya, dan disimpan di suhu yang tepat.</p>
    `
    },
    // Kategori 5: Manajemen
    {
        id: 11,
        judul: 'Manajemen Operasional Peternakan',
        kategori: 'Manajemen Peternakan',
        konten: `
      <p><strong>Manajemen Operasional:</strong> Mengatur seluruh proses dari pemeliharaan hingga pengelolaan hasil.</p>
      <p><strong>Jadwal & Stok:</strong> Buat jadwal pakan/bersih, catat stok pakan agar tidak kehabisan.</p>
      <p><strong>Evaluasi:</strong> Mengukur keberhasilan dan memperbaiki masalah dalam pemeliharaan.</p>
    `
    },
    // Kategori 6: Bisnis dan Keuangan
    {
        id: 12,
        judul: 'Manajemen Keuangan dan Bisnis',
        kategori: 'Bisnis dan Keuangan',
        konten: `
      <p><strong>Modal & Biaya:</strong> Uang, kandang, pakan, obat, tenaga kerja.</p>
      <p><strong>Omzet vs Keuntungan:</strong> Omzet = pendapatan kotor. Keuntungan = pendapatan bersih (omzet - biaya).</p>
      <p><strong>Pencatatan:</strong> Wajib mencatat transaksi jual-beli untuk melihat arus keuangan.</p>
    `
    },
    {
        id: 13,
        judul: 'Pembelian, Penjualan, dan Pemasaran',
        kategori: 'Bisnis dan Keuangan',
        konten: `
      <p><strong>Sebelum Beli:</strong> Cek kesehatan, umur, jenis, berat, harga, asal ternak.</p>
      <p><strong>Menentukan Harga Jual:</strong> Pertimbangkan biaya pemeliharaan, kualitas, harga pasar, dan margin keuntungan.</p>
      <p><strong>Pemasaran:</strong> Manfaatkan internet (sosial media/marketplace) untuk jangkauan luas. Jaga kepercayaan pembeli!</p>
    `
    },
    // Kategori 7: Pengembangan Usaha
    {
        id: 14,
        judul: 'Pengelolaan Risiko dan Pengembangan Usaha',
        kategori: 'Pengembangan Usaha',
        konten: `
      <p><strong>Risiko:</strong> Penyakit, harga pakan naik, harga jual turun.</p>
      <p><strong>Mitigasi Risiko:</strong> Jaga kesehatan, catat keuangan, siapkan dana darurat untuk perbaikan kandang/obat mendadak.</p>
      <p><strong>Pengembangan:</strong> Perbaiki kualitas, perluas pemasaran, tambah ternak bertahap, dan gunakan teknologi (seperti aplikasi ini) untuk mempermudah segalanya.</p>
    `
    }
];
