// [Modul 2: Static Method / Function] 
export const formatRupiah = (angka: number): string => {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(angka);
};

export const tanggalHariIni = (): string => {
  return new Date().toISOString().split('T')[0];
};