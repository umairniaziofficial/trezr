import InvestmentCard from './investmentComponent';

import Apple from '/src/assets/InvestmentSectionIncons/apple.png';
import Google from '/src/assets/InvestmentSectionIncons/google.png';
import Tesla from '/src/assets/InvestmentSectionIncons/tesla.png';

const investmentData = [
    {
        iconSrc: Apple,
        bgColor: '#FFE0EB',
        company: 'Apple',
        description: 'E-commerce, Marketplace',
        amount: '$54,000',
        amountDescription: 'Envestment Value',
        returnValue: 16,
    },
    {
        iconSrc: Google,
        bgColor: '#E7EDFF',
        company: 'Samsung Mobile',
        description: 'E-commerce, Marketplace',
        amount: '$24,123',
        amountDescription: 'Envestment Value',
        returnValue: -4,

    },
    {
        iconSrc: Tesla,
        bgColor: '#FFF5D9',
        company: 'Tesla Motor',
        description: 'Electric Vehicle',
        amount: '$11,533',
        amountDescription: 'Envestment Value',
        returnValue: 25,

    },

]

const InvestmentCollection = () => {

    return <div>
        <div className='flex flex-col gap-y-4  min-w-[310px] max-w-[540px] w-[auto]'>
            {
                investmentData.map((investment, index) => {
                    return <InvestmentCard company={investment.company} iconSrc={investment.iconSrc} bgColor={investment.bgColor} description={investment.description} amount={investment.amount} amountDescription={investment.amountDescription} returnValue={investment.returnValue} />
                })
            }
        </div>
    </div>

}

export default InvestmentCollection;