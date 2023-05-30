const CardText = (props: {children: React.ReactNode}) =>
{
    return (<div className="font-light text-base lg:text-lg lg:w-3/4 flex-wrap">{props.children}</div>)
}

export default CardText;