import React from "react";
import 'chart.js/auto'
import { Bar } from 'react-chartjs-2'
import { useState } from 'react'
/* import { Chart } from 'chart.js'; */
//
// data 
import UserData from '../../_data/BaseBarData'
import '../../../styles/styles.css'
/* import ChartDataLabels from 'chartjs-plugin-datalabels';
Chart.register(ChartDataLabels);

var options = {
  plugins: [ChartDataLabels],
}; */



const BaseBarChart = () => {
  const [userData] = useState({

    labels: UserData.map((data) => data.name),
    datasets: [{
      label: UserData[0].ots,
      data: UserData.map((data) => data.tuotteet),
      backgroundColor: UserData[0].backgroundColor,
      borderColor: UserData[0].borderColor,

      /* tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.label;
            let value = context.formattedValue;

            if (!label)
              label = 'Unknown'

            let sum = 0;
            let dataArr = context.chart.data.datasets[0].data;
            dataArr.map(data => {
              return sum += Number(data);
            });

            let percentage = (value * 100 / sum).toFixed(2) + '%';
            return label + ": " + percentage;
          }
        }
      } */
    }]
  })
  return (
    <Bar data={userData} />

  )
}
export default BaseBarChart