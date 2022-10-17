//import RechartsList from '../recharts/Recharts-List'
import ChartList from '../chartjs/Chart-List'

const Home = () => {

    return (
        <div>

            <div className="headings">
                <h2>Charts</h2>
                <h3>Chart Main Gallery</h3>
            </div>
            <div>
                <ChartList />
            </div>
        </div>
    )
}

export default Home