"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { UrlObject } from "url";

const NavLink = (props: {
  size: string;
  href: string | UrlObject;
  children: React.ReactNode;
}) => {
  if (props.size == "large") {
    return (
      <motion.div layout className="flex flex-col space-y-1 group text-6xl lg:text-8xl">
        <Link
          href={props.href}
          className="flex flex-row space-x-1 group transition-all"
        >
          <motion.div className="relative flex flex-col space-y-1 transition-all duration-200 ease-in-out h-[3.75rem] lg:h-[6rem] overflow-hidden">
            <motion.div className="flex opacity-100 -translate-y-0 group-hover:-translate-y-full group-hover:opacity-0 duration-300 ease-in-out">{props.children}</motion.div>
            <motion.div className="flex opacity-0 -translate-y-0 group-hover:-translate-y-full group-hover:opacity-100 duration-300 ease-in-out">{props.children}</motion.div>
          </motion.div>
        </Link>
        {/* <motion.div className="border-t border-t-neutral-900 dark:border-t-neutral-100 w-0 h-0 z-0 group-hover:w-full group-hover:transition-all duration-200 ease-in-out bg-neutral-900 dark:bg-neutral-100"></motion.div> */}
      </motion.div>
    );
  } else {
    return (
      <motion.div layout className="flex flex-col space-y-1 group text-2xl lg:text-4xl uppercase">
        <Link
          href={props.href}
          className="flex flex-row space-x-1 group transition-all"
        >
          <motion.div className="flex flex-row space-x-1 transition-all duration-200 ease-in-out">
            <motion.div className="flex">{props.children}</motion.div>
          </motion.div>
        </Link>
        {/* <motion.div className="border-t border-t-neutral-900 dark:border-t-neutral-100 w-0 h-0 z-0 group-hover:w-full group-hover:transition-all duration-200 ease-in-out bg-neutral-900 dark:bg-neutral-100"></motion.div> */}
      </motion.div>
    );
  }
};

export default NavLink;
