const WhyUsCards = (props: {children: React.ReactNode}) => {
    return (<div className="flex flex-col h-screen overflow-scroll">
        {props.children}
    </div>)
}

export default WhyUsCards;