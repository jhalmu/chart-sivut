//
// data 
import UserData from '../../_data/DoubleAreaData'
import '../../../styles/styles.css'
//import 'chart.js/auto'
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);
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
      label: UserData.map((data) => data.ots1),
      borderColor: UserData[0].backgroundColor1,
      borderWidth: 2,
      fill: true,
      data: UserData.map((data) => data.tuotteet1),
    },
    {
      type: 'bar',
      label: UserData.map((data) => data.ots2),
      backgroundColor: UserData[0].backgroundColor2,
      data: UserData.map((data) => data.tuotteet2),
    },
    {
      type: 'bar',
      label: UserData.map((data) => data.ots1),
      backgroundColor: UserData[0].backgroundColor1,
      data: UserData.map((data) => data.tuotteet1),
    },
  ],
};
export default function MultiChart() {
  return <Chart type='bar' data={data} />
}