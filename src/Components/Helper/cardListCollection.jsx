import CardListComponent from "./cardListComponent";
import CreditCardBlue from "/src/assets/creditCardSectionIcons/credit-card-blue.png";
import CreditCardPink from "/src/assets/creditCardSectionIcons/credit-card-pink.png";
import CreditCardYellow from "/src/assets/creditCardSectionIcons/credit-card-yellow.png";

const cardData = [
    {
        iconSrc: CreditCardBlue,
        bgColor: '#E7EDFF',
        cardType: 'Secondary',
        bank: 'DSL Bank',
        cardNumber: '**** **** 5600',
        nameCard: 'William'
    },
    {
        iconSrc: CreditCardPink,
        bgColor: '#FFE0EB',
        cardType: 'Primary',
        bank: 'BRC Bank',
        cardNumber: '**** **** 4300',
        nameCard: 'Michel'
    },
    {
        iconSrc: CreditCardYellow,
        bgColor: '#FFF5D9',
        cardType: 'Secondary',
        bank: 'ABM Bank',
        cardNumber: '**** **** 7560',
        nameCard: 'Edward'
    },
    {
        iconSrc: CreditCardPink,
        bgColor: '#FFE0EB',
        cardType: 'Primary',
        bank: 'BRC Bank',
        cardNumber: '**** **** 4300',
        nameCard: 'Michel'
    },
]

const CardListCollection = () => {

    console.log('inside card list collection component');


    return <div className="flex flex-col gap-y-2">
        {
            cardData.map((card) => {
                return <CardListComponent iconSrc={card.iconSrc} bgColor={card.bgColor} cardType={card.cardType} cardNumber={card.cardNumber} bank={card.bank} nameCard={card.nameCard} />
            })
        }
    </div>
}


export default CardListCollection;