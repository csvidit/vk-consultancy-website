"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Nav from "./Nav";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import Nav2 from "./Nav2";

const Header = (props: { current: string | undefined; setIsOpen: any }) => {
  if (props.current) {
    return (
      <div className="flex flex-row space-x-2 w-screen text-lg lg:text-2xl uppercase fixed top-0 px-5 py-2.5 lg:px-10 lg:py-5 backdrop-blur-md bg-neutral-200 dark:bg-neutral-900 dark:bg-opacity-30 bg-opacity-30 z-40">
        <button
          onClick={() => {
            props.setIsOpen(true);
          }}
          className="absolute right-5 lg:right-10 self-center"
        >
          <HiOutlineMenuAlt4 />
        </button>
        <div className="flex flex-row space-x-1 text-sm lg:text-2xl items-start">
          <div className="flex flex-col space-y-1 group">
            <Link
              href="/"
              className="flex flex-row space-x-1 group transition-all"
            >
              <div className="flex flex-row space-x-1 text-neutral-900 dark:text-neutral-100 font-extralight">
                <div className="flex">VIDIT KHANDELWAL</div>
                <div className="font-normal">STUDIO</div>
              </div>
            </Link>
            <div className="border-t border-t-neutral-900 dark:border-t-neutral-100 w-0 z-0 h-0 group-hover:w-full group-hover:transition-all duration-200 ease-in-out bg-neutral-900 dark:bg-neutral-100"></div>
          </div>
          <p className="hidden lg:flex">/</p>
          <div className="uppercase font-semibold">{props.current}</div>
        </div>
      </div>
    );
    // return (
    //   <div className="flex flex-col lg:flex-row lg:space-x-2.5 w-screen h-max text-lg lg:text-2xl uppercase fixed pl-5 pr-5 lg:pl-10 top-0 pt-5 lg:pt-10 backdrop-blur-md bg-neutral-200 dark:bg-neutral-900 dark:bg-opacity-30 bg-opacity-30">
    //     <button
    //       onClick={() => {
    //         props.setIsOpen(true);
    //       }}
    //       className="absolute right-5 lg:right-10 self-center"
    //     >
    //       <HiOutlineMenuAlt4 />
    //     </button>
    //     <div className="flex flex-row space-x-1 text-sm lg:text-2xl self-center">
    //       <div className="flex flex-col space-y-1 group">
    //         <Link
    //           href="/"
    //           className="flex flex-row space-x-1 group transition-all"
    //         >
    //           <div className="flex flex-row space-x-1 text-neutral-900 dark:text-neutral-100 font-extralight z-10">
    //             <div className="flex">VIDIT KHANDELWAL</div>
    //             <div className="font-normal">STUDIO</div>
    //           </div>
    //         </Link>
    //         <div className="border-t border-t-neutral-900 dark:border-t-neutral-100 w-0 z-0 h-1/2 group-hover:w-full group-hover:transition-all duration-200 ease-in-out bg-neutral-900 dark:bg-neutral-100"></div>
    //       </div>
    //     </div>
    //     <p className="hidden lg:flex">/</p>
    //     <h2 className="uppercase font-semibold">{props.current}</h2>
    //   </div>
    // );
  }
  return (
    <div className="flex flex-row space-x-2 w-screen text-lg lg:text-2xl uppercase fixed top-0 px-5 py-2.5 lg:px-10 lg:py-5 backdrop-blur-md bg-neutral-200 dark:bg-neutral-900 dark:bg-opacity-30 bg-opacity-30 z-40">
      <button
        onClick={() => {
          props.setIsOpen(true);
        }}
        className="absolute right-5 lg:right-10 self-center"
      >
        <HiOutlineMenuAlt4 />
      </button>
      <div className="flex flex-col space-y-1 group h-fit">
        <Link href="/" className="flex flex-row space-x-1 group transition-all">
          <div className="flex flex-row space-x-1 text-neutral-900 dark:text-neutral-100 font-extralight">
            <div className="flex">VIDIT KHANDELWAL</div>
            <div className="font-normal">STUDIO</div>
          </div>
        </Link>
        <div className="border-t border-t-neutral-900 dark:border-t-neutral-100 w-0 z-0 h-0 group-hover:w-full group-hover:transition-all duration-200 ease-in-out bg-neutral-900 dark:bg-neutral-100"></div>
      </div>
    </div>
  );
};

export default Header;

{
  /* <div className="flex flex-row text-neutral-900 dark:text-neutral-100 font-light z-10">
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
          </div> */
}
