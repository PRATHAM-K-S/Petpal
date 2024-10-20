import React from "react";
import { Avatar, Wrapper } from "../components";
import { MdOutlineMessage } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const name = "cooper";
  return (
    <Wrapper
      className={
        "h-[90vh] flex flex-col gap-8 justify-center items-center text-white"
      }
    >
      <div className="flex flex-col justify-center items-center gap-4">
        <motion.div
          initial={{ scale: 0.3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "anticipate" }}
        >
          <Avatar className={"w-64 h-64"} />
        </motion.div>
        <p className="text-gray-800 uppercase text-6xl font-black mb-6 overflow-hidden">
          {name.split("").map((l, i) => (
            <motion.span
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.1 * i, ease: "easeIn" }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-3/4 ml-6 flex justify-center items-center gap-4"
      >
        <div className="relative w-3/4 h-8 rounded-full bg-gray-400 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "50%" }}
            transition={{
              duration: 1,
              ease: "anticipate",
            }}
            className="h-full bg-gradient-to-r from-red-500 to-orange-400"
          ></motion.div>
          <img
            width={32}
            src="/dog-food.png"
            alt="hello"
            className="absolute right-[3%] bottom-[2%]"
          />
        </div>
        <div className="dynapuff font-semibold text-orange-500">50%</div>
      </motion.div>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        whileTap={{ scale: 0.9 }}
        type="button"
        className="bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br rounded-lg text-sm px-6 py-2.5 text-center font-semibold text-white dynapuff me-2 flex items-center gap-2 mb-10"
      >
        Feed Me <img src="/pet-food.png" width={16} alt="" />
      </motion.button>
      <motion.a
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        href="/message"
        className="text-white absolute bottom-8 text-2xl right-8 bg-yellow-500 p-4 rounded-full hover:scale-110 cursor-pointer"
      >
        <MdOutlineMessage />
      </motion.a>
    </Wrapper>
  );
};

export default Home;
