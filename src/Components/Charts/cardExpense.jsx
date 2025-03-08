import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import { Height } from '@mui/icons-material';

const CardExpenseChartComponent = () => {
    const data = {
        labels: ['DBL Bank', 'BRC Bank', 'ABM Bank', 'MCP Bank'],
        datasets: [
            {
                label: 'Bank Shares',
                data: [15, 42, 32, 22],
                backgroundColor: ['#4A90E2', '#FF6F91', '#00D084', '#F8B84C'],
                hoverOffset: 4,
            },
        ],
    };

    const options = {
        cutout: '53%',
        plugins: {
            legend: {
                display: false,
            },
        },
    };

    return (

        <div className="w-full md:w-64 mx-auto py-3 px-5 rounded-lg shadow-lg bg-white ">
            <Doughnut data={data} options={options} />
            <div className="flex flex-col items-center mt-4">
                <div className="flex justify-between w-full mb-2">
                    <div className="flex items-center mr-2">
                        <div className="bg-blue-500 w-2.5 h-2.5 rounded-full mr-1.5"></div>
                        <span className="text-sm text-gray-500">DBL Bank</span>
                    </div>
                    <div className="flex items-center mr-2">
                        <div className="bg-pink-500 w-2.5 h-2.5 rounded-full mr-1.5"></div>
                        <span className="text-sm text-gray-500">BRC Bank</span>
                    </div>
                </div>
                <div className="flex justify-between w-full">
                    <div className="flex items-center mr-2">
                        <div className="bg-green-500 w-2.5 h-2.5 rounded-full mr-1.5"></div>
                        <span className="text-sm text-gray-500">ABM Bank</span>
                    </div>
                    <div className="flex items-center mr-2">
                        <div className="bg-yellow-500 w-2.5 h-2.5 rounded-full mr-1.5"></div>
                        <span className="text-sm text-gray-500">MCP Bank</span>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CardExpenseChartComponent;
