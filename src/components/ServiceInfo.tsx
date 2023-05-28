import { BsDot } from "react-icons/bs";

const ServiceInfo = (props: {children: string | React.ReactNode}) => {
    return (<div className="font-light flex flex-col space-y-2.5 flex-wrap">
    {props.children}
  </div>)
}

export default ServiceInfo;