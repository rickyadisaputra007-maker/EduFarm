import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  server: { host: true, port: 5173, strictPort: true },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        dashboard: resolve(__dirname, 'dashboard.html'),
        dataTernak: resolve(__dirname, 'data-ternak.html'),
        kesehatan: resolve(__dirname, 'kesehatan.html'),
        transaksi: resolve(__dirname, 'transaksi.html'),
        materi: resolve(__dirname, 'materi.html'),
        kuis: resolve(__dirname, 'kuis.html'),
        laporan: resolve(__dirname, 'laporan.html'),
        profil: resolve(__dirname, 'profil.html'),
        hasilTernak: resolve(__dirname, 'hasil-ternak.html'), 
      },
    },
  },
});