const PaginationComponent = () => {

    return <div className="flex justify-between w-full px-[30px] my-3 pr-[10px]" style={{ fontFamily: "Inter" }}>
        <div></div>
        <div className="text-[#1814F3] flex gap-6 text-md">
            <button className=""><i class="fa-solid fa-chevron-left"></i> Previous</button>
            <button className="w-[30px] h-[30px] text-white bg-[#1814F3] rounded-md">1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>Next <i class="fa-solid fa-chevron-right"></i></button>
        </div>
    </div>
}

export default PaginationComponent;