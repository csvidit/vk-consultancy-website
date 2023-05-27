const JumboTitle = (props: {children: string | React.ReactNode}) => {
    return <h1 className="text-6xl lg:text-8xl font-light">{props.children}</h1>
}

export default JumboTitle;