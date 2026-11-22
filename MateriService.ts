import { daftarMateri } from '../data/materi-data';

const listMateri = document.getElementById('list-materi');

const renderMateri = () => {
  if (!listMateri) return;

  listMateri.innerHTML = daftarMateri.map((materi) => `
    <div class="card" style="margin-bottom: 15px;">
      <span style="font-size: 11px; font-weight: bold; color: var(--accent-blue); text-transform: uppercase;">${materi.kategori}</span>
      <h3 style="margin: 5px 0 10px 0; font-size: 18px;">${materi.id}. ${materi.judul}</h3>
      
      <div style="font-size: 14px; color: var(--text-main); line-height: 1.6; border-top: 1px solid var(--border-color); padding-top: 10px;">
        ${materi.konten}
      </div>
    </div>
  `).join('');
};

document.addEventListener('DOMContentLoaded', renderMateri);