import { storage } from '../utils/storage';
import { Produksi } from '../models/Produksi';

const form = document.getElementById('form-produksi') as HTMLFormElement;
const inputTanggal = document.getElementById('tanggal') as HTMLInputElement;
const list = document.getElementById('list-produksi');
const selectTernak = document.getElementById('jenis-ternak') as HTMLSelectElement;
const selectHasil = document.getElementById('jenis-produk') as HTMLSelectElement;
const btnSimpan = document.getElementById('btn-simpan-produksi') as HTMLButtonElement;

if (inputTanggal) {
  inputTanggal.value = new Date().toISOString().split('T')[0];
}

// ==========================================
// 1. FUNGSI MENGISI DROPDOWN DENGAN HEWAN SPESIFIK
// ==========================================
const populateDropdown = () => {
  if (!selectTernak) return; 

  // Ambil semua data ternak
  const dataTernak = storage.get<any[]>('data_ternak') || [];

  if (dataTernak.length === 0) {
    selectTernak.innerHTML = `<option value="">Belum ada data ternak. Isi di menu Ternak!</option>`;
    selectTernak.disabled = true; 
    selectHasil.innerHTML = `<option value="">-</option>`; 
    btnSimpan.disabled = true; 
    btnSimpan.style.backgroundColor = '#ccc';
    return;
  }

  // Masukkan SETIAP HEWAN ke dalam dropdown
  selectTernak.innerHTML = '<option value="">-- Pilih Hewan --</option>';
  
  dataTernak.forEach((t: any) => {
    // Kita simpan nama hewan di 'value', dan jenisnya di atribut 'data-type'
    selectTernak.innerHTML += `
      <option value="${t.nama}" data-type="${t.jenis}">
        ${t.nama} (${t.jenis})
      </option>
    `; 
  });
};

// ==========================================
// 2. FUNGSI SAAT HEWAN DIPILIH (Ganti Opsi Hasil)
// ==========================================
if (selectTernak) {
  selectTernak.addEventListener('change', () => {
    const selectedOption = selectTernak.options[selectTernak.selectedIndex];
    const jenisHewan = selectedOption.getAttribute('data-type'); // Ambil jenisnya (Sapi/Ayam)
    
    selectHasil.innerHTML = ''; 

    if (!jenisHewan) {
      selectHasil.innerHTML = `<option value="">-- Pilih Hewan Dulu --</option>`;
      return;
    }

    // Sesuaikan jenis hasil dengan jenis hewannya
    if (['Sapi', 'Kambing', 'Kerbau'].includes(jenisHewan)) {
      selectHasil.innerHTML = `
        <option value="Susu (Liter)">Susu (Liter)</option>
        <option value="Pupuk (Kg)">Pupuk (Kg)</option>
        <option value="Daging (Kg)">Daging (Kg)</option>
      `;
    } else if (['Ayam', 'Bebek', 'Puyuh'].includes(jenisHewan)) {
      selectHasil.innerHTML = `
        <option value="Telur (Butir)">Telur (Butir)</option>
        <option value="Pupuk (Kg)">Pupuk (Kg)</option>
        <option value="Daging (Kg)">Daging (Kg)</option>
      `;
    } else if (['Lele'].includes(jenisHewan)) {
      selectHasil.innerHTML = `
        <option value="Ikan Konsumsi (Kg)">Ikan Konsumsi (Kg)</option>
      `;
    } else {
      selectHasil.innerHTML = `
        <option value="Pupuk (Kg)">Pupuk (Kg)</option>
        <option value="Daging (Kg)">Daging (Kg)</option>
      `;
    }
  });
}

