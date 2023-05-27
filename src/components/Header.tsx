import { motion } from "framer-motion";
import Link from "next/link";

const Header = () => {
  const variants1 = {
    hover: {},
  };

  const variants2 = {
    hover: {
      width: "100%",
      height: "100%",
      transition: {
        type: "tween",
        ease: "easeInOut",
      },
    },
  };
  return (
    <div className="flex flex-row space-x-2 w-screen h-max text-lg lg:text-2xl uppercase fixed pl-5 pr-5 lg:pl-10 top-0 pt-5 lg:pt-10 backdrop-blur-md bg-neutral-200 dark:bg-neutral-900 dark:bg-opacity-30 bg-opacity-30">
      <div
        className="flex flex-col space-y-1 group"
      >
        <Link href="https://viditkhandelwal.com" className="flex flex-row space-x-1 group transition-all">
          <div className="flex flex-row text-neutral-900 dark:text-neutral-100 font-light z-10">
            VIDIT KHANDELWAL
          </div>
          {/* <div className="flex flex-row text-neutral-900 dark:text-neutral-100 font-light z-10">
            <p>V</p>
            <p className="opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 group-hover:flex group-hover:transition-all group-hover:ease-in-out group-hover:duration-300 group-hover:delay-25">I</p>
            <p className="opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 group-hover:flex group-hover:transition-all group-hover:ease-in-out group-hover:duration-300 group-hover:delay-50">D</p>
            <p className="opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 group-hover:flex group-hover:transition-all group-hover:ease-in-out group-hover:duration-300 group-hover:delay-75">I</p>
            <p className="opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 group-hover:flex group-hover:transition-all group-hover:ease-in-out group-hover:duration-300 group-hover:delay-100">T</p>
          </div>
          <div className="flex flex-row text-neutral-900 dark:text-neutral-100 font-light z-10">
            <p>K</p>
            <p className="opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 group-hover:flex group-hover:transition-all group-hover:ease-in-out group-hover:duration-300 group-hover:delay-25">H</p>
            <p className="opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 group-hover:flex group-hover:transition-all group-hover:ease-in-out group-hover:duration-300 group-hover:delay-25">A</p>
            <p className="opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 group-hover:flex group-hover:transition-all group-hover:ease-in-out group-hover:duration-300 group-hover:delay-75">N</p>
            <p className="opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 group-hover:flex group-hover:transition-all group-hover:ease-in-out group-hover:duration-300 group-hover:delay-75">D</p>
            <p className="opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 group-hover:flex group-hover:transition-all group-hover:ease-in-out group-hover:duration-300 group-hover:delay-100">E</p>
            <p className="opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 group-hover:flex group-hover:transition-all group-hover:ease-in-out group-hover:duration-300 group-hover:delay-100">L</p>
            <p className="opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 group-hover:flex group-hover:transition-all group-hover:ease-in-out group-hover:duration-300 group-hover:delay-200">W</p>
            <p className="opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 group-hover:flex group-hover:transition-all group-hover:ease-in-out group-hover:duration-300 group-hover:delay-200">A</p>
            <p className="opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 group-hover:flex group-hover:transition-all group-hover:ease-in-out group-hover:duration-300 group-hover:delay-300">L</p>
          </div> */}
        </Link>

        <div
          className="border-t border-t-neutral-900 dark:border-t-neutral-100 w-0 z-0 h-1/2 group-hover:w-full group-hover:transition-all duration-200 ease-in-out bg-neutral-900 dark:bg-neutral-100"
        ></div>
      </div>
      <h1 className="text-neutral-900 dark:text-neutral-100 font-medium">
        STUDIO
      </h1>
    </div>
  );
};

export default Header;