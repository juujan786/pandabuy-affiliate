import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Search from "./Search";

const Navbar = () => {
  const [isSearching, setIsSearching] = useState(false);

  function handleStartSearching() {
    setIsSearching(true);
  }

  function handleDone() {
    setIsSearching(false);
  }
  return (
    <>
      <AnimatePresence>
        {isSearching && <Search onDone={handleDone} />}
      </AnimatePresence>
      <div className="bg-black text-stone-300 sticky top-0 z-30">
        <nav className="flex justify-between mx-auto w-[90%] lg:w-[80%] xl:w-[1200px] py-6">
          <NavLink to={""}>Logo</NavLink>
          <ul className="flex gap-6 list-none">
            <NavLink to={"products"}>Products</NavLink>
            <NavLink to={"#faq"}>FAQs</NavLink>
            <button onClick={handleStartSearching}>Search</button>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
