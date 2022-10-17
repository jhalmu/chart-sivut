//
// data 
import UserData from '../../_data/TripleData'
import '../../../styles/styles.css'
import 'chart.js/auto'
import { Chart } from 'react-chartjs-2';

// Helpers for automatic colors and defaults
//import { chartBase } from '../Helpers'
//import { Chart, registerables } from 'chart.js'
//Chart.register(...registerables)
//chartBase(Chart)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
    title: {
      display: false,
      text: 'Chart.js Bar Chart',
    },
  },
};


const labels = UserData.map((data) => data.name1)

export const data = {
  labels,
  datasets: [
    {
      type: 'line',
      label: UserData[0].ots2,
      borderColor: UserData[0].backgroundColor1,
      borderWidth: 2,
      fill: true,
      data: UserData.map((data) => data.tuotteet1),
    },
    {
      type: 'bar',
      label: UserData[0].ots3,
      backgroundColor: UserData[0].backgroundColor2,
      data: UserData.map((data) => data.tuotteet2),
    },
    {
      type: 'bar',
      label: UserData[0].ots1,
      backgroundColor: UserData[0].backgroundColor1,
      data: UserData.map((data) => data.tuotteet1),
    },
  ],
};
//console.log(UserData[0].ots2)
export default function MultiChart() {
  return <Chart type='bar' data={data} />
}