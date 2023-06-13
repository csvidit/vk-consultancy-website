"use client";

import styles from "./CTA.module.css";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { HiArrowSmallRight } from "react-icons/hi2";
import { useMediaQuery } from "react-responsive";

const CTAButton = () => {
  const [hover, setHover] = useState(false);

  const isBigScreen = useMediaQuery({ query: "(min-width: 1001px)" });

  if (isBigScreen) {
    return (
      <Link
        href="/services"
        className={`flex rounded-2xl bg-neutral-900 bg-opacity-100 border border-neutral-600 w-1/2 min-w-max ${styles.cta_button}`}
      >
        <motion.div
          layout
          transition={{
            type: "spring",
            duration: 0.2,
          }}
          onHoverStart={(e) => {
            setHover(true);
          }}
          onHoverEnd={(e) => {
            setHover(false);
          }}
          // className={`w-full h-full px-2.5 py-5 flex flex-row items-center group ${
          //   hover == true ? "justify-center" : "justify-around"
          // }`}
          className={`w-full h-full px-2.5 py-5 flex flex-row items-center group justify-around`}
        >
          <AnimatePresence mode="popLayout">
            {hover && (
              <motion.div
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{
                  type: "spring",
                  duration: 0.3,
                }}
                layout
                // layoutId="cta-arrow"
                className={`flex text-2xl lg:text-4xl`}
              >
                <HiArrowSmallRight />
              </motion.div>
            )}
          </AnimatePresence>
          <motion.div layout className="text-2xl lg:text-4xl">
            Browse our services{" "}
            <motion.span layout className="inline text-violet-300">
              in detail
            </motion.span>
          </motion.div>
          <AnimatePresence mode="popLayout">
            {!hover && (
              <motion.div
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{
                  type: "spring",
                  duration: 0.3,
                }}
                layout
                // layoutId="cta-arrow"
                className={`flex text-2xl lg:text-4xl`}
              >
                <HiArrowSmallRight />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </Link>
    );
  } else {
    return (
      <Link
        href="/services"
        className={`flex rounded-2xl bg-neutral-900 bg-opacity-100 border border-neutral-600 w-full ${styles.cta_button}`}
      >
        <motion.div
          layout
          className={`w-full h-full px-2.5 py-5 flex flex-row items-center group justify-around`}
        >
          <motion.div layout className="text-2xl lg:text-4xl">
            Browse our services{" "}
            
          </motion.div>

          <motion.div layout className={`flex text-2xl lg:text-4xl`}>
            <HiArrowSmallRight />
          </motion.div>
        </motion.div>
      </Link>
    );
  }
};

export default CTAButton;
