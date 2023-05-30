"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import Nav2 from "./Nav2";
import { Spiral as Hamburger } from "hamburger-react";
import { HiArrowLongRight } from "react-icons/hi2";

const Header2 = (props: { current: string | undefined }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (props.current) {
    return (
      <div className="flex flex-col space-y-2 w-screen text-lg lg:text-2xl uppercase fixed top-0 backdrop-blur-md bg-neutral-200 dark:bg-neutral-900 dark:bg-opacity-30 bg-opacity-30 z-40">
        <div className="flex flex-row w-screen justify-between px-5 py-2.5 lg:px-10 lg:py-5">
          <button
            //   onClick={() => {
            //     setIsOpen(!isOpen);
            //   }}
            className="absolute right-5 lg:right-10 self-center"
          >
            <Hamburger size={20} toggled={isOpen} toggle={setIsOpen} />
          </button>
          <div className="flex flex-col space-y-1 lg:space-y-0 lg:flex-row lg:space-x-1 items-start">
            <div className="flex flex-col space-y-1 group w-fit h-fit">
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
            <div className="flex lg:flex-row lg:space-x-1 items-center">
              <div className="font-extralight hidden lg:flex">
                <HiArrowLongRight />
              </div>
              <div className="font-semibold">{props.current}</div>
            </div>
          </div>
        </div>
        <Nav2 isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    );
  }
  return (
    <div className="flex flex-col space-y-2 w-screen text-lg lg:text-2xl uppercase fixed top-0 backdrop-blur-md bg-neutral-200 dark:bg-neutral-900 dark:bg-opacity-30 bg-opacity-30 z-40">
      <div className="flex flex-row w-screen justify-between px-5 py-2.5 lg:px-10 lg:py-5">
        <button
          //   onClick={() => {
          //     setIsOpen(!isOpen);
          //   }}
          className="absolute right-5 lg:right-10 self-center"
        >
          <Hamburger size={20} toggled={isOpen} toggle={setIsOpen} />
        </button>
        <div className="flex flex-col space-y-1 group w-fit h-fit">
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
      </div>
      <Nav2 isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Header2;
