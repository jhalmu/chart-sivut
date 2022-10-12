import "../styles/styles.css";
//
/// DATA
import React from "react";
import {
    Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis,
    YAxis, Label
} from "recharts";
import tuoteData from '../_data/BaseData';

const BaseAreaChart = () => {

    return (
        <ResponsiveContainer className="chartStyles" aspect={1}>
            <AreaChart
                width={500}
                height={400}
                data={tuoteData}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0
                }}
            >
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="{tuoteData.labels}">
                    <Label value={tuoteData[0].ots} position="insideBottom" offset={0} style={{ fontWeight: "bold" }} />

                </XAxis>
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="tuotteet" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
            </AreaChart>
        </ResponsiveContainer>
    );
}

export default BaseAreaChart
