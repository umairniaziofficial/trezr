
const InvestmentCard = (props) => {

    return <div className="text-[#232323] text-[12px] w-full h-[60px] rounded-[10px] bg-white flex flex-row items-center px-4 gap-x-2 font-[500]">

        <div
            className="h-[40px] w-[40px] flex justify-center items-center rounded-xl hover:cursor-pointer mr-2"
            style={{ backgroundColor: props.bgColor }}
        >
            <img src={props.iconSrc} height={20} width={20} />
        </div>


        <div className="w-[147px] flex flex-col">

            <span>{props.company}</span>

            <span className="text-[#718EBF] text-[11px]">{props.description}</span>

        </div>


        <div className="hidden md:flex md:flex-col w-[100px]">

            <span>{props.amount}</span>

            <span className="text-[#718EBF] text-[11px]">{props.amountDescription}</span>

        </div>


        <div className="flex flex-col w-[100px]">

            <span> {props.returnValue < 0 ? (
                <span className="text-[#FE5C73]">{props.returnValue}%</span>
            ) : (
                <span className="text-[#16DBAA]">+{props.returnValue}%</span>
            )}</span>

            <span className="text-[#718EBF] text-[11px]">Return Value</span>

        </div>


    </div>

}


export default InvestmentCard;