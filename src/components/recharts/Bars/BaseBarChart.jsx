
import "../styles/styles.css";
//
/// DATA
import data from '../_data/BaseBarData.json'

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';

const BaseBarChart = () => {

    return (
        <ResponsiveContainer className="chartStyles" aspect={1}>
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray />
                <XAxis dataKey="labels">
                    <Label value={data[0].label} offset={0} position="insideBottom" />
                </XAxis>
                <YAxis />
                <Tooltip itemStyle={{ color: '#000' }} wrapperStyle={{ backgroundColor: 'rgba(0,255,255,0.6)' }} contentStyle={{ backgroundColor: 'rgba(106,121,247,0.5)' }} />
                <Legend verticalAlign="top" height={36} iconType="wye" />
                <Bar dataKey="data" label={{ fill: 'green', fontSize: 20 }} fill="#82ca9d" />
            </BarChart>
        </ResponsiveContainer>
    );
}


export default BaseBarChart
