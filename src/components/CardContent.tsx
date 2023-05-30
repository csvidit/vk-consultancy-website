const CardContent = (props: {children: React.ReactNode}) => {
    return (<div className="flex flex-col space-y-1">{props.children}</div>)
}

export default CardContent;