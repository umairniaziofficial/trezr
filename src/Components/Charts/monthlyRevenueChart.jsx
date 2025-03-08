import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const MonthlyRevenueChartComponent = () => {
    const data = {
        labels: ['2016', '2017', '2018', '2019', '2020', '2021'],
        datasets: [
            {
                label: '',
                data: [4999, 13000, 11000, 31000, 22000, 25000],
                borderColor: '#16DBCC',
                backgroundColor: 'rgba(0, 0, 0, 0)',
                borderWidth: 3,
                pointRadius: 0,
                tension: 0.4,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: false,
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    color: '#718EBF',
                    fontFamily: 'Inter',
                },
            },
            y: {
                grid: {
                    borderDash: [4, 4],
                    color: '#E5E9F2',
                },
                ticks: {
                    color: '#718EBF',
                    fontFamily: 'Inter',
                    beginAtZero: false,
                    callback: function (value) {
                        return `$${value.toLocaleString()}`;
                    },
                    stepSize: 10000,
                    maxTicksLimit: 5,
                },
            },
        },
        layout: {
            padding: {
                top: 10,
                right: 10,
                bottom: 10,
                left: 10,
            },
        },
    };

    return (
        <div style={containerStyle}>
            <Line data={data} options={options} />
        </div>
    );
};

const containerStyle = {
    backgroundColor: '#fff',
    padding: '40px 10px 10px 10px',
    borderRadius: '15px',
    width: '100%',
    maxWidth: '540px',
    minWidth: '310px',
    margin: '0 auto ',

};

export default MonthlyRevenueChartComponent;
