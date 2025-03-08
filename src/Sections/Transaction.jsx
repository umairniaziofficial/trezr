import ComponentHeading from '../Components/Helper/ComponentHeading'
import CreditCard from '../Components/Helper/CreditCard'
import ExpenseChart from '../Components/Charts/expenseChart'
import TableComponent from '../Components/Helper/Table'
import PaginationComponent from '../Components/Helper/pagination'

const Transaction = () => {
  return <div className="bg-[#E5E5E5] min-h-screen overflow-y-auto overflow-x-hidden py-10 min-w-screen flex flex-wrap justify-center gap-4 px-5">

    {/* Credit Cards Container */}
    <div className='flex flex-col md:w-[600px] lg:w-[600px] overflow-x-auto'>
      <div className='flex justify-between'>
        <ComponentHeading name="Credit Cards" />
        <ComponentHeading name="+ Add Card" />

      </div>


      <div className="flex overflow-x-auto gap-3 h-[230px] hide-scrollbar">
        <CreditCard type="secondary" />
        <CreditCard />
      </div>
    </div>


    {/* Expense Container */}
    <div>
      <ComponentHeading name="My Expense" />
      <ExpenseChart />
    </div>

    <div className=''>
      <ComponentHeading name="Recent Transactions" />
      <TableComponent />
      <PaginationComponent />
    </div>
  </div>
}

export default Transaction;