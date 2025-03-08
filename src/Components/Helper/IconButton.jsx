const IconButton = (props) => {
    return <button className="bg-gray-100 p-2 rounded-3xl mr-2 hover:cursor-pointer h-[35px] w-[35px] hover:shadow-lg  hidden md:flex lg:flex" ><img className="h-5  " src={props.src} alt="image" /></button>
}

export default IconButton;