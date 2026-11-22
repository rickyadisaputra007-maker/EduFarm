// [Modul 4: Interface] Kontrak untuk data keuangan
export interface Transaksi {
  id: string;
  tanggal: string;
  keterangan: string;
  tipe: 'pemasukan' | 'pengeluaran';
  nominal: number;
}