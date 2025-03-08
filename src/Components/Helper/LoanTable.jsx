import React from "react";

// Sample loan data array
const loanData = [
    {
        serialNo: 1,
        loanMoney: "$100,000",
        leftToRepay: "$40,500",
        duration: "8 Months",
        interestRate: "12%",
        installment: "$2,000 / month"
    },
    {
        serialNo: 2,
        loanMoney: "$500,000",
        leftToRepay: "$250,000",
        duration: "36 Months",
        interestRate: "10%",
        installment: "$8,000 / month"
    },
    {
        serialNo: 3,
        loanMoney: "$900,000",
        leftToRepay: "$40,500",
        duration: "12 Months",
        interestRate: "12%",
        installment: "$5,000 / month"
    },
    {
        serialNo: 4,
        loanMoney: "$50,000",
        leftToRepay: "$40,500",
        duration: "25 Months",
        interestRate: "5%",
        installment: "$2,000 / month"
    },
    {
        serialNo: 5,
        loanMoney: "$50,000",
        leftToRepay: "$40,500",
        duration: "5 Months",
        interestRate: "16%",
        installment: "$10,000 / month"
    },
    {
        serialNo: 6,
        loanMoney: "$80,000",
        leftToRepay: "$25,500",
        duration: "14 Months",
        interestRate: "8%",
        installment: "$2,000 / month"
    },
    {
        serialNo: 7,
        loanMoney: "$12,000",
        leftToRepay: "$5,500",
        duration: "9 Months",
        interestRate: "13%",
        installment: "$500 / month"
    },
    {
        serialNo: 8,
        loanMoney: "$160,000",
        leftToRepay: "$100,800",
        duration: "3 Months",
        interestRate: "12%",
        installment: "$900 / month"
    }
];

const LoanTableComponent = () => {
    return (
        <div className="overflow-x-auto sm:rounded-lg" style={{ fontFamily: "Inter" }}>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr className="text-[#718EBF]">
                        <th scope="col" className="px-6 py-3 min-w-[100px] hidden sm:table-cell">SL No.</th>
                        <th scope="col" className="px-6 py-3">Loan Money</th>
                        <th scope="col" className="px-6 py-3">Left to repay</th>
                        <th scope="col" className="px-6 py-3 hidden sm:table-cell min-w-[120px]">Duration</th>
                        <th scope="col" className="px-6 py-3 hidden sm:table-cell">Interest Rate</th>
                        <th scope="col" className="px-6 py-3 hidden sm:table-cell">Installment</th>
                        <th scope="col" className="px-6 py-3">Repay</th>
                    </tr>
                </thead>
                <tbody>
                    {loanData.map((loan, index) => (
                        <tr key={index} className="bg-white border-b font-[500] text-[#232323]">
                            <td className="px-6 py-4 hidden sm:table-cell">{loan.serialNo}</td>
                            <td className="px-6 py-4">{loan.loanMoney}</td>
                            <td className="px-6 py-4">{loan.leftToRepay}</td>
                            <td className="px-6 py-4 hidden sm:table-cell">{loan.duration}</td>
                            <td className="px-6 py-4 hidden sm:table-cell">{loan.interestRate}</td>
                            <td className="px-6 py-4 hidden sm:table-cell">{loan.installment}</td>
                            <td className="px-6 py-4">
                                <button className="text-[#123288] border border-[#123288] rounded-2xl px-3 py-1 font-[400]">
                                    Repay
                                </button>
                            </td>
                        </tr>
                    ))}
                    <tr className="bg-white border-b font-[500] text-[#FE5C73]">
                        <td className="px-6 py-4 hidden sm:table-cell">Total</td>
                        <td className="px-6 py-4">$1,250,000</td>
                        <td className="px-6 py-4">$750,000</td>
                        <td className="px-6 py-4 hidden sm:table-cell"></td>
                        <td className="px-6 py-4 hidden sm:table-cell"></td>
                        <td className="px-6 py-4 hidden sm:table-cell">$50,000 /month</td>
                        <td className="px-6 py-4">
                        </td>
                    </tr>
                </tbody>
            </table>
        </div >
    );
};

export default LoanTableComponent;
