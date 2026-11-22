import { storage } from '../utils/storage';
const skor = storage.get('skor_kuis') || 0;
const dataTernak = storage.get('data_ternak') || [];
// (Variabel dataTransaksi yang bikin error sudah dihapus)
document.getElementById('total-ternak').innerText = dataTernak.length.toString();
document.getElementById('skor-kuis').innerText = skor.toString();
const btnSertifikat = document.getElementById('btn-sertifikat');
if (skor >= 20 && dataTernak.length > 0) {
    btnSertifikat.disabled = false;
    btnSertifikat.innerText = "Unduh Sertifikat (Lulus)";
    btnSertifikat.addEventListener('click', () => {
        alert("Sertifikat berhasil diunduh! (Simulasi)");
    });
}
else {
    btnSertifikat.disabled = true;
    btnSertifikat.innerText = "Belum Memenuhi Syarat (Skor Min 20 & Punya Ternak)";
}
