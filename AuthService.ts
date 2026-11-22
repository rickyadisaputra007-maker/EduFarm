import { storage } from '../utils/storage';
import { User } from '../models/User';

export const AuthService = {
  // 1. Fungsi Daftar Akun
  register(userBaru: User): boolean {
    const usersDB = storage.get<User[]>('users_db') || [];
    
    // Cek apakah email sudah terdaftar
    if (usersDB.some(u => u.email === userBaru.email)) {
      alert('Email sudah terdaftar, silakan gunakan email lain!');
      return false;
    }

    // Simpan user baru ke "Database"
    usersDB.push(userBaru);
    storage.set('users_db', usersDB);
    
    alert('Pendaftaran berhasil! Silakan login.');
    return true;
  },

  // 2. Fungsi Login Manual
  login(email: string, password: string): boolean {
    const usersDB = storage.get<User[]>('users_db') || [];
    
    // Cari user yang email dan password-nya cocok
    const userValid = usersDB.find(u => u.email === email && u.password === password);
    
    if (userValid) {
      // Hapus password sebelum disimpan di sesi (untuk keamanan)
      const { password, ...userSesi } = userValid; 
      storage.set('sesi_user', userSesi);
      window.location.href = '/dashboard.html';
      return true;
    } else {
      alert('Email atau Password salah!');
      return false;
    }
  },

  // 3. Fungsi Login via Google (OAuth)
  loginGoogle(payload: any) {
    const userGoogle: User = {
      id: payload.sub,
      nama: payload.name,
      email: payload.email,
      namaKandang: "Kandang Google", // Bisa diubah nanti di profil
      role: 'peternak'
    };
    storage.set('sesi_user', userGoogle);
    window.location.href = '/dashboard.html';
  },

  // 4. Logout
  logout() {
    storage.remove('sesi_user');
    window.location.href = '/index.html';
  },

  // 5. Proteksi Halaman
  cekLogin() {
    if (!storage.get<User>('sesi_user')) {
      alert('Silakan login terlebih dahulu!');
      window.location.href = '/index.html';
    }
  }
};