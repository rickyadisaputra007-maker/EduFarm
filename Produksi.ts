export interface Produksi {
  id: string;
  tanggal: string;
  jenisTernak: 'Ayam' | 'Sapi' | 'Kambing';
  jenisProduk: string; // Contoh: Telur, Susu, Pupuk
  jumlah: number;
  satuan: string; // Contoh: Butir, Liter, Kg
}