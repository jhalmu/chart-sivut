import 'chart.js/auto'
import { Chart } from 'react-chartjs-2'

const ChartAll = ({ chartType, chartOptions, chartData }) => {
  return (
    <Chart
      datasetIdKey="id"
      type={chartType}
      options={chartOptions}
      data={chartData}
    />
  )
}

export default ChartAll
