import React from "react";

const Button = ({ text }) => {
  return (
    <button className="bg-stone-700 py-2 px-4 rounded-lg border border-stone-400">
      {text}
    </button>
  );
};

export default Button;
