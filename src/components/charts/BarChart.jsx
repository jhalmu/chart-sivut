import 'chart.js/auto'
import { Bar } from 'react-chartjs-2'

function BarChart({ chartId, chartData, chartOptions }) {
  return <Bar id={chartId} data={chartData} options={chartOptions} />
}

export default BarChart
