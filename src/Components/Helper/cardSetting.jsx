import CardSettingComponent from "./cardSettingComponent";

import CreditCardYellow from "/src/assets/creditCardSectionIcons/credit-card-yellow.png";
import Lock from '/src/assets/creditCardSectionIcons/lock.png';
import Google from '/src/assets/creditCardSectionIcons/google.png';
import Apple from '/src/assets/creditCardSectionIcons/apple.png';


const settingsData = [
    {
        iconSrc: CreditCardYellow,
        bgColor: '#FFF5D9',
        title: 'Block Card',
        description: 'Instantly block your card'
    },
    {
        iconSrc: Lock,
        bgColor: '#E7EDFF',
        title: 'Change Pin Code',
        description: 'Withdraw without any card'
    },
    {
        iconSrc: Google,
        bgColor: '#FFE0EB',
        title: 'Add to Google Pay',
        description: 'Withdraw without any card'
    },
    {
        iconSrc: Apple,
        bgColor: '#DCFAF8',
        title: 'Add to Apple Pay',
        description: 'Instantly block your card'
    },
]

const CardSetting = () => {

    return <div className="flex flex-col gap-y-3 bg-white rounded-[15px] w-auto min-w-[310px] max-w-[400px] p-5">
        {
            settingsData.map((data) => {
                return <CardSettingComponent title={data.title} bgColor={data.bgColor} iconSrc={data.iconSrc} description={data.description} />
            })
        }
    </div>
}

export default CardSetting;