import React from "react";

const Button = ({ click, bg }) => {
  return (
    <button
      onClick={click}
      className={`bg-${bg} py-2 px-4 border-2 border-black hover:bg-transparent hover:text-black`}
    >
      Shop Now
    </button>
  );
};

export default Button;
