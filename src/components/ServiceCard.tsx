import { BsDot } from "react-icons/bs";

const ServiceCard = (props: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col space-y-2.5 lg:w-[500px] h-[250px]">
     {props.children}
    </div>
  );
};

export default ServiceCard;
