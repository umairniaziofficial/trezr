const ServiceCard = (props) => {

    return (
        <div className="card bg-white h-auto py-5 px-3 flex flex-row rounded-[15px] m-3 flex-grow justify-center max-h-[90px] min-w-[220px]">
            <div
                className="w-[50px] h-[50px] rounded-[50%] flex justify-center items-center"
                style={{ backgroundColor: props.bgColor }}
            >
                <img src={props.iconSrc} alt="icon" className="w-[20px] h-[20px]" />
            </div>

            <div className="flex flex-col items-center justify-between py-1 ml-3 h-[40px]">
                <span className="text-[16px] font-semibold text-left w-full">{props.title}</span>
                <span className="font-lighter text-[12px] text-[#718EBF] ">{props.description}</span>
            </div>
        </div>
    );
}

export default ServiceCard;
