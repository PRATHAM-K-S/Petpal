import React from "react";
import { Avatar, Wrapper } from "../components";
import { MdOutlineMessage } from "react-icons/md";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Wrapper
      className={
        "h-[90vh] flex flex-col gap-8 justify-center items-center text-white"
      }
    >
      <div className="flex flex-col justify-center items-center gap-4">
        <Avatar className={"w-64 h-64"}/>
        <p className="text-gray-800 uppercase text-6xl font-black mb-6">
          Cooper
        </p>
      </div>
      <div className="w-3/4 ml-6 flex justify-center items-center gap-4">
        <div className="relative w-3/4 h-8 rounded-full bg-gray-400 overflow-hidden">
          <div className="h-full w-1/2 bg-gradient-to-r from-red-500 to-orange-400"></div>
          <img
            width={32}
            src="src/assets/dog-food.png"
            alt="hello"
            className="absolute right-[3%] bottom-[2%]"
          />
        </div>
        <div className="dynapuff font-semibold text-orange-500">50%</div>
      </div>
      <button
        type="button"
        className="bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br rounded-lg text-sm px-6 py-2.5 text-center font-semibold text-white dynapuff me-2 flex items-center gap-2 mb-10"
      >
        Feed Me <img src="src/assets/pet-food.png" width={16} alt="" />
      </button>
      <a
        href="/message"
        className="text-white absolute bottom-8 text-2xl right-8 bg-yellow-500 p-4 rounded-full hover:scale-110 cursor-pointer"
      >
        <MdOutlineMessage />
      </a>
    </Wrapper>
  );
};

export default Home;
