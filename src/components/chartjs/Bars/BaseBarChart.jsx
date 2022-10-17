import 'chart.js/auto'
import { Bar } from 'react-chartjs-2'
import { useState } from 'react'
//
// data 
import UserData from '../../_data/BaseBarData'
import '../../../styles/styles.css'

// Helpers for automatic colors and defaults
/* import { chartBase } from '../Helpers'
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)
chartBase(Chart)
 */
const BaseBarChart = () => {
  const [userData] = useState({

    labels: UserData.map((data) => data.name),
    datasets: [{
      label: UserData[0].ots,
      data: UserData.map((data) => data.tuotteet),
      backgroundColor: UserData[0].backgroundColor,
      borderColor: UserData[0].borderColor,

    }]
  })
  return (
    <Bar data={userData} />

  )
}
export default BaseBarChart






// bin
// function BaseAreaChart({ chartData, chartOptions }) {