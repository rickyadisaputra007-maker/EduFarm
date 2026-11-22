import { storage } from '../utils/storage';
import { tanggalHariIni } from '../utils/format';
const form = document.getElementById('form-kesehatan');
const list = document.getElementById('list-kesehatan');
const selectTernak = document.getElementById('nama-ternak');
const btnSimpan = document.getElementById('btn-simpan-kes');
// 1. AMBIL DATA TERNAK UNTUK DROPDOWN
const dataTernak = storage.get('data_ternak') || [];
if (dataTernak.length === 0) {
    // Jika belum ada hewan, nonaktifkan form
    selectTernak.innerHTML = '<option value="">-- Belum ada data ternak --</option>';
    selectTernak.disabled = true;
    btnSimpan.disabled = true;
    btnSimpan.style.backgroundColor = '#ccc';
}
else {
    // Jika ada, masukkan ke dalam dropdown
    selectTernak.innerHTML = '<option value="">-- Pilih Ternak --</option>';
    dataTernak.forEach(t => {
        selectTernak.innerHTML += `<option value="${t.nama}">${t.nama} (${t.jenis})</option>`;
    });
}
const render = () => {
    const data = storage.get('data_kesehatan') || [];
    if (list) {
        if (data.length === 0) {
            list.innerHTML = `<p style="color: var(--text-muted); text-align: center;">Belum ada riwayat kesehatan.</p>`;
            return;
        }
        list.innerHTML = data.map(k => `
      <div class="card">
        <strong>${k.namaTernak}</strong>
        <p>Perawatan: ${k.jenisPerawatan}</p>
        <p>Tanggal: ${k.tanggal}</p>
      </div>
    `).join('');
    }
};
form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const nama = selectTernak.value;
    const perawatan = document.getElementById('perawatan').value;
    if (!nama) {
        alert("Pilih ternak terlebih dahulu!");
        return;
    }
    const dataLama = storage.get('data_kesehatan') || [];
    dataLama.push({ id: Date.now().toString(), namaTernak: nama, jenisPerawatan: perawatan, tanggal: tanggalHariIni() });
    storage.set('data_kesehatan', dataLama);
    render();
    form.reset();
});
document.addEventListener('DOMContentLoaded', render);
