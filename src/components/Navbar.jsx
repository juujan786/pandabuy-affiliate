import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  function handleClick(tab) {
    setActive(tab);
    if (tab === "home") {
      navigate("");
    } else if (tab === "products") {
      navigate("products");
    } else if (tab === "faq") {
      navigate("faq");
    }
  }



  const handleScrollToPrice = () => {
    // Scroll to the position 220px from the top
    if (window.location.pathname === '/') {
      window.scrollTo({
        top: 1400,
        behavior: 'smooth',
      });
    }
  };
  return (
    <>
      <div class="relative flex justify-center max-w-screen-xl flex-col overflow-hidden px-4 py-4 bg-gray-800 md:mx-auto md:flex-row md:items-center">
        <input type="checkbox" class="peer hidden" id="navbar-open" />
        <label class="absolute top-5 right-7 cursor-pointer md:hidden" for="navbar-open">
          <span class="sr-only">Toggle Navigation</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </label>
        <div class="peer-checked:mt-8  peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-center overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start">
          <ul class="flex w-full justify-center flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
            <Link to="/">
              <li class="font-bold text-[20px] md:mr-12 hover:underline underline-offset-4 decoration-blue-700"><a href="#">Home</a></li>
            </Link>
            <Link to='products'>
              <li class="md:mr-12 text-[20px] hover:underline underline-offset-4 decoration-blue-700"><a href="#">Product</a></li>
            </Link>
            <li class="md:mr-12 text-[20px] hover:underline underline-offset-4 decoration-blue-700" onClick={handleScrollToPrice}><a href="#">Customer reviews</a></li>

          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
