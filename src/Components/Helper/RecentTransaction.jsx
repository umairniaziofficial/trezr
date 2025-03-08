import Transaction from "./Transaction";

import MyIcon from '/src/assets/Icons/my.png'
import Paypal from '/src/assets/Icons/paypal.png'
import DollarCoin from '/src/assets/Icons/dollarCoin.png'

const TransactionsData = [
    {
        icon: MyIcon,
        iconName: 'my',
        title: 'Deposit from my Card',
        date: '28 January 2021',
        amount: -850
    },
    {
        icon: Paypal,
        iconName: 'paypal',
        title: 'Deposit Paypal',
        date: '25 January 2021',
        amount: 2500
    },
    {
        icon: DollarCoin,
        iconName: 'dollarCoin',
        title: 'Jemi Wilson',
        date: '21 January 2021',
        amount: 5400
    }
]

const RecentTransaction = () => {
    return (
        <div className="min-w-[310px] w-auto max-w-[360px] h-[200px] bg-white py-4 px-6 rounded-lg shadow-md">
            {
                TransactionsData.map((transaction, index) => {
                    return (
                        <Transaction
                            key={index}
                            icon={transaction.icon}
                            iconName={transaction.iconName}
                            title={transaction.title}
                            date={transaction.date}
                            amount={transaction.amount}
                        />
                    )
                })
            }
        </div>
    )
}

export default RecentTransaction;
