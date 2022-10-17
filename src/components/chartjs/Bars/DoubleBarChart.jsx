import 'chart.js/auto'
import { Bar } from 'react-chartjs-2'
//
// data 
import UserData from '../../_data/DoubleAreaData'
import '../../../styles/styles.css'

// Helpers for automatic colors and defaults
import { chartBase } from '../Helpers'
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)
chartBase(Chart)

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
      label: UserData[0].ots1,
      data: UserData.map((data) => data.tuotteet1),
      backgroundColor: UserData[0].backgroundColor1
    },
    {
      label: UserData[0].ots2,
      data: UserData.map((data) => data.tuotteet2),
      backgroundColor: UserData[0].backgroundColor2
    },
  ],
};
export default function App() {
  return <Bar options={options} data={data} />;
}






// bin
// function BaseAreaChart({ chartData, chartOptions }) {