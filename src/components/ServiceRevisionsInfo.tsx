import { BsDot } from "react-icons/bs";

const ServiceRevisionsInfo = (props: {
  inr: number, usd: number
}) => {
  return (
    <div className="flex flex-row space-x-1 items-center flex-wrap">
      2 revisions, additional revisions USD {props.usd} <BsDot /> INR {props.inr}
    </div>
  );
};

export default ServiceRevisionsInfo;
