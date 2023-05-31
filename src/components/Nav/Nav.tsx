"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Transition } from "@headlessui/react";
import NavLink from "./NavLink";

const Nav = (props: { isOpen: boolean; setIsOpen: any }) => {
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
          ? "flex opacity-100 transition-all duration-300 ease-in-out"
          : "hidden opacity-0 transition-all duration-300 ease-in-out"
      }`}
      >
        <NavLink size="large" href="/about">About</NavLink>
        <NavLink size="large" href="/services">Services</NavLink>
        <NavLink size="large" href="/work">Work</NavLink>
        <NavLink size="large" href="/contact">Contact</NavLink>
        
      </motion.div>
    </Transition>
  );
};

export default Nav;
