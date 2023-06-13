'use client';

import Link from "next/link";
import styles from "./CTA.module.css";
import Footer from "../Footer/Footer";
import { HiArrowSmallRight } from "react-icons/hi2";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { useState } from "react";
import CTAButton from "./CTAButton";

const CTA = () => {
  return (
    <motion.div
      layout
      className={`flex flex-col justify-center items-center w-screen minw-screen min-h-[50vh] h-[50vh] p-5 lg:p-10 ${styles.center_background}`}
    >
      <CTAButton />
      <Footer />
    </motion.div>
  );
};

export default CTA;
