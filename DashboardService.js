import { AuthService } from './AuthService';
import { storage } from '../utils/storage';
AuthService.cekLogin();
const user = storage.get('sesi_user');
if (user)
    document.getElementById('sapaan').innerText = `Halo, ${user.nama}`;
const filterWaktu = document.getElementById('filter-waktu');
// ==========================================
// FUNGSI MENGGAMBAR GRAFIK GARIS MELENGKUNG (SVG)
// ==========================================
function drawSmoothLine(svgElement, data, colors) {
    svgElement.innerHTML = '';
    const width = 600;
    const height = 250;
    const paddingX = 40;
    const paddingY = 30;
    const chartWidth = width - paddingX * 2;
    const chartHeight = height - paddingY * 2;
    let maxVal = 1;
    data.forEach(d => d.values.forEach(v => { if (v > maxVal)
        maxVal = v; }));
    // Buat Grid Horizontal
    for (let i = 0; i <= 4; i++) {
        const y = paddingY + chartHeight - (chartHeight / 4) * i;
        const labelValue = Math.round((maxVal / 4) * i);
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', paddingX.toString());
        line.setAttribute('y1', y.toString());
        line.setAttribute('x2', (width - paddingX).toString());
        line.setAttribute('y2', y.toString());
        line.setAttribute('stroke', '#E0E5F2');
        line.setAttribute('stroke-dasharray', '4');
        svgElement.appendChild(line);
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', (paddingX - 10).toString());
        text.setAttribute('y', (y + 4).toString());
        text.setAttribute('text-anchor', 'end');
        text.setAttribute('font-size', '10');
        text.setAttribute('fill', '#A3AED0');
        text.textContent = labelValue.toString();
        svgElement.appendChild(text);
    }
    // Gambar Garis Data
    const stepX = chartWidth / Math.max(data.length - 1, 1);
    data[0]?.values.forEach((_, seriesIndex) => {
        const points = data.map((d, i) => {
            const x = paddingX + (stepX * i);
            const y = paddingY + chartHeight - ((d.values[seriesIndex] || 0) / maxVal) * chartHeight;
            return { x, y };
        });
        if (points.length > 0) {
            let pathD = `M ${points[0].x},${points[0].y}`;
            for (let i = 0; i < points.length - 1; i++) {
                const p1 = points[i];
                const p2 = points[i + 1];
                const midX = (p1.x + p2.x) / 2;
                pathD += ` C ${midX},${p1.y} ${midX},${p2.y} ${p2.x},${p2.y}`;
            }
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('d', pathD);
            path.setAttribute('fill', 'none');
            path.setAttribute('stroke', colors[seriesIndex]);
            path.setAttribute('stroke-width', '3');
            svgElement.appendChild(path);
            points.forEach(p => {
                const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                circle.setAttribute('cx', p.x.toString());
                circle.setAttribute('cy', p.y.toString());
                circle.setAttribute('r', '4');
                circle.setAttribute('fill', 'white');
                circle.setAttribute('stroke', colors[seriesIndex]);
                circle.setAttribute('stroke-width', '2');
                svgElement.appendChild(circle);
            });
        }
    });
    // Label Sumbu X
    data.forEach((d, i) => {
        const x = paddingX + (stepX * i);
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', x.toString());
        text.setAttribute('y', (height - 10).toString());
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('font-size', '10');
        text.setAttribute('fill', '#A3AED6');
        text.textContent = d.label;
        svgElement.appendChild(text);
    });
}
// ==========================================
// LOGIKA PENGELOMPOKAN DATA
// ==========================================
const renderGrafik = () => {
    const dataTernak = storage.get('data_ternak') || [];
    const filter = filterWaktu.value;
    let chartData = [];
    let chartDataJual = [];
    if (filter === 'harian') {
        for (let i = 6; i >= 0; i--) {
            const d = new Date();
            d.setDate(d.getDate() - i);
            const dateStr = d.toISOString().split('T')[0];
            const label = d.toLocaleDateString('id-ID', { weekday: 'short' });
            const sapi = dataTernak.filter(t => t.tanggal?.startsWith(dateStr) && t.jenis === 'Sapi').length;
            const kambing = dataTernak.filter(t => t.tanggal?.startsWith(dateStr) && t.jenis === 'Kambing').length;
            const ayam = dataTernak.filter(t => t.tanggal?.startsWith(dateStr) && t.jenis === 'Ayam').length;
            chartData.push({ label, values: [sapi, kambing, ayam] });
            const js = dataTernak.filter(t => t.tanggal?.startsWith(dateStr) && t.status === 'Terjual' && t.jenis === 'Sapi').length;
            const jk = dataTernak.filter(t => t.tanggal?.startsWith(dateStr) && t.status === 'Terjual' && t.jenis === 'Kambing').length;
            const ja = dataTernak.filter(t => t.tanggal?.startsWith(dateStr) && t.status === 'Terjual' && t.jenis === 'Ayam').length;
            chartDataJual.push({ label, values: [js, jk, ja] });
        }
    }
    else if (filter === 'mingguan') {
        for (let i = 3; i >= 0; i--) {
            const start = new Date();
            start.setDate(start.getDate() - (i * 7) - 7);
            const end = new Date();
            end.setDate(end.getDate() - (i * 7));
            const inRange = (tgl) => {
                if (!tgl)
                    return false;
                const d = new Date(tgl);
                return d >= start && d <= end;
            };
            const sapi = dataTernak.filter(t => inRange(t.tanggal) && t.jenis === 'Sapi').length;
            const kambing = dataTernak.filter(t => inRange(t.tanggal) && t.jenis === 'Kambing').length;
            const ayam = dataTernak.filter(t => inRange(t.tanggal) && t.jenis === 'Ayam').length;
            chartData.push({ label: `Mg-${4 - i}`, values: [sapi, kambing, ayam] });
            const js = dataTernak.filter(t => inRange(t.tanggal) && t.status === 'Terjual' && t.jenis === 'Sapi').length;
            const jk = dataTernak.filter(t => inRange(t.tanggal) && t.status === 'Terjual' && t.jenis === 'Kambing').length;
            const ja = dataTernak.filter(t => inRange(t.tanggal) && t.status === 'Terjual' && t.jenis === 'Ayam').length;
            chartDataJual.push({ label: `Mg-${4 - i}`, values: [js, jk, ja] });
        }
    }
    else {
        const namaBulan = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
        for (let i = 0; i < 12; i++) {
            const sapi = dataTernak.filter(t => t.tanggal && new Date(t.tanggal).getMonth() === i && t.jenis === 'Sapi').length;
            const kambing = dataTernak.filter(t => t.tanggal && new Date(t.tanggal).getMonth() === i && t.jenis === 'Kambing').length;
            const ayam = dataTernak.filter(t => t.tanggal && new Date(t.tanggal).getMonth() === i && t.jenis === 'Ayam').length;
            chartData.push({ label: namaBulan[i], values: [sapi, kambing, ayam] });
            const js = dataTernak.filter(t => t.tanggal && new Date(t.tanggal).getMonth() === i && t.status === 'Terjual' && t.jenis === 'Sapi').length;
            const jk = dataTernak.filter(t => t.tanggal && new Date(t.tanggal).getMonth() === i && t.status === 'Terjual' && t.jenis === 'Kambing').length;
            const ja = dataTernak.filter(t => t.tanggal && new Date(t.tanggal).getMonth() === i && t.status === 'Terjual' && t.jenis === 'Ayam').length;
            chartDataJual.push({ label: namaBulan[i], values: [js, jk, ja] });
        }
    }
    const svgChart = document.getElementById('line-chart');
    const svgSales = document.getElementById('sales-chart');
    const colors = ['#4379EE', '#05CD99', '#FF9F43'];
    if (svgChart)
        drawSmoothLine(svgChart, chartData, colors);
    if (svgSales)
        drawSmoothLine(svgSales, chartDataJual, colors);
};
renderGrafik();
filterWaktu?.addEventListener('change', renderGrafik);
