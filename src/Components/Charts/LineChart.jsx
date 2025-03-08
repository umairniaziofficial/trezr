import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Legend, Filler } from 'chart.js';
import { useMediaQuery } from 'react-responsive';


ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Legend, Filler);

const LineChartComponent = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const chartWidth = isMobile ? 310 : 600;

    const data = {
        labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
        datasets: [
            {
                label: 'Dataset',
                data: [200, 300, 400, 680, 300, 500, 600],
                borderColor: '#1814F3',
                backgroundColor: (context) => {
                    const chart = context.chart;
                    const { ctx, chartArea } = chart;

                    if (!chartArea) {
                        return null;
                    }

                    const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
                    gradient.addColorStop(0, 'rgba(0, 0, 255, 0.2)');
                    gradient.addColorStop(1, 'rgba(0, 0, 255, 0)');

                    return gradient;
                },
                borderWidth: 2,
                fill: true,
                tension: 0.4,
                pointRadius: 0,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                grid: {
                    display: true,
                },
                ticks: {
                    color: 'gray',
                },
            },
            y: {
                grid: {
                    display: true,
                },
                ticks: {
                    color: '#000',
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
        },
    };

    return (
        <div style={{ height: '230px', width: { chartWidth }, backgroundColor: 'white', borderRadius: '15px', padding: '20px' }}>
            <Line data={data} options={options} />
        </div>
    );
};

export default LineChartComponent;
