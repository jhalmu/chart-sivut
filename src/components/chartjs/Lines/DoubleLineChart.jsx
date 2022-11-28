import React from "react";
import 'chart.js/auto'
import { Line } from 'react-chartjs-2'
//
// data 
import UserData from '../../_data/DoubleAreaData'
import '../../../styles/styles.css'


// Helpers for automatic colors and defaults
import { Chart } from 'chart.js'
import { chartBase } from '../Helpers'
chartBase(Chart)

export const options = {
  responsive: true,
  interaction: {
    mode: 'index',
    intersect: true,
  },
  stacked: false,
  plugins: {
    datalabels: false,
    title: {
      display: false,
      text: 'Multi Area Chart w/ Title',
    },
  },
  scales: {
    y: {
      type: 'linear',
      display: true,
      position: 'left',
    },
    y1: {
      type: 'linear',
      display: true,
      position: 'right',
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

const labels = UserData.map((data) => data.name1)

export const data = {
  labels,
  datasets: [
    {
      label: UserData[0].ots1,
      data: UserData.map((data) => data.tuotteet1),
      backgroundColor: UserData[0].backgroundColor1,
      borderColor: UserData[0].borderColor1,
      // This makes line to area-chart
      fill: false,
      yAxisID: 'y',
      // Makes curves to line
      lineTension: 0.3,
    },
    {
      label: UserData[0].ots2,
      data: UserData.map((data) => data.tuotteet2),
      backgroundColor: UserData[0].backgroundColor2,
      borderColor: UserData[0].borderColor2,
      // This makes line to area-chart
      fill: false,
      yAxisID: 'y1',
    }
  ],

}

export default function DoubleLineChart() {
  return (
    <Line options={options} data={data} />
  )
}
