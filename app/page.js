import React from "react";
// import { AboutUsContent } from "./about/page.js";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Button from "./components/Button";

// import "../global.css";

// import Footer from "./components/Header.js";
// import Footer from "./components/Footer.js";

const page = () => {
  return (
    <>
      <section className="bg-[url('../public/images/homepage.jpg')] bg-cover sm:h-[100vh] w-[100%] flex justify-center items-center px-3 h-[70vh] ">
        <div className="sm:mt-4 sm:w-[80%]">
          <h1 className="uppercase sm:text-sm text-[#9ECDF9] tracking-wider font-semibold w-[90%] text-[0.7rem] heading-1">
            Grandeur Homes: Elevating Your Living Experience with Maison Chaise
          </h1>
          <p className="sm:text-[0.7rem] w-[80%] mt-2 sm:w-[80%] text-[0.6rem] text-white tracking-wide">
            Discover the epitome of luxury living with Maison Real Estate, a
            distinguished division of Grandeur Homes. Immerse yourself in a
            world of exquisite properties, where unparalleled craftsmanship
            meets timeless elegance. Our portfolio showcases meticulously
            curated residences, each embodying the essence of sophistication and
            opulence.
          </p>
          <Button content="Explore" />
        </div>
      </section>
    </>
  );
};

export default page;
