import React from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaReddit } from "react-icons/fa";
const Categories = (props) => {
  return (
    <div className=" px-4">
      <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 uppercase">
        {props.content}
      </h2>
      <nav className="list-none mb-10 text-black">
        <Link href={`${props.link1}`}>
          <li className="hover:text-[#2a2020] text-xs">{props.list1}</li>
        </Link>
        <Link href={`${props.link2}`}>
          <li className="hover:text-[#2a2020] text-xs">{props.list2}</li>
        </Link>
        <Link href={`${props.link3}`}>
          <li className="hover:text-[#2a2020] text-xs">{props.list3}</li>
        </Link>
      </nav>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font bg-[#157F7F]">
      <div className="container px-5 py-6 mx-auto flex sm:items-center flex-row  flex-wrap lg:justify-center">
        <div className="flex md:mx-0 mx-auto items-center md:mt-0 mt-10">
          <Link href="/">
            <img
              src="images/logo-1.png"
              alt=""
              className="sm:w-16 sm:h-7 w-10 h-5 sm:ml-0 left-2 "
            />
          </Link>
        </div>
        <div className=" flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first justify-evenly">
          <Categories
            content="About"
            list1="First-link"
            link1="/about"
            list2="Second-link"
            link2="/about"
            list3="Third-link"
            link3="/about"
          />
          <Categories
            content="Categories"
            list1="First-Service"
            link1="/"
            list2="Second-Service"
            link2="/"
            list3="Third-Service"
            link3="/"
          />
          <Categories
            content="Categories"
            list1="First-Categories"
            link1="/"
            list2="Second-Categories"
            link2="/"
            list3="Third-Categories"
            link3="/"
          />
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2023 Maison Chaise
            <Link href="/" className="text-gray-600 ml-1" target="_blank">
              @MrsRobbot
            </Link>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <span className="mx-2 cursor-pointer">
              <FaFacebookF />
            </span>
            <span className="mx-2 cursor-pointer">
              <FaInstagram />
            </span>
            <span className="mx-2 cursor-pointer">
              <FaReddit />
            </span>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
