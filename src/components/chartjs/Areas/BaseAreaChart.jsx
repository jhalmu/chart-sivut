import 'chart.js/auto'
import { Line } from 'react-chartjs-2'
import { useState } from 'react'
//
// data 
import UserData from '../../_data/BaseAreaData'
import '../../../styles/styles.css'

// Helpers for automatic colors and defaults
import { chartBase } from '../Helpers'
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)
chartBase(Chart)


const BaseAreaChart = () => {
  const [userData] = useState({

    labels: UserData.map((data) => data.name),
    datasets: [
      {
        label: UserData[0].ots,
        data: UserData.map((data) => data.tuotteet),
        backgroundColor: UserData[0].backgroundColor,
        borderColor: UserData[0].borderColor,
        // This makes line to area-chart
        fill: true
      },
    ],

  })
  return (
    <Line data={userData} />
  )

}
export default BaseAreaChart






// bin
// function BaseAreaChart({ chartData, chartOptions }) {