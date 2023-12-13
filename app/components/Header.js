"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
// import "../global.css";
const LinkList = (props) => {
  return (
    <Link href={`${props.link}`}>
      <li
        className="hover:text-[#2a2020] transition-all duration-75 cursor-pointer sm:text-xs text-[0.5rem] sm:mt-0 "
        onClick={props.handleClick}
      >
        {props.name}
      </li>
    </Link>
  );
};
const Menu = (props) => {
  return (
    <span
      className="cursor-pointer text-black text-xl  absolute right-2 top-4"
      onClick={props.handleClick}
    >
      {props.icon}
    </span>
  );
};
// bg - [url("../public/images/homepage.jpg")];
const Header = () => {
  const [state, setState] = useState(true);
  const handleState = () => {
    setState(!state);
  };

  return (
    <header>
      <nav className="bg-[#157F7F] w-[100vw] sm:h-12 sm:px-4 fixed ">
        <div className="sm:flex sm:max-w-4xl sm:mx-auto sm:items-center sm:justify-between sm:h-[100%] w-[100%] ">
          <Link href="/">
            <img
              src="images/logo-1.png"
              alt=""
              className="sm:w-16 sm:h-7 w-10 h-5 sm:ml-0 left-2 sm:static absolute top-4"
            />
          </Link>
          <ul
            className={`flex sm:items-center gap-x-3 sm:gap-x-6 uppercase text-xs sm:flex-row flex-col sm:w-[auto] w-[100%] sm:h-[auto]  justify-end ml-2  ${
              state
                ? "h-[0rem] overflow-hidden "
                : "h-[6rem] overflow-auto transition-all duration-150 ease-in"
            }`}
          >
            <LinkList name="Home" link="/" handleClick={handleState} />
            <LinkList name="About" link="/about" handleClick={handleState} />
            <LinkList
              name="Contact Us"
              link="/contact"
              handleClick={handleState}
            />
          </ul>
        </div>
        <div className="h-[3rem]  block sm:hidden ">
          {state ? (
            <Menu icon={<CiMenuFries />} handleClick={handleState} />
          ) : null}
          {state ? null : <Menu icon={<IoClose />} handleClick={handleState} />}
        </div>
      </nav>
    </header>
  );
};

export default Header;
