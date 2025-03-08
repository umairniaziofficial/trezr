import React from "react";

import UpIcon from '/src/assets/TransactionSectionIcons/up.png'
import DownIcon from '/src/assets/TransactionSectionIcons/down.png'


const transactionList = [
  {
    description: "Spotify Subscription",
    transactionId: "#12548796",
    category: "Shopping",
    account: "1234 ****",
    date: "28 Jan, 12.30 AM",
    amount: -2500,
  },
  {
    description: "Freepik Sales",
    transactionId: "#12548796",
    category: "Transfer",
    account: "1234 ****",
    date: "25 Jan, 10.40 PM",
    amount: 750,
  },
  {
    description: "Mobile Service",
    transactionId: "#12548796",
    category: "Service",
    account: "1234 ****",
    date: "20 Jan, 10.40 PM",
    amount: -150,
  },
  {
    description: "Wilson",
    transactionId: "#12548796",
    category: "Transfer",
    account: "1234 ****",
    date: "15 Jan, 03.29 PM",
    amount: -1050,
  },
  {
    description: "Emilly",
    transactionId: "#12548796",
    category: "Transfer",
    account: "1234 ****",
    date: "14 Jan, 10.40 PM",
    amount: 840,
  },
];

const TableComponent = () => {
  return (
    <div
      className="overflow-x-auto sm:rounded-lg"
      style={{ fontFamily: "Inter" }}
    >
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr className="text-[#718EBF]">
            <th scope="col" className="px-6 py-3 min-w-[220px]">
              Description
            </th>
            <th scope="col" className="px-6 py-3 hidden sm:table-cell">
              Transaction Id
            </th>
            <th scope="col" className="px-6 py-3 hidden sm:table-cell">
              Type
            </th>
            <th scope="col" className="px-6 py-3 hidden sm:table-cell min-w-[120px]">
              Card
            </th>
            <th scope="col" className="px-6 py-3 hidden sm:table-cell">
              Date
            </th>
            <th scope="col" className="px-6 py-3">
              Amount
            </th>
            <th scope="col" className="px-6 py-3 hidden sm:table-cell">
              Receipt
            </th>
          </tr>
        </thead>
        <tbody>
          {transactionList.map((transaction, index) => (
            <tr
              key={index}
              className="bg-white border-b font-[500] text-[#232323]"
            >
              <td className="px-6 py-4 flex items-center h-[90px]">
                <img
                  height={20}
                  width={20}
                  className="mr-2"
                  src={
                    transaction.amount >= 0
                      ? UpIcon
                      : DownIcon
                  }
                />{" "}
                {transaction.description}
              </td>
              <td className="px-6 py-4 hidden sm:table-cell">{transaction.transactionId}</td>
              <td className="px-6 py-4 hidden sm:table-cell">{transaction.category}</td>
              <td className="px-6 py-4 hidden sm:table-cell">{transaction.account}</td>
              <td className="px-6 py-4 hidden sm:table-cell">{transaction.date}</td>
              <td className="px-6 py-4 text-right">
                {transaction.amount < 0 ? (
                  <span className="text-[#FE5C73]">{transaction.amount}$</span>
                ) : (
                  <span className="text-[#16DBAA]">+{transaction.amount}$</span>
                )}
              </td>
              <td className="px-6 py-4 hidden sm:table-cell">
                <button className="text-[#123288] border border-[#123288] rounded-2xl px-3 py-1 font-[400]">
                  Download
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
