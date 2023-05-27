import { BsDot } from "react-icons/bs";

const ServicePrice = (props: {
  inr: number;
  usd: number;
}) => {
  return (
    <div className="flex flex-row space-x-1 items-center font-light">
      <div className="font-light">USD {props.usd}</div>
      <BsDot />
      <div className="font-light">INR {props.inr}</div>
    </div>
  );
};

export default ServicePrice;
