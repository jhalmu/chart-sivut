
import "../styles/styles.css";
//
/// DATA
import tuoteData from '../_data/BaseData';

import { Bar, BarChart, CartesianGrid, Label, LabelList, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const BaseBarChart = () => {

    return (
        <ResponsiveContainer className="chartStyles" aspect={1}>
            <BarChart
                width={500}
                height={300}
                data={tuoteData}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid />
                <XAxis dataKey="name">
                    <Label value={tuoteData[0].ots} position="insideBottom" offset={-5} style={{ fontWeight: "bold" }} />
                </XAxis>
                <YAxis />
                <Tooltip />

                <Bar dataKey="tuotteet" label={{ fill: 'green', fontSize: 10 }} fill="#82ca9d" />
            </BarChart>
        </ResponsiveContainer>
    );
}


export default BaseBarChart
