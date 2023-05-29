"use client";

import Link from "next/link";
import { HiArrowUpRight, HiOutlineXMark } from "react-icons/hi2";
import { motion } from "framer-motion";
import { Transition } from "@headlessui/react";
import Nav2Link from "./Nav2Link";

const Nav2 = (props: { isOpen: boolean; setIsOpen: any }) => {
  return (
    <Transition
      show={props.isOpen}
      enter="transition-all duration-200 ease-in-out"
      enterFrom="opacity-0 -translate-y-[10%]"
      enterTo="opacity-100 -translate-y-0"
      leave="transition-all duration-200 ease-in-out"
      leaveFrom="opacity-100 -translate-y-0"
      leaveTo="opacity-0 translate-y-[10%]"
      className={"grow"}
    >
      <motion.div
        className={`flex z-50 w-screen h-screen flex-col space-y-5 lg:space-y-10 items-start px-5 py-2.5 lg:px-10 lg:py-5 font-light capitalize
      ${
        props.isOpen
          ? "flex opacity-100 transition-opacity duration-300"
          : "hidden opacity-0 transition-opacity duration-300"
      }`}
      >
        <Nav2Link size="large" href="/about">About</Nav2Link>
        <Nav2Link size="large" href="/services">Services</Nav2Link>
        <Nav2Link size="large" href="/contact">Contact</Nav2Link>
      </motion.div>
    </Transition>
  );
};

export default Nav2;

{
  /* <motion.div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-5 items-center text-2xl lg:text-4xl">
        <motion.div className="flex flex-col space-y-1 group">
          <Link
            href="https://linkedin.com/in/viditkhandelwal"
            className="flex flex-row space-x-1 group transition-all"
          >
            <motion.div className="flex flex-row space-x-1 transition-all duration-200 ease-in-out">
              <motion.div className="flex">LINKEDIN</motion.div>
              <HiArrowUpRight />
            </motion.div>
          </Link>
          <motion.div className="border-t border-t-neutral-900 dark:border-t-neutral-100 w-0 z-0 h-1/2 group-hover:w-full group-hover:transition-all duration-200 ease-in-out bg-neutral-900 dark:bg-neutral-100"></motion.div>
        </motion.div>
        <motion.div className="flex flex-col space-y-1 group">
          <Link
            href="https://read.cv/viditkhandelwal"
            className="flex flex-row space-x-1 group transition-all"
          >
            <motion.div className="flex flex-row space-x-1 transition-all duration-200 ease-in-out">
              <motion.div className="flex">READ.CV</motion.div>
              <HiArrowUpRight />
            </motion.div>
          </Link>
          <motion.div className="border-t border-t-neutral-900 dark:border-t-neutral-100 w-0 z-0 h-1/2 group-hover:w-full group-hover:transition-all duration-200 ease-in-out bg-neutral-900 dark:bg-neutral-100"></motion.div>
        </motion.div>
      </motion.div> */
}
