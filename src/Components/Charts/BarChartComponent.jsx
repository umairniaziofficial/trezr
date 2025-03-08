import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useMediaQuery } from 'react-responsive';

const data = [
    { name: 'Sat', Deposit: 200, Withdraw: 500 },
    { name: 'Sun', Deposit: 100, Withdraw: 400 },
    { name: 'Mon', Deposit: 300, Withdraw: 300 },
    { name: 'Tue', Deposit: 400, Withdraw: 500 },
    { name: 'Wed', Deposit: 200, Withdraw: 100 },
    { name: 'Thu', Deposit: 300, Withdraw: 400 },
    { name: 'Fri', Deposit: 300, Withdraw: 300 },
];

const BarChartComponent = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const chartWidth = isMobile ? 350 : 600;

    return (
        <div className="bg-white rounded-[15px]">
            <BarChart
                width={chartWidth}
                height={270}
                data={data}
                margin={{
                    top: 30, right: 20, left: -10, bottom: 10,
                }}
                barSize={15}
            >
                <CartesianGrid strokeDasharray="1 1 " />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Deposit" fill="#1814F3" radius={[10, 10, 0, 0]} />
                <Bar dataKey="Withdraw" fill="#16DBCC" radius={[10, 10, 0, 0]} />
            </BarChart>
        </div>
    );
}

export default BarChartComponent;
