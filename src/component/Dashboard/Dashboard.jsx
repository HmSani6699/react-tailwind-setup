import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Dashboard = () => {
    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];
    return (
        <div>
            {/* <ResponsiveContainer width="100%" height="100%">
                
            </ResponsiveContainer> */}
            <LineChart
                layout="vertical"
                width={1000}
                height={400}
                data={data}
                margin={{
                    top: 50,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" domain={[0, 'dataMax + 1000']} />
                <YAxis dataKey="name" type="category" />
                <Tooltip />
                <Legend />
                <Line dataKey="pv" stroke="#8884d8" />
                <Line dataKey="uv" stroke="#82ca9d" />
                <Line dataKey="amt" stroke="#8884d8" />
            </LineChart>
        </div>
    );
};

export default Dashboard;