const Input = (props) => {
    return <div className="flex flex-col w-full h-[70px]">
        <p className="text-[#232323 w-full text-left]">{props.heading}</p>
        <input type={props.type} placeholder={props.placeholder} value={props.value} className="border-2 border-[#DFEAF2] rounded-lg focus:outline-none bg-transparent text-[#718EBF] px-4 py-1 w-full h-[35px]" />
    </div>
}

export default Input;