import React from "react";
import { Navbar, Wrapper } from "./components";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <Wrapper className={"h-screen overflow-hidden bg-[#FDFDBD]"}>
      <Navbar />
      <Outlet />
    </Wrapper>
  );
};

export default App;
