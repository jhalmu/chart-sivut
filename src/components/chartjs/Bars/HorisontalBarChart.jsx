import React from "react";
import 'chart.js/auto'
import { Bar } from 'react-chartjs-2'
//
// data 
import UserData from '../../_data/BaseBarData'
import '../../../styles/styles.css'

export const options = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 1,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
    title: {
      display: false,
      text: 'Chart.js Horizontal Bar Chart',
    },
  },
};
const labels = UserData.map((data) => data.name)

const data = {
  labels,
  datasets: [{
    label: UserData[0].ots,
    data: UserData.map((data) => data.tuotteet),
    backgroundColor: UserData[0].backgroundColor,
    borderColor: UserData[0].borderColor,

  }]
}
export default function HorisontalBarChart() {
  return <Bar options={options} data={data} />;
}
