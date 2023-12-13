import React from "react";
import TextImage from "../components/textImage";
// const AboutUsContent = () => {
//   <>
//     <div className="flex flex-col mb-8 animated fadeIn sm:flex-row">
//       <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
//         <img
//           className="rounded-lg shadow-xl"
//           src="https://images.unsplash.com/photo-1593115057322-e94b77572f20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
//           alt=""
//         />
//       </div>
//       <div className="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16">
//         <p className="mb-2 text-sm font-semibold leading-none text-left text-[#9ECDF9] uppercase">
//           About Us
//         </p>

//         <p className="mt-5 text-lg text-gray-700 text md:text-left">
//           Crafting your user experience has never been easier, with our
//           intuitive drag'n drop interface you will be creating beatiful designs
//           in no time.
//         </p>
//       </div>
//     </div>
//   </>;
// };

const page = () => {
  return (
    <section className="py-20">
      <div className="flex flex-col px-8 mx-auto space-y-12 max-w-7xl xl:px-12">
        <div className="flex flex-col mb-8 animated fadeIn sm:flex-row">
          <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12">
            <img
              className="rounded-lg shadow-xl"
              src="https://images.unsplash.com/photo-1550136513-548af4445338?q=80&w=874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pl-16">
            <p className="mb-2 text-sm font-semibold leading-none text-left text-[#9ECDF9] uppercase">
              Hurry Up
            </p>
            <h3 className="mt-2 text-2xl sm:text-left md:text-4xl">
              Get Your Apartment Over Here
            </h3>
            <p className="mt-5 text-lg text-gray-700 text md:text-left">
              Backed by data, these templates have been crafted for ultimate
              optimization. Now, converting your visitors into customers is
              easier than ever before.
            </p>
          </div>
        </div>
        <div className="flex flex-col mb-8 animated fadeIn sm:flex-row">
          <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
            <img
              className="rounded-lg shadow-xl"
              src="https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16">
            <p className="mb-2 text-sm font-semibold leading-none text-left text-[#9ECDF9] uppercase">
              come fast
            </p>
            <h3 className="mt-2 text-2xl sm:text-left md:text-4xl">
              Top Of The World
            </h3>
            <p className="mt-5 text-lg text-gray-700 text md:text-left">
              All templates and components are fully customizable. You can use
              these templates to tell your personal story and convey your
              message.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
