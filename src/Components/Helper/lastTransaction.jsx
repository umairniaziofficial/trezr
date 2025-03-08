const LastTransaction = (props) => {
    return (
        <div
            className="flex flex-row w-auto text-md justify-start items-center my-1 text-[#718EBF]"
            style={{
                fontFamily: "Inter",
            }}
        >
            <div
                className="h-[40px] w-[40px] flex justify-center items-center rounded-2xl hover:cursor-pointer mr-2"
                style={{ backgroundColor: props.bgColor }}
            >
                <img src={props.iconSrc} height={20} width={20} />
            </div>

            <div className="flex flex-col mr-2 min-w-[160px]">
                <span className="text-[#333B69]">{props.title}</span>
                <span>{props.date}</span>
            </div>

            <p className="mr-2 min-w-[80px] text-left hidden sm:block">{props.category}</p>
            <p className="mr-2 min-w-[80px] text-left hidden sm:block">{props.cardNumber}</p>
            <p className="mr-2 min-w-[80px] text-left hidden sm:block">{props.status}</p>

            <p className="min-w-[80px] text-right">
                {props.amount < 0 ? (
                    <span className="text-[#FE5C73]">{props.amount}$</span>
                ) : (
                    <span className="text-[#16DBAA]">+{props.amount}$</span>
                )}
            </p>
        </div>
    );
};

export default LastTransaction;
