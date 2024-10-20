import React, { useState } from "react";
import { MdOutlinePets } from "react-icons/md";
import Hamburger from "./Hamburger";
import Wrapper from "./Wrapper";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="dynapuff flex items-center justify-between pl-8">
        <a className="flex items-center gap-2 cursor-pointer">
          <MdOutlinePets className="text-3xl text-[#B983FF]" />
          <span className="pt-1 text-xl text-gray-800 font-semibold">
            PetPal
          </span>
        </a>
        <div className="scale-50" onClick={() => setOpen((prev) => !prev)}>
          <Hamburger />
        </div>
      </nav>
      {open && (
        <Wrapper
          className={"h-[90vh] flex flex-col gap-4 justify-center items-center"}
        >
          <a href="/" className="text-3xl dynapuff font-black text-gray-800">
            Home
          </a>
          <a href="/profile" className="text-3xl dynapuff font-black text-gray-800">
            Profile
          </a>
          <a href="/message" className="text-3xl dynapuff font-black text-gray-800">
            Message
          </a>
        </Wrapper>
      )}
    </>
  );
};

export default Navbar;
