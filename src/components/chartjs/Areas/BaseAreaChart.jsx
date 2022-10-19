import 'chart.js/auto'
import { Line } from 'react-chartjs-2'
//
// data 
import UserData from '../../_data/BaseAreaData'
import '../../../styles/styles.css'

// Helpers for automatic colors and defaults
/* import { chartBase } from '../Helpers'*/

export const options = {
  responsive: true,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  stacked: false,
  plugins: {
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

      tooltip: {
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
      },
    },

  ],
}

export default function BaseAreaChart() {
  return (
    <Line options={options} data={data} />
  )
}