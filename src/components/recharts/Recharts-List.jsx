import BaseBarChart from './Bars/BaseBarChart'
import BaseLineChart from './Lines/BaseLineChart'

const RechartList = () => {
    return (
        <div>
            <div className="headings">
                <h2>Recharts</h2>
                <h3>Recharts Gallery</h3>
            </div>

            <div className="grid">
                <BaseBarChart />
                <BaseLineChart />
            </div>
        </div>
    )
}

export default RechartList
