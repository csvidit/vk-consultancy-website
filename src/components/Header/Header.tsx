"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import Nav from "../Nav/Nav";
import { Spiral as Hamburger } from "hamburger-react";
import { HiArrowLongRight } from "react-icons/hi2";
import {usePathname} from "next/navigation"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  let pathName = usePathname().substring(1);
  
    return (
      <motion.div
        layout
        transition={{ type: "tween" }}
        exit={{ opacity: 0 }}
        className="flex flex-col space-y-2 w-screen text-lg lg:text-2xl uppercase fixed top-0 backdrop-blur-md bg-neutral-900 dark:bg-opacity-30 bg-opacity-30 z-40"
      >
        <motion.div
          layout
          className="flex flex-row w-screen justify-between px-5 py-2.5 lg:px-10 lg:py-5"
        >
          <button
            className="absolute right-5 lg:right-10 self-center"
          >
            <Hamburger size={20} toggled={isOpen} toggle={setIsOpen} />
          </button>
          <motion.div className="flex flex-col space-y-1 lg:space-y-0 lg:flex-row lg:space-x-1 items-start">
            <motion.div className="flex flex-col space-y-1 group w-fit h-fit">
              <Link
                href="/"
                className="flex flex-row space-x-1 group transition-all"
              >
                <motion.div className="flex flex-row space-x-1 text-neutral-100 font-extralight">
                  <motion.div className="flex">VIDIT KHANDELWAL</motion.div>
                  <motion.div className="">STUDIO</motion.div>
                </motion.div>
              </Link>
              <motion.div className="border-t border-t-neutral-100 w-0 z-0 h-0 group-hover:w-full transition-all ease-in-out duration-200 bg-neutral-900 dark:bg-neutral-100"></motion.div>
            </motion.div>
            <motion.div className="flex lg:flex-row lg:space-x-1 items-center">
              <motion.div className="font-extralight hidden lg:flex">
                {pathName !="" && <HiArrowLongRight />}
              </motion.div>
              <motion.div className="font-semibold">{pathName}</motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
        <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
      </motion.div>
    );
};

export default Header;
