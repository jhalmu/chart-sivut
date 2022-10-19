import 'chart.js/auto'
import { Line } from 'react-chartjs-2'
import { useState } from 'react'
//
// data 
import UserData from '../../_data/BaseLineData'
import '../../../styles/styles.css'


const BaseLineChart = () => {
  const [userData] = useState({

    labels: UserData.map((data) => data.name),
    datasets: [
      {
        label: UserData[0].ots,
        data: UserData.map((data) => data.tuotteet),
        backgroundColor: UserData[0].backgroundColor,
        borderColor: UserData[0].borderColor,
        // This makes line to area-chart
        fill: false,
        lineTension: 0.2,
      },
    ],

  })
  return (
    <Line data={userData} />
  )

}
export default BaseLineChart