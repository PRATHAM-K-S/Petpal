import React from "react";

const Wrapper = ({children,className}) => {
  return <section className={`${className}`}>{children}</section>;
};

export default Wrapper;
