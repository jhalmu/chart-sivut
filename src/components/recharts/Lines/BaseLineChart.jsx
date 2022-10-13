import "../styles/styles.css";
//
/// DATA
import {
    CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, Label,
    YAxis
} from "recharts";
import tuoteData from '../../_data/BaseData';

const BaseLineChart = () => {
    return (
        <ResponsiveContainer className="chartStyles" >
            <LineChart

                data={tuoteData}
            >
                <CartesianGrid />
                <XAxis dataKey="tuotteet">
                    <Label value={tuoteData[0].ots} position="insideBottom" offset={-5} style={{ fontWeight: "bold" }} />
                </XAxis>
                <YAxis />
                <Tooltip />
                <Line
                    type="monotone"
                    dataKey="tuotteet"
                    stroke="#8884d8"
                />
            </LineChart>
        </ResponsiveContainer>
    );
}

export default BaseLineChart