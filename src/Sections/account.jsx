import SmallCard from "../Components/Helper/smallCard";
import ComponentHeading from "../Components/Helper/ComponentHeading";
import CreditCard from '../Components/Helper/CreditCard';
import LastTransactionCollection from "../Components/Helper/lastTransactionCollection";
import InvoiceCollection from "../Components/Helper/invoiceCollection";
import DebitAndCreditOverviewChart from "../Components/Charts/overViewChart";

import Balance from '/src/assets/accountsSectionIcons/balance.png'
import Income from '/src/assets/accountsSectionIcons/income.png'
import Expense from '/src/assets/accountsSectionIcons/expense.png'
import Saving from '/src/assets/accountsSectionIcons/saving.png'

const smallCardsData = [
  {
    title: 'My Balance',
    amount: '$12,750',
    iconSrc: Balance,
    bgColor: '#FFF5D9',
  },
  {
    title: 'Income',
    amount: '$5,600',
    iconSrc: Income,
    bgColor: '#E7EDFF',
  },
  {
    title: 'Expense',
    amount: '$3,460',
    iconSrc: Expense,
    bgColor: '#FFE0EB',
  },
  {
    title: 'Total Saving',
    amount: '$7,920',
    iconSrc: Saving,
    bgColor: '#DCFAF8',
  },
]

const Account = () => {
  return (
    <div className="bg-[#E5E5E5] min-h-screen overflow-y-auto overflow-x-hidden py-10 min-w-screen justify-center flex flex-wrap gap-4 px-5">


      <div className="flex gap-0 flex-row justify-evenly w-full flex-wrap ">
        {
          smallCardsData.map((cardData, index) => {
            return <SmallCard title={cardData.title} iconSrc={cardData.iconSrc} value={cardData.amount} bgColor={cardData.bgColor} />
          })
        }
      </div>


      <div className="flex flex-col">
        <ComponentHeading name="Last Transactions" />
        <LastTransactionCollection />
      </div>

      <div className="flex flex-col">
        <div className="flex justify-between">
          <ComponentHeading name="Credit Card" />
          <ComponentHeading name="See all" />
        </div>
        <CreditCard type="secondary" />
      </div>

      <div className="flex flex-col">
        <ComponentHeading name="Debit and Credit Overview" />
        <DebitAndCreditOverviewChart />
      </div>

      <div className="flex flex-col  w-auto">
        <ComponentHeading name="Invoices Sent" />
        <InvoiceCollection />
      </div>

    </div>
  );
};

export default Account;
