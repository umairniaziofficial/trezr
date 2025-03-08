const CardSettingComponent = props => {

    return <div className="flex flex-row" style={{ fontFamily: 'Inter' }}>

        <div
            className="h-[45px] w-[45px] rounded-[15px] flex justify-center items-center mr-4 my-1"
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

        <div className="flex flex-col w-auto">

            <span className="">{props.title}</span>

            <span className="text-[#718EBF] text-[13px]">{props.description}</span>

        </div>


    </div>

}


export default CardSettingComponent;