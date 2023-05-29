const WhyUsCard = (props: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col lg:flex-row space-y-2.5 lg:space-y-0 lg:space-x-10 lg:items-center group">
      {props.children}
    </div>
  );
};

export default WhyUsCard;
