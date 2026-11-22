import { storage } from '../utils/storage';
const form = document.getElementById('form-produksi');
const inputTanggal = document.getElementById('tanggal');
const list = document.getElementById('list-produksi');
// Set tanggal hari ini
inputTanggal.value = new Date().toISOString().split('T')[0];
const render = () => {
    const data = storage.get('data_produksi') || [];
    // 1. Hitung Total Keseluruhan
    let totalTelur = 0, totalSusu = 0, totalPupuk = 0;
    // 2. Hitung Total 7 Hari Terakhir (Untuk Grafik)
    let telurMingguIni = 0, susuMingguIni = 0, pupukMingguIni = 0;
    const batasWaktu = new Date();
    batasWaktu.setDate(batasWaktu.getDate() - 7);
    data.forEach(item => {
        // Total Keseluruhan
        if (item.jenisProduk.includes('Telur'))
            totalTelur += item.jumlah;
        else if (item.jenisProduk.includes('Susu'))
            totalSusu += item.jumlah;
        else if (item.jenisProduk.includes('Pupuk'))
            totalPupuk += item.jumlah;
        // Total Mingguan
        const tglItem = new Date(item.tanggal);
        if (tglItem >= batasWaktu) {
            if (item.jenisProduk.includes('Telur'))
                telurMingguIni += item.jumlah;
            else if (item.jenisProduk.includes('Susu'))
                susuMingguIni += item.jumlah;
            else if (item.jenisProduk.includes('Pupuk'))
                pupukMingguIni += item.jumlah;
        }
    });
    // Tampilkan ke Ringkasan
    document.getElementById('total-telur').innerText = `${totalTelur} Butir`;
    document.getElementById('total-susu').innerText = `${totalSusu} Liter`;
    document.getElementById('total-pupuk').innerText = `${totalPupuk} Kg`;
    // 3. Gambar Grafik
    const maxGrafik = Math.max(telurMingguIni, susuMingguIni, pupukMingguIni, 1);
    const setBar = (id, val) => {
        const bar = document.getElementById(id);
        if (bar)
            bar.style.height = `${val === 0 ? 0 : (val / maxGrafik) * 100}%`;
    };
    setBar('bar-telur', telurMingguIni);
    setBar('bar-susu', susuMingguIni);
    setBar('bar-pupuk', pupukMingguIni);
    // 4. Render Riwayat
    if (list) {
        if (data.length === 0) {
            list.innerHTML = `<p style="text-align: center; color: var(--text-muted);">Belum ada data produksi.</p>`;
            return;
        }
        // Urutkan dari yang terbaru
        const sortedData = [...data].sort((a, b) => new Date(b.tanggal).getTime() - new Date(a.tanggal).getTime());
        list.innerHTML = sortedData.map(item => `
      <div class="card" style="border-left: 4px solid ${item.jenisProduk.includes('Telur') ? 'var(--accent-blue)' : item.jenisProduk.includes('Susu') ? 'var(--accent-green)' : 'var(--accent-orange)'};">
        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
          <div>
            <strong>${item.jenisProduk}</strong>
            <p style="margin-top: 4px;">Ternak: ${item.jenisTernak}</p>
          </div>
          <div style="text-align: right;">
            <strong style="font-size: 18px; color: var(--primary);">${item.jumlah}</strong>
            <p style="font-size: 12px; margin-top: 4px;">${new Date(item.tanggal).toLocaleDateString('id-ID')}</p>
          </div>
        </div>
      </div>
    `).join('');
    }
};
form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const jenisTernak = document.getElementById('jenis-ternak').value;
    const jenisProduk = document.getElementById('jenis-produk').value;
    const jumlah = Number(document.getElementById('jumlah').value);
    const tanggal = inputTanggal.value;
    const dataLama = storage.get('data_produksi') || [];
    dataLama.push({
        id: Date.now().toString(),
        jenisTernak,
        jenisProduk,
        jumlah,
        satuan: jenisProduk.split(' ')[1].replace('(', '').replace(')', ''), // Ambil teks dalam kurung
        tanggal
    });
    storage.set('data_produksi', dataLama);
    render();
    form.reset();
    inputTanggal.value = new Date().toISOString().split('T')[0];
});
document.addEventListener('DOMContentLoaded', render);
