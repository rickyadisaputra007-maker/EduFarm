import { storage } from '../utils/storage';

const listTernak = document.getElementById('list-ternak');
const form = document.getElementById('form-ternak') as HTMLFormElement;
const btnSubmit = document.getElementById('btn-submit') as HTMLButtonElement;

let editIndex: number | null = null; 

const renderTernak = () => {
  const data = storage.get<any[]>('data_ternak') || [];
  if(!listTernak) return;

  if (data.length === 0) {
    listTernak.innerHTML = `<p style="color: var(--text-muted); text-align: center; margin-top: 20px;">Belum ada data ternak.</p>`;
    return;
  }

  // 1. Kelompokkan Data
  const sapi = data.filter((t: any) => t.jenis.toLowerCase() === 'sapi');
  const kambing = data.filter((t: any) => t.jenis.toLowerCase() === 'kambing');
  const ayam = data.filter((t: any) => t.jenis.toLowerCase() === 'ayam');
  const lainnya = data.filter((t: any) => 
    !['sapi', 'kambing', 'ayam'].includes(t.jenis.toLowerCase())
  );

  let html = '';

  // 2. Fungsi Render Kelompok
  const renderGroup = (judul: string, items: any[]) => {
    if (items.length === 0) return '';

    let groupHtml = `
      <div style="display: flex; align-items: center; gap: 10px; margin-top: 30px; margin-bottom: 15px;">
        <h3 style="margin: 0; color: var(--primary); font-size: 18px;">${judul}</h3>
        <span style="background: var(--primary-light); color: var(--primary); padding: 2px 8px; border-radius: 12px; font-size: 12px; font-weight: bold;">${items.length} Ekor</span>
      </div>
      <div class="card-list">
    `;

    items.forEach(t => {
      const originalIndex = data.indexOf(t); 
      
      const isTerjual = t.status === 'Terjual';
      const badge = isTerjual ? `<div class="badge-terjual">TERJUAL</div>` : '';
      const btnJual = isTerjual ? '' : `<button class="btn-sm btn-jual" data-action="jual" data-index="${originalIndex}">Terjual</button>`;

      groupHtml += `
        <div class="card ${isTerjual ? 'card-sold' : ''}">
          ${badge}
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
            <strong style="font-size: 18px; color: var(--primary);">${t.nama}</strong>
            <span style="font-size: 12px; color: var(--text-muted);">${t.tanggal ? new Date(t.tanggal).toLocaleDateString('id-ID') : ''}</span>
          </div>
          
          <p>Jenis: <strong>${t.jenis}</strong></p>
          <p>Berat: <strong>${t.berat} kg</strong> | Pakan: <strong>${t.pakan} kg/hari</strong></p>
          
          <div class="card-actions">
            <button class="btn-sm btn-edit" data-action="edit" data-index="${originalIndex}">Edit</button>
            ${btnJual}
            <button class="btn-sm btn-hapus" data-action="hapus" data-index="${originalIndex}">Hapus</button>
          </div>
        </div>
      `;
    });

    return groupHtml + `</div>`;
  };

  // 3. Susun Tampilan
  html += renderGroup('Daftar Sapi', sapi);
  html += renderGroup('Daftar Kambing', kambing);
  html += renderGroup('Daftar Ayam', ayam);
  html += renderGroup('Ternak Lainnya', lainnya);

  listTernak.innerHTML = html;
};

// Form Submit (Simpan & Edit)
form?.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  const nama = (document.getElementById('nama-ternak') as HTMLInputElement).value;
  const jenis = (document.getElementById('jenis-ternak') as HTMLInputElement).value;
  const berat = Number((document.getElementById('berat-ternak') as HTMLInputElement).value);
  const pakan = (berat * 0.03).toFixed(2);

  let dataLama = storage.get<any[]>('data_ternak') || [];

  if (editIndex !== null) {
    dataLama[editIndex] = { ...dataLama[editIndex], nama, jenis, berat, pakan };
    editIndex = null; 
    btnSubmit.innerText = "Simpan Data"; 
  } else {
    dataLama.push({ nama, jenis, berat, pakan, status: 'Aktif', tanggal: new Date().toISOString() });
  }
  
  storage.set('data_ternak', dataLama);
  renderTernak();
  form.reset();
});

// Tombol Aksi (Edit, Jual, Hapus)
listTernak?.addEventListener('click', (e: Event) => {
  const target = e.target as HTMLElement;
  const action = target.getAttribute('data-action');
  const indexStr = target.getAttribute('data-index');
  
  if (!action || indexStr === null) return;
  
  const index = parseInt(indexStr);
  const dataLama = storage.get<any[]>('data_ternak') || [];

  if (action === 'edit') {
    (document.getElementById('nama-ternak') as HTMLInputElement).value = dataLama[index].nama;
    (document.getElementById('jenis-ternak') as HTMLInputElement).value = dataLama[index].jenis;
    (document.getElementById('berat-ternak') as HTMLInputElement).value = dataLama[index].berat;
    
    editIndex = index;
    btnSubmit.innerText = "Update Data";
    window.scrollTo({ top: 0, behavior: 'smooth' }); 

  } else if (action === 'jual') {
    if (confirm('Tandai ternak ini sebagai TERJUAL?')) {
      dataLama[index].status = 'Terjual';
      storage.set('data_ternak', dataLama);
      renderTernak();
    }
  } else if (action === 'hapus') {
    if (confirm('Hapus data ternak ini?')) {
      dataLama.splice(index, 1); 
      storage.set('data_ternak', dataLama);
      renderTernak();
    }
  }
});

document.addEventListener('DOMContentLoaded', renderTernak);