import { AuthService } from './AuthService';
import { User } from '../models/User';

document.getElementById('btn-daftar')?.addEventListener('click', () => {
  const nama = (document.getElementById('reg-nama') as HTMLInputElement).value;
  const email = (document.getElementById('reg-email') as HTMLInputElement).value;
  const password = (document.getElementById('reg-password') as HTMLInputElement).value;
  const kandang = (document.getElementById('reg-kandang') as HTMLInputElement).value;

  // Validasi input kosong
  if (!nama || !email || !password || !kandang) {
    alert('Harap isi semua kolom!');
    return;
  }

  if (password.length < 6) {
    alert('Password minimal 6 karakter!');
    return;
  }

  // Buat objek user baru
  const userBaru: User = {
    id: "USR-" + Date.now(),
    nama: nama,
    email: email,
    password: password, // Di aplikasi nyata, password harus di-hash!
    namaKandang: kandang,
    role: 'peternak'
  };

  // Panggil fungsi register
  const berhasil = AuthService.register(userBaru);
  if (berhasil) {
    window.location.href = '/index.html'; // Pindah ke halaman login
  }
});