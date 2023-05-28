import { BsDot } from "react-icons/bs";

const ServiceRevisionsInfo = (props: {
  inr: number, usd: number, children?: React.ReactNode
}) => {
  return (
    <div className="flex flex-row space-x-1 items-center flex-wrap font-light">
      2 revisions, additional revisions USD {props.usd} <BsDot /> INR {props.inr}
      <div>{props.children}</div>
    </div>
  );
};

export default ServiceRevisionsInfo;
