import { storage } from '../utils/storage';
const listTernak = document.getElementById('list-ternak');
const form = document.getElementById('form-ternak');
const btnSubmit = document.getElementById('btn-submit');
let editIndex = null;
const renderTernak = () => {
    const data = storage.get('data_ternak') || [];
    if (!listTernak)
        return;
    if (data.length === 0) {
        listTernak.innerHTML = `<p style="color: var(--text-muted); text-align: center; margin-top: 20px;">Belum ada data ternak.</p>`;
        return;
    }
    // 1. Kelompokkan Data
    const sapi = data.filter(t => t.jenis === 'Sapi');
    const kambing = data.filter(t => t.jenis === 'Kambing');
    const ayam = data.filter(t => t.jenis === 'Ayam');
    let html = '';
    // 2. Fungsi untuk merender per kelompok
    const renderGroup = (judul, items) => {
        if (items.length === 0)
            return ''; // Jika tidak ada hewan jenis ini, lewati
        let groupHtml = `
      <div style="display: flex; align-items: center; gap: 10px; margin-top: 30px; margin-bottom: 15px;">
        <h3 style="margin: 0; color: var(--primary); font-size: 18px;">${judul}</h3>
        <span style="background: var(--primary-light); color: var(--primary); padding: 2px 8px; border-radius: 12px; font-size: 12px; font-weight: bold;">${items.length} Ekor</span>
      </div>
      <div class="card-list">
    `;
        items.forEach(t => {
            // Cari indeks asli di array data utama agar tombol edit/hapus tidak error
            const originalIndex = data.indexOf(t);
            const isTerjual = t.status === 'Terjual';
            const badge = isTerjual ? `<div class="badge-terjual">TERJUAL</div>` : '';
            const btnJual = isTerjual ? '' : `<button class="btn-sm btn-jual" data-action="jual" data-index="${originalIndex}">Terjual</button>`;
            groupHtml += `
        <div class="card ${isTerjual ? 'card-sold' : ''}">
          ${badge}
          <!-- Nama Hewan Dibuat Lebih Menonjol -->
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
            <strong style="font-size: 18px; color: var(--primary);">${t.nama}</strong>
            <span style="font-size: 12px; color: var(--text-muted);">${t.tanggal ? new Date(t.tanggal).toLocaleDateString('id-ID') : ''}</span>
          </div>
          
          <p>Berat: <strong>${t.berat} kg</strong> | Pakan: <strong>${t.pakan} kg/hari</strong></p>
          
          <div class="card-actions">
            <button class="btn-sm btn-edit" data-action="edit" data-index="${originalIndex}">Edit</button>
            ${btnJual}
            <button class="btn-sm btn-hapus" data-action="hapus" data-index="${originalIndex}">Hapus</button>
          </div>
        </div>
      `;
        });
        groupHtml += `</div>`;
        return groupHtml;
    };
    // 3. Susun tampilan berdasarkan urutan kelompok
    html += renderGroup('Daftar Sapi', sapi);
    html += renderGroup('Daftar Kambing', kambing);
    html += renderGroup('Daftar Ayam', ayam);
    listTernak.innerHTML = html;
};
form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const nama = document.getElementById('nama-ternak').value;
    const jenis = document.getElementById('jenis-ternak').value;
    const berat = Number(document.getElementById('berat-ternak').value);
    const pakan = (berat * 0.03).toFixed(2);
    let dataLama = storage.get('data_ternak') || [];
    if (editIndex !== null) {
        dataLama[editIndex] = { ...dataLama[editIndex], nama, jenis, berat, pakan };
        editIndex = null;
        btnSubmit.innerText = "Simpan Data";
    }
    else {
        dataLama.push({ nama, jenis, berat, pakan, status: 'Aktif', tanggal: new Date().toISOString() });
    }
    storage.set('data_ternak', dataLama);
    renderTernak();
    form.reset();
});
listTernak?.addEventListener('click', (e) => {
    const target = e.target;
    const action = target.getAttribute('data-action');
    const indexStr = target.getAttribute('data-index');
    if (!action || indexStr === null)
        return;
    const index = parseInt(indexStr);
    const dataLama = storage.get('data_ternak') || [];
    if (action === 'edit') {
        document.getElementById('nama-ternak').value = dataLama[index].nama;
        document.getElementById('jenis-ternak').value = dataLama[index].jenis;
        document.getElementById('berat-ternak').value = dataLama[index].berat;
        editIndex = index;
        btnSubmit.innerText = "Update Data";
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    else if (action === 'jual') {
        if (confirm('Tandai ternak ini sebagai TERJUAL?')) {
            dataLama[index].status = 'Terjual';
            storage.set('data_ternak', dataLama);
            renderTernak();
        }
    }
    else if (action === 'hapus') {
        if (confirm('Hapus data ternak ini?')) {
            dataLama.splice(index, 1);
            storage.set('data_ternak', dataLama);
            renderTernak();
        }
    }
});
document.addEventListener('DOMContentLoaded', renderTernak);
