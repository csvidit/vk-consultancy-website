const ServiceName = (props: { children: string | React.ReactNode }) => {
  return (
    <div className="text-xl lg:text-2xl">
      <p className="flex">{props.children}</p>
    </div>
  );
};

export default ServiceName;
