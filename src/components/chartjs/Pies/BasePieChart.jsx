import 'chart.js/auto'
import { Pie } from 'react-chartjs-2'
import { useState } from 'react'
//
// data 
import UserData from '../../_data/BasePieData'
import '../../../styles/styles.css'

// Helpers for automatic colors and defaults
import { chartBase, colors } from '../Helpers'
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)
chartBase(Chart)


const BasePieChart = () => {
  const [userData] = useState({

    labels: UserData.map((data) => data.name),
    datasets: [
      {
        label: UserData[0].ots,
        data: UserData.map((data) => data.tuotteet),
        backgroundColor: colors.backgroundColor,
        borderColor: colors.borderColor,
      },
    ],

  })
  return (
    <Pie data={userData} />
  )

}
export default BasePieChart