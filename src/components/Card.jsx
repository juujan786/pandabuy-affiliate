import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  const handleBuyOnPanda = () => {
    window.open(item.buy, "_blank");
  };

  const handleQC = () => {
    window.open(item.qc, "_blank");
  };

  return (
    <div className="group max-w-[300px] my-10 flex  flex-col justify-between overflow-hidden rounded-lg border border-stone-500 bg-stone-800 shadow-md">
      <a
        className="relative mx-2 mt-2 flex h-[200px] overflow-hidden rounded-xl"
        href="#"
      >
        <img
          className="peer absolute top-0 right-0 h-full w-full object-cover"
          // src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60?a=b"
          src={item.image}
          alt={item.title}
        />
        {/* <span className="absolute w-6 h-6 top-0 left-0 m-2 rounded-full bg-red-700 px-2 text-center text-sm font-medium text-white"></span> */}
      </a>
      <div className="mt-2 px-3 pb-1">
        <Link to={""}>
          <h5 className="tracking-tight text-stone-300">
            {item.title}
          </h5>
        </Link>
        <div className="mt-2 mb-2 flex items-center justify-between">
          <p>
            <span className="text-[23px] font-bold text-stone-300">
              ${item.price}
            </span>
          </p>
        </div>
      </div>
      <div className="flex px-3 pb-2 justify-between flex-col gap-2">
        <button
          onClick={handleBuyOnPanda}
          className="flex items-center justify-center rounded-md border-2 border-stone-900 bg-stone-900 text-stone-300  py-2 text-center text-sm font-medium hover:text-stone-900 hover:bg-stone-300  transition-all outline-none"
        >
          Buy on Pandabuy
        </button>
        <button
          onClick={handleQC}
          className="flex items-center justify-center rounded-md border-2 border-stone-900 bg-stone-300 px-5 py-2.5  text-center text-sm font-medium text-stone-900 hover:bg-stone-900 hover:text-stone-300 transition-all outline-none"
        >
          Quality Check
        </button>
      </div>
    </div>
  );
};

export default Card;
