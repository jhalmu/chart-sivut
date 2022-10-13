import 'chart.js/auto'
import { Bar } from 'react-chartjs-2'
import '../styles/styles.css'

function BaseBarChart({ chartData, chartOptions }) {
  return <Bar data={chartData} options={chartOptions} />
}

export default BaseBarChart
