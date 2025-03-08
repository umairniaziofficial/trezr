import CardExpenseChartComponent from "../Components/Charts/cardExpense";
import CreditCard from '../Components/Helper/CreditCard'
import ComponentHeading from '../Components/Helper/ComponentHeading'
import CardListCollection from "../Components/Helper/cardListCollection";
import AddNewCard from "../Components/Helper/addNewCard";
import CardSetting from "../Components/Helper/cardSetting";

const CreditCardSection = () => {
  return (
    <div className="bg-[#E5E5E5] min-h-screen overflow-y-auto overflow-x-hidden py-10 min-w-screen flex flex-wrap justify-center gap-4 px-5">

      {/* Credit Cards Container */}
      <div className='flex flex-col md:w-auto lg:w-auto overflow-x-auto'>
        <div className='flex justify-between'>
          <ComponentHeading name="Credit Cards" />
          <ComponentHeading name="See All" />

        </div>


        <div className="flex overflow-x-auto gap-3 h-[230px] hide-scrollbar">
          <CreditCard type="primary" />
          <CreditCard type="secondary" />
          <CreditCard />
        </div>

      </div>



      <div className="flex flex-col">
        <ComponentHeading name="Credit Expense Statics" />
        <CardExpenseChartComponent />
      </div>

      <div className="flex flex-col">
        <ComponentHeading name="Card List" />
        <CardListCollection />
      </div>

      <div className="flex flex-col">
        <ComponentHeading name="Add New Card" />
        <AddNewCard />
      </div>

      <div className="flex flex-col max-w-[350px] w-full">
        <ComponentHeading name="Card Setting" />
        <CardSetting />
      </div>

    </div>
  )
};

export default CreditCardSection;
