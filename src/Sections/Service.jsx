import ServiceCard from "../Components/Helper/serviceCard";
import ComponentHeading from "../Components/Helper/ComponentHeading";
import ServiceListCard from "../Components/Helper/serviceListCard";
import '../App.css'

import LifeInsurance from '/src/assets/serviceSectionIcons/life-insurance.png'
import Shopping from '/src/assets/serviceSectionIcons/shopping.png'
import Safety from '/src/assets/serviceSectionIcons/safety.png'
import Loan from '/src/assets/serviceSectionIcons/loan.png'
import Bag from '/src/assets/serviceSectionIcons/bag.png'
import User from '/src/assets/serviceSectionIcons/user.png'
import SafetyIcon from '/src/assets/serviceSectionIcons/safety.png'
import Growth from '/src/assets/serviceSectionIcons/growth.png'

const servicesData = [
  {
    title: 'Life Insurance',
    description: 'Unlimited Protection',
    iconSrc: LifeInsurance,
    bgColor: '#E7EDFF',
  },
  {
    title: 'Shopping',
    description: 'Buy. Think. Grow',
    iconSrc: Shopping,
    bgColor: '#FFF5D9',
  },
  {
    title: 'Safety',
    description: 'We are your allies',
    iconSrc: Safety,
    bgColor: '#DCFAF8',
  },
]


const backServiceListData = [
  {
    title: "Business loans",
    description: "It is a long established",
    detail1: "Lorem Ipsum",
    detail2: "Many publishing",
    icon: Loan,
    bgColor: "#FFE0EB"
  },
  {
    title: "Checking accounts",
    description: "It is a long established",
    detail1: "Lorem Ipsum",
    detail2: "Many publishing",
    icon: Bag,
    bgColor: "#FFF5D9"
  },
  {
    title: "Savings accounts",
    description: "It is a long established",
    detail1: "Lorem Ipsum",
    detail2: "Many publishing",
    icon: Growth,
    bgColor: "#FFE0EB"
  },
  {
    title: "Debit and credit cards",
    description: "It is a long established",
    detail1: "Lorem Ipsum",
    detail2: "Many publishing",
    icon: User,
    bgColor: "#E7EDFF"
  },
  {
    title: "Life Insurance",
    description: "It is a long established",
    detail1: "Lorem Ipsum",
    detail2: "Many publishing",
    icon: SafetyIcon,
    bgColor: "#DCFAF8"
  },
  {
    title: "Business loans",
    description: "It is a long established",
    detail1: "Lorem Ipsum",
    detail2: "Many publishing",
    icon: Loan,
    bgColor: "#FFE0EB"
  }
];



const Service = () => {
  return <div className="bg-[#E5E5E5] min-h-screen overflow-y-auto overflow-x-hidden py-10 min-w-screen flex flex-wrap px-5">

    <div className="flex gap-2 flex-row justify-evenly w-full h-[140px] overflow-x-scroll hide-scrollbar">
      {
        servicesData.map((serviceData) => {
          return <ServiceCard title={serviceData.title} iconSrc={serviceData.iconSrc} description={serviceData.description} bgColor={serviceData.bgColor} />
        })
      }
    </div>

    <div className="flex flex-col w-full p-0">
      <ComponentHeading name="Bank Service List" />
      <div>
        {
          backServiceListData.map((data) => {
            return <ServiceListCard icon={data.icon} bgColor={data.bgColor} title={data.title} description={data.description} detail1={data.detail1} detail2={data.detail2} />
          })
        }
      </div>
    </div>



  </div>
};

export default Service;
