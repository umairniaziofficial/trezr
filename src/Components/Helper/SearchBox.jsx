const SearchBox = (props) => {
    return (
        <div className={`relative flex ${props.customClass || ''}`}>
            <input
                className="appearance-none border-2 pl-10 border-gray-300 hover:border-gray-400 transition-colors rounded-3xl py-3 px-10 leading-tight border-none focus:outline-none bg-gray-100 text-gray-00 h-[40px] w-[350px] mr-2 text-[14px]"
                id="username"
                type="text"
                placeholder="Search for something..."
            />
            <div className="absolute left-0 inset-y-0 flex items-center mt-1">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 ml-3 text-gray-400 hover:text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
            </div>
        </div>
    );
};

export default SearchBox;
