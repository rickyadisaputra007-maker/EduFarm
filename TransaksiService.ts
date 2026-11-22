import { Transaksi } from '../models/Transaksi.js';
import { storage } from '../utils/storage.js';
import { formatRupiah, tanggalHariIni } from '../utils/format.js';

const form = document.getElementById('form-transaksi') as HTMLFormElement;
const list = document.getElementById('list-transaksi');

const render = () => {
  const data = storage.get<Transaksi[]>('data_transaksi') || [];
  if(list) {
    list.innerHTML = data.map(t => `
      <div class="card">
        <span style="color: ${t.tipe === 'pemasukan' ? 'green' : 'red'}">${t.tipe.toUpperCase()}</span><br/>
        ${t.keterangan} - ${formatRupiah(t.nominal)}
      </div>
    `).join('');
  }
};

form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const ket = (document.getElementById('ket') as HTMLInputElement).value;
  const nominal = Number((document.getElementById('nominal') as HTMLInputElement).value);
  const tipe = (document.getElementById('tipe') as HTMLSelectElement).value as 'pemasukan'|'pengeluaran';

  const dataLama = storage.get<Transaksi[]>('data_transaksi') || [];
  dataLama.push({ id: Date.now().toString(), tanggal: tanggalHariIni(), keterangan: ket, tipe, nominal });
  storage.set('data_transaksi', dataLama);
  render(); form.reset();
});

document.addEventListener('DOMContentLoaded', render);