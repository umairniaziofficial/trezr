
const CardListComponent = (props) => {

    return (
        <div style={{ fontFamily: 'Inter' }} className="flex flex-row text-[#232323] text-[14px] justify-center items-center gap-x-3 rounded-2xl bg-white px-4  h-[70px]">

            <div
                className="h-[45px] w-[45px] rounded-[15px] flex justify-center items-center"
                style={{ backgroundColor: props.bgColor }
                }
            >

                <img
                    src={props.iconSrc}
                    alt="icon"
                    height={22}
                    width={22}
                />
            </div >


            <div className="flex flex-col w-[100px]">

                <span className="">Card Type</span>

                <span className="text-[#718EBF] text-[13px]">{props.cardType}</span>

            </div>

            <div className="flex flex-col w-[100px]">

                <span className="">Bank </span>

                <span className="text-[#718EBF] text-[13px]">{props.bank}</span>

            </div>

            <div className="md:flex flex-col w-[150px] hidden ">

                <span className="">Card Number</span>

                <span className="text-[#718EBF] text-[11px]">{props.cardNumber}</span>

            </div>

            <div className="md:flex flex-col w-[140px] hidden">

                <span className="">Name Card</span>

                <span className="text-[#718EBF] text-[11px]">{props.nameCard}</span>

            </div>


            <div>
                <p className="text-[#1814F3] text-sm hover:cursor-pointer">View Details</p>
            </div>
        </div >
    )

}


export default CardListComponent;