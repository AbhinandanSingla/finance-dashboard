// components/DashboardChart.tsx
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip);

export default function DashboardChart({ data, visible }) {
  const chartData = {
    labels: data.labels,
    datasets: [
      { label: 'Consumption', data: data.consumption, borderColor: '#3b82f6', tension: 0.3, hidden: !visible.consumption },
      { label: 'AI Forecast', data: data.aiForecast, borderColor: '#10b981', borderDash: [5, 5], hidden: !visible.ai },
      { label: 'Final Forecast', data: data.finalForecast, borderColor: '#eab308', hidden: !visible.final },
    ],
  };

  return <Line data={chartData} options={{ responsive: true, maintainAspectRatio: false, plugins: { tooltip: { mode: 'index' } } }} />;
}