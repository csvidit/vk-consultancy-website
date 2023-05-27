const JumboSubtitle = (props: {children: string | React.ReactNode}) => {
    return <h2 className="text-4xl lg:text-8xl">{props.children}</h2>
}

export default JumboSubtitle;