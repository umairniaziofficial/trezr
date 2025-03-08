const CardContent = (props) => {
    return <p style={{ color: props.color, fontFamily: 'Lato' }} className="text-[16px]">{props.name}</p>
}


export default CardContent;