import 'chart.js/auto'
import { Bar } from 'react-chartjs-2'
import '../../index.css'

function BarChart({ chartData, chartOptions }) {
  return <Bar data={chartData} options={chartOptions} />
}

export default BarChart
