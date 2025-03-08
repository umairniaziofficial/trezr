import CardContent from "./cardContent";
import CardHeading from "./cardHeading";

import PrimaryBackground from '/src/assets/Images/credit-card-primary.png'
import SecondaryBackground from '/src/assets/Images/credit-card-secondary.png'
import WhiteBackground from '/src/assets/Images/credit-card-white.png'

import CircleColorCard from '/src/assets/Images/circle-color-card.png'
import CircleWhiteCard from '/src/assets/Images/circle-white-card.png'

import ColoredChip from '/src/assets/Icons/chip-colored.png'
import Chip from '/src/assets/Icons/chip.png'

const CreditCard = (props) => {
    const backgroundImageUrl = props.type === 'primary'
        ? PrimaryBackground
        : props.type === 'secondary'
            ? SecondaryBackground
            : WhiteBackground;

    const CircleColor = props.type === 'primary'
        ? CircleColorCard
        : props.type === 'secondary'
            ? CircleColorCard
            : CircleWhiteCard

    const ChipColor = props.type === 'primary'
        ? ColoredChip
        : props.type === 'secondary'
            ? ColoredChip
            : Chip

    const textColor = (props.type === 'primary' || props.type === 'secondary')
        ? '#fff'
        : '#343C6A';

    const headingColor = (props.type === 'primary' || props.type === 'secondary')
        ? '#fff'
        : '#718EBF';



    return (
        <div
            style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', fontFamily: 'Lato', color: { textColor } }}
            className="card w-[320px] h-[200px] min-w-[270px] rounded-[15px] pt-5 px-5 "
        >
            <div className="flex justify-between   mb-3">
                <span className="flex flex-col">
                    <CardHeading name="Balanace" color={headingColor} />
                    <CardContent name="$50,432" color={textColor} />
                </span>
                <img src={ChipColor} alt="chip picture" className="h-8 mt-2 mr-3" />
            </div>
            <div className="flex justify-between mb-4">
                <span>
                    <CardHeading name="CARD HOLDER" color={headingColor} />
                    <CardContent name="M. Umair" color={textColor} />
                </span>
                <span>
                    <CardHeading name="VALID THRU" color={headingColor} />
                    <CardContent name="12/22" color={textColor} />
                </span>
            </div>
            <hr className="mb-4 mt-2" />
            <div className="flex justify-between">
                <CardContent name="1234 **** **** 6789" color={textColor} />
                <img src={CircleColor} className="h-6 mt-1" alt="circle image" />
            </div>
        </div>
    );
}

export default CreditCard;
