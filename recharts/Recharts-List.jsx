import BaseBarChart from './Bars/BaseBarChart'
import BaseLineChart from './Lines/BaseLineChart'
import BasePieChart from './Pies/BasePieChart'
import BaseAreaChart from './Areas/BaseAreaChart'

const RechartList = () => {
    return (
        <div>
            <div className="headings">
                <h2>Recharts</h2>
                <h3>Recharts Gallery</h3>
            </div>

            <div className='grid'>
                <div>
                    <BaseBarChart />
                </div>
                <div>
                    <BaseLineChart />
                </div>
                <div>
                    <BasePieChart />
                </div>
                <div>
                    <BaseAreaChart />
                </div>
            </div>
        </div>
    )
}

export default RechartList
