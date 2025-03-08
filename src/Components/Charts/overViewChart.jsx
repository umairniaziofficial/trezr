import React, { useEffect, useRef } from "react";
import { Chart, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const DebitAndCreditOverviewChart = () => {
    const chartRef = useRef(null);

    const data = {
        labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
        datasets: [
            {
                label: "Debit",
                data: [3000, 1000, 2500, 5000, 4000, 1500, 3000],
                backgroundColor: "#1A16F3",
                borderRadius: 7, // Apply rounding to both top and bottom
                barPercentage: 0.7,
                categoryPercentage: 0.8,
            },
            {
                label: "Credit",
                data: [6000, 4000, 2000, 3000, 5000, 2500, 5500],
                backgroundColor: "#FCAA0B",
                borderRadius: 7, // Apply rounding to both top and bottom
                barPercentage: 0.7,
                categoryPercentage: 0.8,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
                position: "right",
                labels: {
                    color: "#718EBF",
                    usePointStyle: true,
                    pointStyle: "circle",
                    padding: 20,
                },
            },
            tooltip: {
                enabled: false,
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                    drawBorder: false,
                },
                border: {
                    display: false,
                },
                ticks: {
                    color: "#718EBF",
                    font: {
                        family: "Inter",
                        size: 12,
                    },
                },
            },
            y: {
                grid: {
                    display: false,
                    drawBorder: false,
                },
                border: {
                    display: false,
                },
                ticks: {
                    display: false,
                },
            },
        },
    };

    useEffect(() => {
        if (chartRef.current) {
            chartRef.current.update();
        }
    }, []);

    return (
        <div className="w-auto h-[270px] bg-white rounded-[15px] md:w-[650px] flex justify-center flex-col items-center py-7 ml-[-15px] sm:[300px]">
            <div className="flex justify-between items-center px-4 pt-3 w-full md:flex-row flex-col">
                <h3 className="text-[#718EBF] font-normal text-sm" style={{ fontFamily: "Inter" }}>
                    <span className="text-[#333B69]">$7,560 </span>Debited & <span className="text-[#333B69]">$5,420</span> Credited in this Week
                </h3>
                <div className="flex items-center">
                    <span className="flex items-center mr-4">
                        <span
                            className="w-[12px] h-[12px] bg-[#4C78FF] rounded-full inline-block mr-2"
                        ></span>{" "}
                        <span className="text-[#718EBF] text-sm">Debit</span>
                    </span>
                    <span className="flex items-center">
                        <span
                            className="w-[12px] h-[12px] bg-[#FF82AC] rounded-full inline-block mr-2"
                        ></span>{" "}
                        <span className="text-[#718EBF] text-sm">Credit</span>
                    </span>
                </div>
            </div>
            <Bar ref={chartRef} data={data} options={options} style={{ padding: '0 10px' }} className="md:w-auto md:min-w-[600px] h-auto max-w-[310px]" />
        </div>
    );
};

export default DebitAndCreditOverviewChart;
