const MainContent = (props: { type: string; children: any }) => {
  if ((props.type == "center")) {
    return (
      <div className="mt-10 min-w-screen min-h-screen h-full flex flex-col space-y-5 lg:space-y-10 bg-transparent justify-center p-5 lg:p-10">
        {props.children}
      </div>
    );
  }
  return (
    <div className="mt-10 min-w-screen min-h-screen h-full flex flex-col space-y-5 lg:space-y-10 bg-transparent justify-start p-5 lg:p-10">
      {props.children}
    </div>
  );
};

export default MainContent;
