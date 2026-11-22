import { AuthService } from './AuthService';
import { storage } from '../utils/storage';
import { User } from '../models/User';

AuthService.cekLogin();
const user = storage.get<User>('sesi_user');
if (user) {
  const el = document.getElementById('sapaan');
  if (el) el.innerText = `Halo, ${user.nama}`;
}

const filterWaktu = document.getElementById('filter-waktu') as HTMLSelectElement;

// Kamus Warna
const WARNA_KHUSUS: { [key: string]: string } = {
  'Sapi': '#4379EE', 'Ayam': '#05CD99', 'Kambing': '#FF9F43', 'Lele': '#EE5D50', 'Bebek': '#8F6CF6',
};
const PALET_CADANGAN = ['#FFCE20', '#00BCD4', '#E91E63', '#795548', '#9E9E9E'];

function drawSmoothLine(svgElement: SVGSVGElement, data: any[], colors: string[]) {
  if (!svgElement) return;
  svgElement.innerHTML = '';
  const width = 600, height = 250, paddingX = 40, paddingY = 30;
  const chartWidth = width - paddingX * 2;
  const chartHeight = height - paddingY * 2;

  let maxVal = 1;
  data.forEach((d: any) => {
    d.values.forEach((v: number) => { if (v > maxVal) maxVal = v; });
  });

  // Grid Horizontal
  for (let i = 0; i <= 4; i++) {
    const y = paddingY + chartHeight - (chartHeight / 4) * i;
    const labelValue = Math.round((maxVal / 4) * i);
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', paddingX.toString()); line.setAttribute('y1', y.toString());
    line.setAttribute('x2', (width - paddingX).toString()); line.setAttribute('y2', y.toString());
    line.setAttribute('stroke', '#E0E5F2'); line.setAttribute('stroke-dasharray', '4');
    svgElement.appendChild(line);

    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', (paddingX - 10).toString()); text.setAttribute('y', (y + 4).toString());
    text.setAttribute('text-anchor', 'end'); text.setAttribute('font-size', '10'); text.setAttribute('fill', '#A3AED0');
    text.textContent = labelValue.toString();
    svgElement.appendChild(text);
  }

  const stepX = chartWidth / Math.max(data.length - 1, 1);
  const jumlahSeri = data.length > 0 && data[0].values ? data[0].values.length : 0;

  // Gambar Garis
  for (let seriesIndex = 0; seriesIndex < jumlahSeri; seriesIndex++) {
    const points = data.map((d: any, i: number) => {
      const x = paddingX + (stepX * i);
      const y = paddingY + chartHeight - ((d.values[seriesIndex] || 0) / maxVal) * chartHeight;
      return { x, y };
    });

    if (points.length > 0) {
      let pathD = `M ${points[0].x},${points[0].y}`;
      for (let i = 0; i < points.length - 1; i++) {
        const p1 = points[i], p2 = points[i + 1];
        const midX = (p1.x + p2.x) / 2;
        pathD += ` C ${midX},${p1.y} ${midX},${p2.y} ${p2.x},${p2.y}`;
      }
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', pathD); path.setAttribute('fill', 'none');
      path.setAttribute('stroke', colors[seriesIndex]); path.setAttribute('stroke-width', '3');
      svgElement.appendChild(path);

      points.forEach((p: any) => {
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', p.x.toString()); circle.setAttribute('cy', p.y.toString());
        circle.setAttribute('r', '4'); circle.setAttribute('fill', 'white');
        circle.setAttribute('stroke', colors[seriesIndex]); circle.setAttribute('stroke-width', '2');
        svgElement.appendChild(circle);
      });
    }
  }

  // Label Sumbu X
  data.forEach((d: any, i: number) => {
    const x = paddingX + (stepX * i);
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', x.toString()); text.setAttribute('y', (height - 10).toString());
    text.setAttribute('text-anchor', 'middle'); text.setAttribute('font-size', '10'); text.setAttribute('fill', '#A3AED6');
    text.textContent = d.label;
    svgElement.appendChild(text);
  });
}

