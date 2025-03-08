import LastTransaction from "./lastTransaction"

import Subscripton from "/src/assets/accountsSectionIcons/subscription.png"
import Service from "/src/assets/accountsSectionIcons/service.png"
import UserPink from "/src/assets/accountsSectionIcons/user-pink.png"

const data = [
    {
        iconSrc: Subscripton,
        bgColor: '#DCFAF8',
        title: 'Spotify Subscription',
        date: '5 May 2024',
        category: 'Shopping',
        cardNumber: '1234 ****',
        status: 'Pending',
        amount: -150
    },
    {
        iconSrc: Service,
        bgColor: '#E7EDFF',
        title: 'Mobile Service',
        date: '5 May 2024',
        category: 'Service',
        cardNumber: '1234 ****',
        status: 'Completed',
        amount: -340
    },
    {
        iconSrc: UserPink,
        bgColor: '#FFE0EB',
        title: 'Emily Wilson',
        date: '5 May 2024',
        category: 'Transfer',
        cardNumber: '1234 ****',
        status: 'Completed',
        amount: 780
    },
]


const LastTransactionCollection = () => {
    return <div className="flex flex-col bg-white rounded-[15px] py-4 px-9 w-full ">
        {
            data.map((dataObj, index) => {
                return <LastTransaction
                    title={dataObj.title}
                    iconSrc={dataObj.iconSrc}
                    bgColor={dataObj.bgColor}
                    date={dataObj.date}
                    category={dataObj.category}
                    status={dataObj.status}
                    cardNumber={dataObj.cardNumber}
                    amount={dataObj.amount}
                />
            })
        }
    </div>

}





export default LastTransactionCollection;