import React from "react";

const Button = ({ text, click, fontSize }) => {
  return (
    <button
      onClick={click}
      className={`text-[${fontSize}px] bg-stone-700 py-2 px-4 rounded-lg border border-stone-400`}
    >
      {text}
    </button>
  );
};

export default Button;
