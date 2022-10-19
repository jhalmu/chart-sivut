import 'chart.js/auto'
import { Bar } from 'react-chartjs-2'
//
// data 
import UserData from '../../_data/TripleData'
import '../../../styles/styles.css'

export const options = {
    plugins: {
        title: {
            display: false,
            text: 'Chart.js Bar Chart - Stacked',
        },
    },
    responsive: true,
    scales: {
        x: {
            stacked: true,
        },
        y: {
            stacked: true,
        },
    },
};

const labels = UserData.map((data) => data.name1)

export const data = {
    labels,
    datasets: [
        {
            label: UserData[0].ots3,
            data: UserData.map((data) => data.tuotteet3),
            backgroundColor: UserData[0].backgroundColor3,
        },
        {
            label: UserData[0].ots2,
            data: UserData.map((data) => data.tuotteet2),
            backgroundColor: UserData[0].backgroundColor2,
        },
        {
            label: UserData[0].ots1,
            data: UserData.map((data) => data.tuotteet1),
            backgroundColor: UserData[0].backgroundColor1,
        },
    ],
};

export default function StackedBarChart() {
    return <Bar options={options} data={data} />;
}