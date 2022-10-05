import { useState } from 'react'
//
// data 
import { UserData } from '../../data'
//
// Charts
import LineChart from './LineChart'
import BarChart from './BarChart'
import PieChart from './PieChart'
//
// styles if needed
import '../../index.css'
//
// Helpers for automatic colors and defaults
import { chartBase, colors } from './Helpers'
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)
chartBase(Chart)

//UserData.map((data) => data.type)

const ChartList = () => {
  const [userData] = useState({

    //
    // Otetaan ensimmäinen blokki datasta. Tarkoitus olisi saada jokaiseen charttiin oma data.
    // Ei viisisi joka charttiin pistää hardcoded datan uppausta tai käy niin kuin VR:llä.
    labels: UserData[0].labels,
    datasets: [
      {
        label: [UserData[0].label],
        data: UserData[0].data,
        backgroundColor: colors.backgroundColor,
        borderColor: colors.borderColor,

      },
    ],

  })
  return (
    <div>
      <div className="headings">
        <h2>Chart List</h2>
        <h3>Place where charts say: We are alive!</h3>
      </div>

      <div className="grid">

        <div>
          <LineChart chartData={userData} />
        </div>
        <div>
          <BarChart chartData={userData} />
        </div>
        <div>
          <PieChart chartData={userData} />
        </div>
      </div>
    </div>
  )
}

export default ChartList