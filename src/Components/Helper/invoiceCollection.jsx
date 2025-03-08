import InvoiceItem from "./invoice";

import Apple from '/src/assets/accountsSectionIcons/apple.png'
import UserYellow from '/src/assets/accountsSectionIcons/user-yellow.png'
import UserPink from '/src/assets/accountsSectionIcons/user-pink.png'
import PlayStation from '/src/assets/accountsSectionIcons/playstation.png'

const data = [
    {
        iconSrc: Apple,
        title: 'Apple Store',
        time: '5h ago',
        bgColor: '#DCFAF8',
        price: '450'
    },
    {
        iconSrc: UserYellow,
        title: 'Michael',
        time: '2 days ago',
        bgColor: '#FFF5D9',
        price: '160'
    },
    {
        iconSrc: PlayStation,
        title: 'Play Station',
        time: '5 days ago',
        bgColor: '#E7EDFF',
        price: '1450'
    },
    {
        iconSrc: UserPink,
        title: 'William',
        time: '10 days ago',
        bgColor: '#FFE0EB',
        price: '90'
    }
]

const InvoiceCollection = () => {
    return <div className="flex flex-col py-3 md:px-4 h-[270px] md:mx-4 w-[310px] px-10 md:w-[270px] bg-white rounded-[15px] justify-evenly ">
        {
            data.map((inv, index) => {
                return <InvoiceItem
                    iconSrc={inv.iconSrc}
                    bgColor={inv.bgColor}
                    price={inv.price}
                    time={inv.time}
                    title={inv.title}
                />
            })
        }
    </div>
}


export default InvoiceCollection;
