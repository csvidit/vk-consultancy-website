import { BsDot } from "react-icons/bs";

const ServiceCard = (props: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col space-y-2.5 lg:w-[500px] rounded-2xl">
     {props.children}
    </div>
  );
};

export default ServiceCard;

//lg:w-[500px] min-h-[500px] lg:min-h-[250px]