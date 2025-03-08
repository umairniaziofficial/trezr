import { PieChart } from '@mui/x-charts/PieChart';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import { Height } from '@mui/icons-material';

const PiChartComponent = () => {

    const data = {
        labels: ['Entertainment', 'Investment', 'Bill Expense', 'Others'],
        datasets: [
            {
                label: 'Bank Shares',
                data: [30, 20, 15, 35],
                backgroundColor: ['#343C6A', '#FA00FF', '#1814F3', '#FC7900'],
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

        <div className="w-full md:w-64 mx-auto py-6 pb-7 px-5 rounded-lg shadow-lg bg-white ">
            <Doughnut data={data} options={options} />
            {/* <div className="flex flex-col items-center mt-4">
                <div className="flex justify-between w-full mb-2">
                    <div className="flex items-center mr-2">
                        <div className="bg-[#343C6A] w-2.5 h-2.5 rounded-full mr-1.5"></div>
                        <span className="text-sm text-gray-500">Entertaimnemt</span>
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
            </div> */}
        </div>

    );
}

export default PiChartComponent;