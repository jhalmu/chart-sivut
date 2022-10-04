import { useState } from 'react'
// styles if needed
import '../index.css'
// Helpers for automatic colors and
// possible working defaults
import { colors } from './Helpers'
// Charts
import LineChart from './LineChart'
import BarChart from './BarChar'
// mock data 
import { UserData } from '../data'

const chartWidth = '400'
const chartHeight = '100'



UserData.map((data) => data.type)

const ChartList = () => {
  const [userData] = useState({

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
          <LineChart width={chartWidth} height={chartHeight} chartData={userData} />
        </div>
        <div>
          <BarChart width={chartWidth} height={chartHeight} chartData={userData} />
        </div>

      </div>
    </div>
  )
}

export default ChartList