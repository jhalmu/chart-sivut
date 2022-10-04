//import { useState, useEffect } from "react";
import 'chart.js/auto'
import { Chart } from 'react-chartjs-2'



function AllChart() {
  return <Chart type={type} options={options} data={data} />
}



/* function BarChart({ chartId, chartData, chartOptions }) {
  return <Bar id={chartId} data={chartData} options={chartOptions} />
} */

export default AllChart
