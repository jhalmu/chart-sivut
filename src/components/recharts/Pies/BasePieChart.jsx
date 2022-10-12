import "../styles/styles.css";
//
/// DATA
import data from '../_data/BaseData.json';
//import React, { useCallback, useState } from "react";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip, Label } from "recharts";

/* const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 }
];
 */
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#db03fc"];

/* const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index
}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text
            x={x}
            y={y}
            fill="white"
            textAnchor={x > cx ? "start" : "end"}
            dominantBaseline="central"
        >
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
}; */
const BasePieChart = () => {

    return (
        <ResponsiveContainer className="chartStyles" aspect={1}>
            <PieChart>
                <Pie
                    data={data}
                    outerRadius={60}
                    innerRadius={30}
                    //labelLine={false}
                    label
                    //label={renderCustomizedLabel}
                    cx="50%" cy="50%"
                    fill="#8884d8"
                    dataKey="tuotteet"
                    paddingAngle={2}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index]} />
                    ))}
                </Pie>

                <Tooltip />
            </PieChart>
        </ResponsiveContainer>
    );
}


export default BasePieChart