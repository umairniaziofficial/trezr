import Input from "./input";

const AddNewCard = () => {

    return (
        <div className="bg-white px-5 rounded-[15px] flex flex-col text-[#718EBF] text-[12px] w-auto max-w-[600px] min-w-[310px] py-5" style={{ fontFamily: 'Inter' }}>
            <p className="w-full mb-3">Credit Card generally means a plastic card issued by Scheduled Commercial Banks assigned to a Cardholder, with a credit limit, that can be used to purchase goods and services on credit or obtain cash advances.</p>
            <div className="flex md:flex-row flex-col gap-x-5 ">
                <div className="flex flex-col justify-center w-full">
                    <Input placeholder="Classic" heading="Card Type" type="text" />
                    <Input placeholder="**** **** ****" heading="Card Numbers" type="number" />
                </div>

                <div className="flex flex-col justify-center w-full">
                    <Input placeholder="My Cards" heading="Name on Card" type="text" />
                    <Input placeholder="25 January 2025" heading="Expiration Date" type="text" />
                </div>
            </div>
            <button className="bg-[#1814F3] text-white font-[500] text-[16px] rounded-lg border-none hover:cursor-pointer w-full md:w-[150px] py-2">Add Card</button>
        </div>
    )



}


export default AddNewCard;