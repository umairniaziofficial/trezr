import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './ExpenseChart.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ExpenseChart = () => {
    const [activeIndex, setActiveIndex] = useState(4);

    const data = {
        labels: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
        datasets: [
            {
                label: 'Expense',
                data: [6500, 14500, 10328, 4000, 12500, 8000],
                backgroundColor: (context) => {
                    const index = context.dataIndex;
                    return index === activeIndex ? '#16DBCC' : '#EDF0F7';
                },
                borderWidth: 0,
                borderRadius: 7,
                borderSkipped: false,
                barPercentage: 0.8,
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
                display: false,
            },
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    display: true,
                },
                border: {
                    display: false,
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: false,
            },
        },
        onClick: (event, elements) => {
            if (elements.length > 0) {
                const clickedIndex = elements[0].index;
                setActiveIndex(clickedIndex);
            }
        },
        hover: {
            onHover: (event, chartElement) => {
                event.native.target.style.cursor = chartElement[0] ? 'pointer' : 'default';
            },
        },
    };

    return (
        <div className="chart-container max-w-[360px] min-w-[310px] w-auto px-10 py-3 bg-white shadow-none rounded-[15px]" style={{ fontFamily: "Inter" }} >
            <div className="expense-info">
                <p className='text-[#343C6A] font-semibold text-lg'>{`$${data.datasets[0].data[activeIndex].toLocaleString()}`}</p>
            </div>
            <Bar data={data} options={options} className='text-[#718EBF]' />
        </div>
    );
};

export default ExpenseChart;
