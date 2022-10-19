import 'chart.js/auto'
import { Line } from 'react-chartjs-2'
//
// data 
import UserData from '../../_data/DoubleAreaData'
import '../../../styles/styles.css'

// Helpers for automatic colors and defaults
/* import { chartBase } from '../Helpers'
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)
chartBase(Chart) */

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
      fill: true,
      yAxisID: 'y',
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
      }
    },
    {
      label: UserData[0].ots2,
      data: UserData.map((data) => data.tuotteet2),
      backgroundColor: UserData[0].backgroundColor2,
      borderColor: UserData[0].borderColor2,
      // This makes line to area-chart
      fill: true,
      yAxisID: 'y1',
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
      }
    }
  ],

}

export default function DoubleAreaChart() {
  return (
    <Line options={options} data={data} />
  )
}