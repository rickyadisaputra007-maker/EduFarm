import { bankSoal } from '../data/soal-data';
import { acakArray } from '../utils/acak';
import { storage } from '../utils/storage';
const container = document.getElementById('kuis-container');
const btnSelesai = document.getElementById('btn-selesai');
// Acak soal
let soalAktif = acakArray([...bankSoal]);
let skor = 0;
const renderSoal = () => {
    if (!container)
        return;
    container.innerHTML = '';
    soalAktif.forEach((soal, index) => {
        const div = document.createElement('div');
        div.className = 'card';
        if (soal.tipe === 'pg') {
            div.innerHTML = `<p style="font-weight:600; margin-bottom:10px;">${index + 1}. ${soal.pertanyaan}</p>
        ${soal.pilihan.map((p, i) => `
          <label style="display:block; margin-bottom:8px; cursor:pointer;">
            <input type="radio" name="soal-${soal.id}" value="${i}" style="margin-right:8px;"> 
            ${p}
          </label>
        `).join('')}`;
        }
        else if (soal.tipe === 'bs') {
            div.innerHTML = `<p style="font-weight:600; margin-bottom:10px;">${index + 1}. ${soal.pertanyaan}</p>
        <label style="display:block; margin-bottom:8px; cursor:pointer;">
          <input type="radio" name="soal-${soal.id}" value="true" style="margin-right:8px;"> Benar
        </label>
        <label style="display:block; cursor:pointer;">
          <input type="radio" name="soal-${soal.id}" value="false" style="margin-right:8px;"> Salah
        </label>`;
        }
        container.appendChild(div);
    });
};
btnSelesai?.addEventListener('click', () => {
    skor = 0;
    soalAktif.forEach(soal => {
        const selected = document.querySelector(`input[name="soal-${soal.id}"]:checked`);
        if (selected) {
            if (soal.tipe === 'pg' && Number(selected.value) === soal.jawabanBenar)
                skor += 10;
            if (soal.tipe === 'bs' && (selected.value === 'true') === soal.jawabanBenar)
                skor += 10;
        }
    });
    const nilaiLama = storage.get('skor_kuis') || 0;
    if (skor > nilaiLama)
        storage.set('skor_kuis', skor);
    alert(`Kuis Selesai! Skor Anda: ${skor}`);
    window.location.href = '/laporan.html';
});
document.addEventListener('DOMContentLoaded', renderSoal);
