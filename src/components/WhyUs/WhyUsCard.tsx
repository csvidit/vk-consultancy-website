const WhyUsCard = (props: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col lg:flex-row p-2.5 lg:p-5 border border-transparent rounded-2xl space-y-2.5 lg:space-y-0 lg:space-x-10 lg:items-center group hover:dark:bg-neutral-500 hover:bg-neutral-900 hover:dark:bg-opacity-30 hover:bg-opacity-30 hover:backdrop-blur-md hover:border-neutral-500 hover:border-opacity-50 duration-200 ease-in-out">
      {props.children}
    </div>
  );
};

export default WhyUsCard;
