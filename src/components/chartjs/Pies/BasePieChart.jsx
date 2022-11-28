import React from "react";
import 'chart.js/auto'
import { Pie } from 'react-chartjs-2'
//
// data 
import UserData from '../../_data/BasePieData'
import '../../../styles/styles.css'
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { colors } from '../Helpers'
import { Chart } from 'chart.js'
Chart.register(ChartDataLabels);

const labels = UserData.map((data) => data.name)

export const data = {
  labels,
  datasets: [
    {
      label: UserData[0].ots,
      data: UserData.map((data) => data.tuotteet),
      backgroundColor: colors.backgroundColor,
      borderColor: colors.borderColor,
      plugins: [ChartDataLabels],
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

            let percentage = (value * 100 / sum).toFixed(1) + '%';
            return label + ": " + percentage;
          }
        }
      }
    },
  ],
}
export default function BasePieChart() {
  return <Pie data={data} />
}