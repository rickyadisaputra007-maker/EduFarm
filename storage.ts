// [Modul 7: Generic Function] Menggunakan <T> agar tipe data dinamis namun aman.
export const storage = {
  set(key: string, value: unknown): void {
    localStorage.setItem(key, JSON.stringify(value));
  },
  get<T>(key: string): T | null {
    const item = localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : null;
  },
  remove(key: string): void {
    localStorage.removeItem(key);
  }
};