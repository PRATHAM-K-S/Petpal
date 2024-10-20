import React from "react";
import { Avatar, Wrapper } from "../components";
import { TbMoodSmileBeam } from "react-icons/tb";

const Profile = () => {
  return (
    <Wrapper className={"h-[90vh]"}>
      <div className="w-full flex flex-col justify-center mt-8 items-center gap-8">
        <Avatar className={`w-32 h-32`} />
        <p className="flex items-center">
          Rating:
          <div className="mt-1 flex items-center">
            <svg
              class="w-4 h-4 text-yellow-300 ms-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              class="w-4 h-4 text-yellow-300 ms-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              class="w-4 h-4 text-yellow-300 ms-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              class="w-4 h-4 text-yellow-300 ms-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            (75.5k reviews)
          </div>
        </p>
        <div className="flex flex-col gap-1">
          <p className="text-3xl font-black text-gray-800">Name:Cooper</p>
          <p className="w-full text-center">Age:5years</p>
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
        <div className="w-3/4 ml-5 flex justify-center items-center gap-4">
          <div className="relative w-3/4 h-8 rounded-full bg-gray-400 overflow-hidden">
            <div className="h-full w-3/4 bg-gradient-to-r from-green-500 to-green-400"></div>
            <div className="absolute right-[3%] bottom-[18%] text-xl text-white">
              <TbMoodSmileBeam />
            </div>
          </div>
          <div className="dynapuff font-semibold text-green-500">75%</div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Profile;
