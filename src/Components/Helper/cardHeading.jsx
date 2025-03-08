const CardHeading = (props) => {
    return <p style={{ color: props.color, fontFamily: 'Lato' }} className="text-[13px]">{props.name}</p>
}

export default CardHeading;