import 'chart.js/auto'
import { Line } from 'react-chartjs-2'
//
// data 
import UserData from '../../_data/BaseAreaData'
import '../../../styles/styles.css'

export const options = {
  responsive: true,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  stacked: false,
  plugins: {
    datalabels: false,
    title: {
      display: false,
      text: 'Area Chart w/ Title',
    },
  }
};

const labels = UserData.map((data) => data.name)

export const data = {
  labels,
  datasets: [
    {
      label: UserData[0].ots,
      data: UserData.map((data) => data.tuotteet),
      backgroundColor: UserData[0].backgroundColor,
      borderColor: UserData[0].borderColor,
      // This makes line to area-chart
      fill: true,
    },

  ],
}

export default function BaseAreaChart() {
  return (
    <Line options={options} data={data} />
  )
}