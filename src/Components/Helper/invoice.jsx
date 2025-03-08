const InvoiceItem = props => {
    return <div style={{ fontFamily: 'Inter' }} className="text-[#718EBF] flex flex-row items-center" >

        <div
            className="h-[40px] w-[40px] rounded-[7px] flex justify-center items-center"
            style={{ backgroundColor: props.bgColor }}
        >

            <img
                src={props.iconSrc}
                alt="icon"
                height={18}
                width={18}
            />
        </div>

        <div className="flex flex-col gap-0 justify-around w-[100px] mx-2">
            <span className="text-[#333B69] text-[13px] font-semibold">{props.title}</span>
            <span className=" text-[12px]">{props.time}</span>
        </div>

        <div className="w-[50px]">
            <p className="text-[13px] text-right">${props.price}</p>
        </div>

    </div >
}



export default InvoiceItem;