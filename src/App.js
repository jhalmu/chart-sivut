import { useEffect, useState } from 'react'
import BarChart from './components/charts/BarChart.jsx'
import LineChart from './components/charts/LineChart.jsx'


function App() {

  const [demoData, setDemoData] = useState({
    datasets: [],
  })
  const [chartOptions, setChartOptions] = useState({})
  const [chartType, setChartType] = useState()
  const [chartId, setChartId] = useState()

  useEffect(() => {

    setChartType({
      type: 'line'
    })

    setChartId({
      id: 1
    })

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
  //
  return (
    <article>
      <header>
        <nav>
          <ul>
            <li><a href="/" className="secondary">…</a></li>
          </ul>
          <ul>
            <li><strong>Chart Thing</strong></li>
          </ul>
          <ul>
            <li><a href="/" className="secondary">…</a></li>
          </ul>
        </nav>
      </header>
      <div className="container" data-theme="light" >
        <div className="grid">

          <div>
            <BarChart datasetIdKey={chartId} type={chartType} options={chartOptions} chartData={demoData} />
          </div>

          <div>
            <LineChart datasetIdKey={chartId} type={chartType} options={chartOptions} chartData={demoData} />
          </div>
        </div>
      </div>
      <footer></footer>
    </article>
  )
}

export default App