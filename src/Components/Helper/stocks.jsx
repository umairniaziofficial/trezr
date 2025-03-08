import React from "react";

const stocksList = [
    {
        slNo: 1,
        Name: 'Trivago',
        Price: '$520',
        Return: 5,
    },
    {
        slNo: 2,
        Name: 'Canon',
        Price: '$480',
        Return: 10,
    },
    {
        slNo: 3,
        Name: 'Uber Food',
        Price: '$350',
        Return: -3,
    },
    {
        slNo: 4,
        Name: 'Nokia',
        Price: '$940',
        Return: 2,
    },
    {
        slNo: 5,
        Name: 'Tiktok',
        Price: '$670',
        Return: -12,
    },
];


const StocksComponent = () => {
    return (
        <div
            className="overflow-x-auto sm:rounded-lg "
            style={{ fontFamily: "Inter" }}
        >
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 py-2">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr className="text-[#718EBF]">
                        <th scope="col" className="px-6 py-2 min-w-[10px]">
                            SL No.
                        </th>
                        <th scope="col" className="px-6 py-2">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-2 ">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-2 min-w-[100px]">
                            Return
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {stocksList.map((stock, index) => (
                        <tr
                            key={index}
                            className="bg-white border-b font-[500] text-[#232323] "
                        >
                            <td className="px-6 py-2">{stock.slNo}</td>
                            <td className="px-6 py-2">{stock.Name}</td>
                            <td className="px-6 py-2">{stock.Price}</td>
                            <td className="px-6 py-2 text-right ">
                                {stock.Return < 0 ? (
                                    <span className="text-[#FE5C73]">{stock.Return}%</span>
                                ) : (
                                    <span className="text-[#16DBAA]">+{stock.Return}%</span>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StocksComponent;
