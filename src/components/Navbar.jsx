import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
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
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  function handleJoinDiscord() {
    alert("Feater under development");
  }
  return (
    <>
      <div className="relative bg-transparent z-30 text-sm font-bold">
        <nav className="flex justify-between items-center mx-auto w-[90%] lg:w-[80%] xl:w-[90%] 2xl:w-[1400px] py-6">
          <NavLink to={""}>Logo</NavLink>
          <span
            onClick={toggleMenu}
            className="flex md:hidden text-3xl text-stone-200 absolute right-6 cursor-pointer"
          >
            {isMenuOpen ? "X" : "="}
          </span>
          <ul
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } bg-stone-900 md:bg-transparent md:flex items-center flex-col md:flex-row gap-6 list-none absolute w-screen md:w-auto top-16 left-[-20px] md:left-0 md:top-0 md:relative`}
          >
            <li
              className={`${
                active !== "home" ? "" : "text-green-600"
              } hover:text-green-600 cursor-pointer`}
              onClick={() => handleClick("home")}
            >
              Home
            </li>
            <li
              className={`${
                active !== "products" ? "" : "text-green-600"
              } hover:text-green-600 cursor-pointer`}
              onClick={() => handleClick("products")}
            >
              Products
            </li>
            <li
              className={`${
                active !== "faq" ? "" : "text-green-600"
              } hover:text-green-600 cursor-pointer`}
              onClick={() => handleClick("faq")}
            >
              FAQ
            </li>

            <Button
              text={"JOIN THE DESCORD"}
              click={handleJoinDiscord}
              fontSize={24}
            />
            <hr className="md:hidden w-full border-2 border-green-700" />
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
