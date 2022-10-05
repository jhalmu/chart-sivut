import 'chart.js/auto'
import { Pie } from 'react-chartjs-2'
import '../../index.css'

function PieChart({ chartData, chartOptions }) {
  return <Pie data={chartData} options={chartOptions} />
}

export default PieChart
