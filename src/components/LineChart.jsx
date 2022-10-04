import 'chart.js/auto'
import { Line } from 'react-chartjs-2'
//import { UserData } from '../data'
import '../index.css'




function LineChart({ chartWidth, chartHeight, chartData, chartOptions }) {
  return <Line width={chartWidth} height={chartHeight} data={chartData} options={chartOptions} />
}

export default LineChart
