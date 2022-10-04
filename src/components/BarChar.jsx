import 'chart.js/auto'
import { Bar } from 'react-chartjs-2'
import '../index.css'

function BarChart({ chartWidth, chartHeight, chartData, chartOptions }) {
  return <Bar width={chartWidth} height={chartHeight} data={chartData} options={chartOptions} />
}

export default BarChart
