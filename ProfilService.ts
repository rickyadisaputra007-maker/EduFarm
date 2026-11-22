import { AuthService } from './AuthService';
import { storage } from '../utils/storage';
import { User } from '../models/User';

AuthService.cekLogin();
const user = storage.get<User>('sesi_user');

if(user) {
  document.getElementById('prof-nama')!.innerText = user.nama;
  document.getElementById('prof-kandang')!.innerText = user.namaKandang;
  
  // Ambil huruf pertama dari nama untuk inisial
  const inisial = user.nama.charAt(0).toUpperCase();
  document.getElementById('prof-inisial')!.innerText = inisial;
}

document.getElementById('btn-logout')?.addEventListener('click', () => {
  if(confirm('Yakin ingin keluar?')) AuthService.logout();
});