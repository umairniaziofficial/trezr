import Input from "./input";
import Switch from "./Switch";


const PreferenceForm = () => {
    return <div className="flex flex-col bg-white rounded-[15px] px-10 py-5 items-center md:items-start">

        <div className="flex md:flex-row flex-col w-full gap-x-5 gap-y-2 mb-[20pz]">
            <Input heading="Currency" placeholder="PKR" type="text" />
            <Input heading="Time Zone" placeholder="(GMT - 12:00)" type="text" />
        </div>

        <div className="flex flex-col mt-5">
            <div>
                <div className="flex flex-row  w-full  my-1 ">
                    <span className="mr-2  ml-[-25px] w-auto"> <Switch status="1" /> </span><p className="text-sm ">I send or recieve digital currency</p>
                </div>
                <div className="flex flex-row  w-full  my-1">
                    <span className="mr-2  ml-[-25px] w-auto"> <Switch status="1" /> </span> <p className="text-sm ">I recieve merchant ordery</p>
                </div>
                <div className="flex flex-row w-full my-1">
                    <span className="mr-2  ml-[-25px] w-auto"> <Switch status="1" /> </span><p className="text-sm">There are recommendation for my accounts</p>
                </div>

            </div>

        </div>
        <div className="w-full flex flex-row-reverse mb-10 mt-5"><button className="bg-[#1814F3] w-full md:w-[150px] text-white font-semibold px-5 py-2 rounded-lg">Save</button></div>

    </div>
}


export default PreferenceForm;