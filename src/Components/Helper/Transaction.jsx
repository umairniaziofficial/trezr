const Transaction = (props) => {
    const bgColor = (props.iconName === 'paypal' ? '#E7EDFF' : (props.iconName === 'dollarCoin') ? '#E0F8F2' : '#FFF5D9');
    const amountColor = (props.amount < 0 ? 'red' : '#41D4A8');
    const formattedAmount = (props.amount < 0 ? `-$${Math.abs(props.amount)}` : `+$${props.amount}`);

    return (
        <div className="flex items-center justify-between mb-4">
            <div style={{ backgroundColor: bgColor }} className="max-w-[45px] max-h-[45px] p-3 flex items-center justify-center rounded-full mr-4 flex-grow">
                <img src={props.icon} alt="icon" className="w-5 h-5" />
            </div>
            <div className="flex-grow">
                <span className="block text-[13px] font-[500] " style={{ fontFamily: 'Inter' }}>{props.title}</span>
                <span className="block text-[11px] " style={{ fontFamily: 'Inter', color: '#718EBF' }}>{props.date}</span>
            </div>
            <div className="text-[15px] ml-6" style={{ color: amountColor, fontFamily: 'Inter' }}>
                {formattedAmount}
            </div>
        </div>
    )
}

export default Transaction;
