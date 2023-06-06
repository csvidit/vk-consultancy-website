"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const HeroSubtitles = () => {
  const [currentBlock, setCurrentBlock] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBlock((prevBlock) => (prevBlock + 1) % textBlocks.length);
    }, 2000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const textBlocks = [
    "Want a cool website for your business?",
    "Want a fresh design system?",
    "Want to create flyers or posters?",
  ];

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        layout
        className="flex flex-col space-y-2.5 lg:space-y-0 lg:flex-row lg:space-x-2.5 flex-wrap text-2xl lg:text-4xl lg:h-[2.75rem] overflow-hidden"
      >
        <motion.div layout className="flex">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              layout
              key={currentBlock}
              className="flex flex-row font-thin"
              initial={{ opacity: 0, y: 20 }}
              // initial={{ opacity: 0, y: 9999999 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              // exit={{ opacity: 0, y: -999999 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {textBlocks[currentBlock]}
            </motion.div>
          </AnimatePresence>
        </motion.div>
        <motion.span layout className="font-normal">
          we got you.
        </motion.span>
      </motion.div>
    </AnimatePresence>
  );
};

export default HeroSubtitles;
