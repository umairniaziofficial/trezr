import Input from "./input";
import Switch from "./Switch";


const SecurityForm = () => {
    return <div className="flex flex-col bg-white rounded-[15px] gap-x-10 px-10 py-5 items-center md:items-start">

        <div className="flex flex-col w-full gap-x-5 gap-y-2">
            <p>Two Factor Authentication</p>
            <div className="flex flex-row  w-full  my-1 ">
                <span className="mr-2 ml-[-25px] w-auto"> <Switch status="1" /> </span><p className="text-sm ">Enable or disable two factor authentication</p>
            </div>
        </div>

        <div className="flex flex-col mt-10">
            <Input heading="Current Password" placeholder="**********" type="password" />
            <Input heading="New Password" placeholder="**********" type="password" />
        </div>
        <div className="w-full flex flex-row-reverse mb-10 mt-5"><button className="bg-[#1814F3] w-full md:w-[150px] text-white font-semibold px-5 py-2 rounded-lg">Save</button></div>

    </div>

}

export default SecurityForm;