const SmallCard = (props) => {

    return (
        <div className="card bg-white h-auto py-5  flex flex-row rounded-[15px] m-3 flex-grow justify-center max-h-[90px] w-auto min-w-[150px]">
            <div
                className="w-[50px] h-[50px] rounded-[50%] flex justify-center items-center"
                style={{ backgroundColor: props.bgColor }}
            >
                <img src={props.iconSrc} alt="icon" className="w-[20px] h-[20px]" />
            </div>

            <div className="flex flex-col items-center justify-between py-1 ml-3 h-[40px] w-[60px]">
                <span className="text-[12px] w-[70px]">{props.title}</span>
                <span className="font-semibold text-[16px]">{props.value}</span>
            </div>
        </div>
    );
}

export default SmallCard;
