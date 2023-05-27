import styles from "./MainContainer.module.css"

const MainContainer = (props: { children: any }) => {
  return (
    <div className={"min-w-screen min-h-screen h-full flex flex-col space-y-6 justify-center text-neutral-900 dark:text-neutral-100 "+styles.main_container+" "+styles.main_background}>{props.children}</div>
  );
};

export default MainContainer;
