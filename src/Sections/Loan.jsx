import SmallCard from "../Components/Helper/smallCard";
import LoanTableComponent from "../Components/Helper/LoanTable";
import ComponentHeading from '../Components/Helper/ComponentHeading'

import PersonalLoan from '/src/assets/loanSectionIcons/personal-loan.png'
import CooperateLoan from '/src/assets/loanSectionIcons/cooperate-loan.png'
import BusinessLoan from '/src/assets/loanSectionIcons/business-loan.png'
import CustomLoan from '/src/assets/loanSectionIcons/custom-loan.png'

const smallCardsData = [
  {
    title: 'Personal Loan',
    amount: '$50,000',
    iconSrc: PersonalLoan,
    bgColor: '#E7EDFF',
  },
  {
    title: 'Cooperate Loan',
    amount: '$100,000',
    iconSrc: CooperateLoan,
    bgColor: '#FFF5D9',
  },
  {
    title: 'Business Loan',
    amount: '$500,000',
    iconSrc: BusinessLoan,
    bgColor: '#FFE0EB',
  },
  {
    title: 'Custom Loan',
    amount: '$7,920',
    iconSrc: CustomLoan,
    bgColor: '#DCFAF8',
  },
]



const Loan = () => {
  return <div className="bg-[#E5E5E5] min-h-screen overflow-y-auto overflow-x-hidden py-10 min-w-screen flex flex-wrap justify-center gap-4 px-5">


    <div className="flex gap-2 flex-row justify-evenly w-full h-[140px] overflow-x-scroll hide-scrollbar">
      {
        smallCardsData.map((cardData, index) => {
          return <SmallCard title={cardData.title} iconSrc={cardData.iconSrc} value={cardData.amount} bgColor={cardData.bgColor} />
        })
      }
    </div>

    <div className="flex flex-col">
      <ComponentHeading name="Active Loans Overview" />
      <LoanTableComponent />
    </div>

  </div>
};

export default Loan;
