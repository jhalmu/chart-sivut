//
// Datalabels for extending label info: formatter: percent etc.
//import ChartDataLabels from 'chartjs-plugin-datalabels';
//Chart.register(ChartDataLabels);
// Charts
import BaseAreaChart from './Areas/BaseAreaChart'
import DoubleAreaChart from './Areas/DoubleAreaChart'
import BaseBarChart from './Bars/BaseBarChart'
import BaseLineChart from './Lines/BaseLineChart'
import DoubleLineChart from './Lines/DoubleLineChart'
import BasePieChart from './Pies/BasePieChart'
import DoubleBarChart from './Bars/DoubleBarChart'
import MultiChart from './Multi/MultiChart'
import HorisontalBarChart from './Bars/HorisontalBarChart'
import StackedBarChart from './Bars/StackedBarChart'
//
// styles if needed
import '../../styles/styles.css'

const ChartList = () => {

  return (
    <div>
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
          <label>Pie</label>
          <BasePieChart />
        </div>
        <div>
          <label>Area</label>
          <BaseAreaChart />
        </div>
        <div>
          <label>Double Area</label>
          <DoubleAreaChart />
        </div>
        <div>
          <label>Double Line</label>
          <DoubleLineChart />
        </div>
        <div>
          <label>Double Bar</label>
          <DoubleBarChart />
        </div>
        <div>
          <label>Multi Chart</label>
          <MultiChart />
        </div>
        <div>
          <label>Horizontal Bar</label>
          <HorisontalBarChart />
        </div>
        <div>
          <label>Stacked Bar</label>
          <StackedBarChart />
        </div>
      </div>
    </div>
  )
}

export default ChartList