const renderGrafik = () => {
  const dataTernak = storage.get<any[]>('data_ternak') || [];
  const filter = filterWaktu ? filterWaktu.value : 'harian';

  let uniqueJenis: string[] = Array.from(new Set(dataTernak.map((t: any) => String(t.jenis))));
  if (uniqueJenis.length === 0) uniqueJenis = ['Belum Ada Data'];

  const activeColors = uniqueJenis.map((jenis, index) => {
    return WARNA_KHUSUS[jenis] || PALET_CADANGAN[index % PALET_CADANGAN.length];
  });

  let labels: string[] = [];
  let timeRanges: { start: Date, end: Date }[] = [];
  let dataTumbuh: { label: string, values: number[] }[] = [];
  let dataJual: { label: string, values: number[] }[] = [];

  // Filter Waktu
  if (filter === 'harian') {
    for (let i = 6; i >= 0; i--) {
      const d = new Date(); d.setDate(d.getDate() - i);
      const start = new Date(d); start.setHours(0,0,0,0);
      const end = new Date(d); end.setHours(23,59,59,999);
      labels.push(d.toLocaleDateString('id-ID', { weekday: 'short' }));
      timeRanges.push({ start, end });
    }
  } else if (filter === 'mingguan') {
    for (let i = 3; i >= 0; i--) {
      const start = new Date(); start.setDate(start.getDate() - (i * 7) - 7);
      const end = new Date(); end.setDate(end.getDate() - (i * 7));
      labels.push(`Mg-${4-i}`);
      timeRanges.push({ start, end });
    }
  } else {
    const namaBulan = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
    for (let i = 0; i < 12; i++) {
      const start = new Date(new Date().getFullYear(), i, 1);
      const end = new Date(new Date().getFullYear(), i + 1, 0);
      labels.push(namaBulan[i]);
      timeRanges.push({ start, end });
    }
  }

  // Hitung Data Tumbuh & Jual
  labels.forEach((label, index) => {
    const range = timeRanges[index];
    
    const valuesTumbuh = uniqueJenis.map((jenis: string) => {
      return dataTernak.filter((t: any) => {
        if (!t.tanggal) return false;
        const tgl = new Date(t.tanggal);
        return t.jenis === jenis && tgl >= range.start && tgl <= range.end;
      }).length;
    });
    dataTumbuh.push({ label, values: valuesTumbuh });

    const valuesJual = uniqueJenis.map((jenis: string) => {
      return dataTernak.filter((t: any) => {
        if (!t.tanggal) return false;
        const tgl = new Date(t.tanggal);
        return t.jenis === jenis && t.status === 'Terjual' && tgl >= range.start && tgl <= range.end;
      }).length;
    });
    dataJual.push({ label, values: valuesJual });
  });

  // =========================================================
  // FILTERING: Cari hewan yang beneran ada datanya (bukan 0)
  // =========================================================
  const filteredJenis: string[] = [];
  const filteredColors: string[] = [];
  const filteredTumbuhData = labels.map(l => ({ label: l, values: [] as number[] }));
  const filteredJualData = labels.map(l => ({ label: l, values: [] as number[] }));

  uniqueJenis.forEach((jenis, index) => {
    // Cek apakah hewan ini punya data > 0 di periode ini
    const hasData = dataTumbuh.some(d => (d.values[index] || 0) > 0) || 
                    dataJual.some(d => (d.values[index] || 0) > 0);
    
    if (hasData) {
      filteredJenis.push(jenis);
      filteredColors.push(activeColors[index]);
      
      // Masukkan data ke array baru
      dataTumbuh.forEach((d, i) => filteredTumbuhData[i].values.push(d.values[index] || 0));
      dataJual.forEach((d, i) => filteredJualData[i].values.push(d.values[index] || 0));
    }
  });

  // Kalau semua hewan datanya 0 (baru buka aplikasi), tampilkan Sapi aja biar grafik kosongnya rapi
  if (filteredJenis.length === 0 && uniqueJenis.length > 0) {
    filteredJenis.push(uniqueJenis[0]);
    filteredColors.push(activeColors[0]);
    dataTumbuh.forEach((d, i) => filteredTumbuhData[i].values.push(d.values[0] || 0));
    dataJual.forEach((d, i) => filteredJualData[i].values.push(d.values[0] || 0));
  }

  // Gambar Grafik HANYA dengan hewan yang punya data
  const svgChart = document.getElementById('line-chart') as unknown as SVGSVGElement;
  const svgSales = document.getElementById('sales-chart') as unknown as SVGSVGElement;
  
  if (svgChart) drawSmoothLine(svgChart, filteredTumbuhData, filteredColors);
  if (svgSales) drawSmoothLine(svgSales, filteredJualData, filteredColors);

  // Render Legenda HANYA dengan hewan yang punya data
  const legendDiv = document.getElementById('chart-legend');
  if (legendDiv) {
    legendDiv.innerHTML = filteredJenis.map((jenis: string, index: number) => {
      return `
        <div style="display: flex; align-items: center; gap: 5px; color: var(--text-main); font-size: 12px; font-weight: 600;">
          <span style="width: 12px; height: 12px; background: ${filteredColors[index]}; border-radius: 50%;"></span> 
          ${jenis}
        </div>
      `;
    }).join('');
  }
};

renderGrafik();
if (filterWaktu) {
  filterWaktu.addEventListener('change', renderGrafik);
}