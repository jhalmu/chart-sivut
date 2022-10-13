// Charts
import BaseLineChart from './Lines/BaseLineChart'
import BaseBarChart from './Bars/BaseBarChart'
import BasePieChart from './Pies/BasePieChart'
import BaseAreaChart from './Areas/BaseAreaChart'
//
// styles if needed
import '../../index.css'

const ChartList = () => {

  return (
    <div>
      <div className="headings">
        <h2>ChartJS</h2>
        <h3>ChartJS Gallery</h3>
      </div>

      <div className="grid">

        <div>
          <label>Bar</label>
          <BaseBarChart />
        </div>
        <div>
          <label>Line</label>
          <BaseLineChart />
        </div>
        <div>
          <label>DietPie</label>
          <BasePieChart />
        </div>
        <div>
          <label>Area</label>
          <BaseAreaChart />
        </div>
      </div>
    </div>
  )
}

export default ChartList