import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="group my-10 flex w-full flex-col overflow-hidden rounded-lg border border-stone-500 bg-stone-800 shadow-md">
      <a
        className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
        href="#"
      >
        <img
          className="peer absolute top-0 right-0 h-full w-full object-cover"
          src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60?a=b"
          alt="product image"
        />
        <span className="absolute w-6 h-6 top-0 left-0 m-2 rounded-full bg-red-700 px-2 text-center text-sm font-medium text-white"></span>
      </a>
      <div className="mt-4 px-5 pb-5">
        <Link to={""}>
          <h5 className="text-xl tracking-tight text-stone-300">
            Nike Air MX Super 2500 - Red
          </h5>
        </Link>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-stone-300">$449</span>
          </p>
        </div>
        <div className="flex justify-between flex-col gap-4">
          <button className="flex items-center justify-center rounded-md border-2 border-stone-900 bg-stone-900 text-stone-300 px-5 py-2.5 text-center text-sm font-medium hover:text-stone-900 hover:bg-stone-500 focus:outline-none focus:ring-4 focus:ring-stone-300 transition-all">
            Buy on Pandabuy
          </button>
          <button className="flex items-center justify-center rounded-md border-2 border-stone-900 bg-stone-300 px-5 py-2.5 text-center text-sm font-medium text-stone-900 hover:bg-stone-900 hover:text-stone-300 focus:outline-none focus:ring-4 focus:ring-stone-300 transition-all">
            Quality Check
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
