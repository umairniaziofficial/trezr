import React from 'react';

const ServiceListCard = (props) => {
    return (
        <div className="flex flex-row items-center justify-between w-full rounded-[15px] bg-white h-[70px] px-[25px] mb-3"
            style={{ fontFamily: 'Inter' }}
        >
            {/* Icon column */}
            <div
                className="w-[50px] h-[50px] rounded-[20px] flex justify-center items-center mr-5 flex-shrink-0"
                style={{ backgroundColor: props.bgColor }}
            >
                <img src={props.icon} alt="icon" className="w-[20px] h-[20px]" />
            </div>

            {/* Title and Description column */}
            <div className="flex flex-col flex-grow md:min-w-[170px] min-w-[140px] ">
                <span className="text-[13px] text-[#232323] w-full text-left">{props.title}</span>
                <span className="text-[12px] text-[#718EBF] w-full text-left">{props.description}</span>
            </div>

            {/* Detail columns - Hidden on small screens */}
            <div className="hidden md:flex flex-col flex-grow min-w-[160px]">
                <span className="text-[13px] text-[#232323] w-full text-left">{props.detail1}</span>
                <span className="text-[12px] text-[#718EBF] w-full text-left">{props.detail2}</span>
            </div>

            <div className="hidden md:flex flex-col flex-grow min-w-[160px]">
                <span className="text-[13px] text-[#232323] w-full text-left">{props.detail1}</span>
                <span className="text-[12px] text-[#718EBF] w-full text-left">{props.detail2}</span>
            </div>

            <div className="hidden md:flex flex-col flex-grow min-w-[160px]">
                <span className="text-[13px] text-[#232323] w-full text-left">{props.detail1}</span>
                <span className="text-[12px] text-[#718EBF] w-full text-left">{props.detail2}</span>
            </div>

            {/* Button column */}
            <div className="flex-shrink-0">
                <button className="text-[#123288] border border-[#123288] rounded-2xl px-3 py-1 md:text-md text-sm font-[400] hover:text-[#1814F3] hover:border-[#1814F3]">
                    View Details
                </button>
            </div>
        </div>
    );
};

export default ServiceListCard;
