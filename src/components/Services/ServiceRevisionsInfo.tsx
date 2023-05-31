import { BsDot } from "react-icons/bs";

const ServiceRevisionsInfo = (props: {
  inr?: number, usd: number, children?: React.ReactNode
}) => {
  return (
    <div className="flex flex-row space-x-1 items-center flex-wrap font-light">
      <strong className="font-semibold">2 revisions included</strong>, additional revisions USD {props.usd} + <BsDot /> INR {props.usd * 82} +
      <div>{props.children}</div>
    </div>
  );
};

export default ServiceRevisionsInfo;
