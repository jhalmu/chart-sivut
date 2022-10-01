import { useEffect, useState } from 'react'
import 'chart.js/auto'
import { Chart } from 'react-chartjs-2'

const Main = () => {
  const [demoData, setDemoData] = useState({ datasets: [] })
  const [chartOptions, setChartOptions] = useState({})
  //const [chartType, setChartType] = useState({})
  //const [chartId, setChartId] = useState({})
  const chartType = 'line'
  const chartId = 1

  useEffect(() => {
    setDemoData({
      labels: ['A', 'B', 'C', 'D'],
      datasets: [
        {
          label: 'Labeli',
          data: [50, 234, 90, 421],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
          borderWidth: 1,
        },
      ],
    })

    setChartOptions({
      maintainAspectRatio: true,
      responsive: false,
      scales: {
        y: {
          beginAtZero: false,
          fontColor: 'red',
          fontSize: 21,
          fontWeight: 800,
        },
      },
    })
  }, [])

  return (
    <div>
      <Chart
        type={chartType}
        datasetIdKey={chartId}
        options={chartOptions}
        data={demoData}
      />
    </div>
  )
}

export default ChartItem
