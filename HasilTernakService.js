import { storage } from '../utils/storage';
import { tanggalHariIni } from '../utils/format';
const form = document.getElementById('form-hasil');
const list = document.getElementById('list-hasil');
const inputTanggal = document.getElementById('tanggal-hasil');
// Set tanggal hari ini secara otomatis
inputTanggal.value = tanggalHariIni();
const render = () => {
    const data = storage.get('hasil_ternak') || [];
    if (list) {
        if (data.length === 0) {
            list.innerHTML = `<p style="color: var(--text-muted); text-align: center;">Belum ada catatan hasil ternak.</p>`;
            return;
        }
        list.innerHTML = data.map(h => `
      <div class="card">
        <strong>${h.jenisProduk}</strong>
        <p>Jumlah: ${h.jumlah}</p>
        <p>Tanggal: ${h.tanggal}</p>
      </div>
    `).join('');
    }
};
form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const jenis = document.getElementById('jenis-produk').value;
    const jumlah = document.getElementById('jumlah-hasil').value;
    const tanggal = inputTanggal.value;
    const dataLama = storage.get('hasil_ternak') || [];
    dataLama.push({ id: Date.now().toString(), jenisProduk: jenis, jumlah, tanggal });
    storage.set('hasil_ternak', dataLama);
    render();
    form.reset();
    inputTanggal.value = tanggalHariIni();
});
document.addEventListener('DOMContentLoaded', render);
