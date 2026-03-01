// components/DashboardChart.tsx
'use client';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function DashboardChart({ data }) {
  const chartData = {
    labels: data.labels,
    datasets: [
      { label: 'Consumption', data: data.historical, borderColor: '#3b82f6', tension: 0.3 },
      { label: 'AI Forecast', data: data.forecast, borderColor: '#10b981', borderDash: [5, 5] },
    ],
  };

  return <Line data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />;
}