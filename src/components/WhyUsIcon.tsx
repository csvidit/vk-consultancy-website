const WhyUsIcon = (props: {children: React.ReactNode}) => {
  return (
    <div className="p-2.5 lg:p-5 w-fit h-fit rounded-full border border-violet-600 text-lg lg:text-2xl group-hover:bg-violet-600 group-hover:text-neutral-100 transition-all duration-200 ease-in-out">
      {props.children}
    </div>
  );
};

export default WhyUsIcon;
