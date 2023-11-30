import React from "react";
import { motion } from "framer-motion";

const Card = ({ children }: { children: React.ReactNode }) => {
  const cardVariant = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 80,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariant}
      initial="hidden"
      animate="visible"
      className={`flex flex-col bg-white rounded shadow-lg p-4 gap-4 w-[70%]`}
    >
      {children}
    </motion.div>
  );
};

const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className={`text-xl text-medium-purple-700 font-semibold`}>
      {children}
    </h1>
  );
};

Card.Title = Title;

export default Card;
