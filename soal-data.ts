import { Soal } from '../models/Soal';

export const bankSoal: Soal[] = [
  {
    id: 1,
    tipe: 'pg',
    pertanyaan: 'Apa tujuan utama dari kegiatan beternak?',
    pilihan: [
      'Menghabiskan waktu luang',
      'Memperoleh hasil seperti daging, susu, telur, dan keuntungan',
      'Mengurangi populasi hewan',
      'Membuat kandang yang besar'
    ],
    jawabanBenar: 1
  },
  {
    id: 2,
    tipe: 'pg',
    pertanyaan: 'Hewan yang memiliki sistem pencernaan memamah biak disebut...',
    pilihan: ['Unggas', 'Ruminansia', 'Karnivora', 'Amfibi'],
    jawabanBenar: 1
  },
  {
    id: 3,
    tipe: 'bs',
    pertanyaan: 'Kandang yang baik harus tertutup rapat tanpa ada ventilasi udara.',
    jawabanBenar: false // Salah, harus ada ventilasi
  },
  {
    id: 4,
    tipe: 'pg',
    pertanyaan: 'Pakan yang berasal dari tanaman seperti rumput dan daun disebut...',
    pilihan: ['Konsentrat', 'Dedak', 'Hijauan', 'Biji-bijian'],
    jawabanBenar: 2
  },
  {
    id: 5,
    tipe: 'bs',
    pertanyaan: 'Tempat minum ternak tidak perlu dibersihkan secara rutin.',
    jawabanBenar: false // Salah, harus rutin dibersihkan
  },
  {
    id: 6,
    tipe: 'pg',
    pertanyaan: 'Tanda-tanda ternak sedang tidak sehat adalah...',
    pilihan: ['Nafsu makan meningkat', 'Sangat aktif', 'Lemas dan tidak mau makan', 'Suara kencang'],
    jawabanBenar: 2
  },
  {
    id: 7,
    tipe: 'bs',
    pertanyaan: 'Ternak yang sedang sakit sebaiknya dipisahkan dari ternak yang sehat.',
    jawabanBenar: true
  },
  {
    id: 8,
    tipe: 'pg',
    pertanyaan: 'Selisih antara total pendapatan (omzet) dengan seluruh biaya operasional disebut...',
    pilihan: ['Modal', 'Keuntungan', 'Omzet', 'Hutang'],
    jawabanBenar: 1
  },
  {
    id: 9,
    tipe: 'pg',
    pertanyaan: 'Manfaat mencatat umur dan pertumbuhan ternak adalah...',
    pilihan: [
      'Agar kandang cepat kotor',
      'Untuk memperkirakan tahap pertumbuhan dan pakan yang pas',
      'Supaya ternak bisa terbang',
      'Mengurangi jumlah pakan'
    ],
    jawabanBenar: 1
  },
  {
    id: 10,
    tipe: 'bs',
    pertanyaan: 'Kotoran ternak tidak memiliki nilai ekonomi dan hanya bisa dibuang.',
    jawabanBenar: false // Salah, bisa jadi pupuk
  }
];