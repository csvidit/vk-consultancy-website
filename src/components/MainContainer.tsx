import styles from "./MainContainer.module.css"

const MainContainer = (props: { children: any }) => {
  return (
    <div className={"relative min-w-screen min-h-screen h-full flex flex-col justify-center text-neutral-900 dark:text-neutral-100 selection:bg-neutral-900 selection:text-neutral-100 dark:selection:bg-neutral-100 dark:selection:text-neutral-900 "+styles.main_container+" "+styles.main_background}>{props.children}</div>
  );
};

export default MainContainer;
