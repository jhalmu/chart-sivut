import 'chart.js/auto'
import { Line } from 'react-chartjs-2'
//import { UserData } from '../data'
import '../../index.css'

function LineChart({ chartData, chartOptions }) {
  return <Line data={chartData} options={chartOptions} />

}
export default LineChart