// ==========================================
// 3. FUNGSI RENDER (Total, Grafik, Riwayat)
// ==========================================
const render = () => {
  const data = storage.get<Produksi[]>('data_produksi') || [];
  
  let totalTelur = 0, totalSusu = 0, totalPupuk = 0;
  let telurMingguIni = 0, susuMingguIni = 0, pupukMingguIni = 0;
  const batasWaktu = new Date(); 
  batasWaktu.setDate(batasWaktu.getDate() - 7);

  data.forEach((item: any) => {
    const jumlah = Number(item.jumlah);
    
    if (item.jenisProduk.includes('Telur')) totalTelur += jumlah;
    else if (item.jenisProduk.includes('Susu')) totalSusu += jumlah;
    else if (item.jenisProduk.includes('Pupuk')) totalPupuk += jumlah;

    const tglItem = new Date(item.tanggal);
    if (tglItem >= batasWaktu) {
      if (item.jenisProduk.includes('Telur')) telurMingguIni += jumlah;
      else if (item.jenisProduk.includes('Susu')) susuMingguIni += jumlah;
      else if (item.jenisProduk.includes('Pupuk')) pupukMingguIni += jumlah;
    }
  });

  const elTelur = document.getElementById('total-telur');
  if (elTelur) elTelur.innerText = `${totalTelur} Butir`;
  
  const elSusu = document.getElementById('total-susu');
  if (elSusu) elSusu.innerText = `${totalSusu} Liter`;
  
  const elPupuk = document.getElementById('total-pupuk');
  if (elPupuk) elPupuk.innerText = `${totalPupuk} Kg`;

  const maxGrafik = Math.max(telurMingguIni, susuMingguIni, pupukMingguIni, 1);
  const setBar = (id: string, val: number) => {
    const bar = document.getElementById(id);
    if (bar) bar.style.height = `${val === 0 ? 2 : (val / maxGrafik) * 100}%`;
  };
  setBar('bar-telur', telurMingguIni);
  setBar('bar-susu', susuMingguIni);
  setBar('bar-pupuk', pupukMingguIni);

  if (list) {
    if (data.length === 0) {
      list.innerHTML = `<p style="text-align: center; color: var(--text-muted);">Belum ada data produksi.</p>`;
      return;
    }
    
    const sortedData = [...data].sort((a, b) => new Date(b.tanggal).getTime() - new Date(a.tanggal).getTime());
    
    list.innerHTML = sortedData.map(item => {
      let borderColor = '#FF9F43';
      if (item.jenisProduk.includes('Telur')) borderColor = '#4379EE';
      if (item.jenisProduk.includes('Susu')) borderColor = '#05CD99';

      return `
        <div class="card" style="border-left: 4px solid ${borderColor};">
          <div style="display: flex; justify-content: space-between; align-items: flex-start;">
            <div>
              <strong>${item.jenisProduk}</strong>
              <!-- Menampilkan nama spesifik hewan -->
              <p style="margin-top: 4px;">Hewan: <b>${item.jenisTernak}</b></p>
            </div>
            <div style="text-align: right;">
              <strong style="font-size: 18px; color: var(--primary);">${item.jumlah}</strong>
              <p style="font-size: 12px; margin-top: 4px;">${new Date(item.tanggal).toLocaleDateString('id-ID')}</p>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }
};

// ==========================================
// 4. LOGIKA SIMPAN DATA
// ==========================================
if (form) {
  form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    
    const namaHewan = selectTernak.value; // Ini sekarang berisi NAMA (cth: Sapi Limosin)
    const jenisProduk = selectHasil.value;
    const jumlah = Number((document.getElementById('jumlah') as HTMLInputElement).value);
    const tanggal = inputTanggal.value;

    if (!namaHewan || !jenisProduk) { 
      alert("Pilih hewan dan jenis hasil terlebih dahulu!"); 
      return; 
    }

    const match = jenisProduk.match(/\((.*?)\)/);
    const satuan = match ? match[1] : '-';

    const dataLama = storage.get<Produksi[]>('data_produksi') || [];
    dataLama.push({ 
      id: Date.now().toString(), 
      jenisTernak: namaHewan as any, // Simpan NAMA spesifiknya
      jenisProduk, 
      jumlah, 
      satuan, 
      tanggal 
    });

    storage.set('data_produksi', dataLama);
    render();
    form.reset();
    inputTanggal.value = new Date().toISOString().split('T')[0];
    selectHasil.innerHTML = '<option value="">-- Pilih Hewan Dulu --</option>'; // Reset
  });
}

document.addEventListener('DOMContentLoaded', () => {
  populateDropdown();
  render();
});