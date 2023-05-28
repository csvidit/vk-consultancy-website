import { BsDot } from "react-icons/bs";

const ServicePrice = (props: {
  inr: number;
  usd: number;
  children?: React.ReactNode
}) => {
  return (
    <div className="flex flex-row space-x-1 items-center font-light flex-wrap">
      <div className="font-light">USD {props.usd}</div>
      <BsDot />
      <div className="font-light">INR {props.inr}</div>
      <div>{props.children}</div>
    </div>
  );
};

export default ServicePrice;
