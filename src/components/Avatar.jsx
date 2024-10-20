import React from "react";

const Avatar = ({className}) => {
  return (
    <div className={`rounded-full border overflow-hidden flex justify-center items-center ${className}`}>
      <img src="src/assets/dog.jpg" alt="pet image" />
    </div>
  );
};

export default Avatar;
