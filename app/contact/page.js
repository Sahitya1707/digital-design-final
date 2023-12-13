import React from "react";

const page = () => {
  return (
    <>
      <div className="sm:h-[30rem] flex justify-center flex-col px-4 h-[40rem]">
        <h3 class="text-xl text-[#9ECDF9] font-semibold uppercase">
          Let us call you!
        </h3>
        <p class="text-sm"> To help you choose your property</p>
        <div class="flex sm:space-x-5 mt-3 sm:flex-row flex-col">
          <input
            type="text"
            name=""
            id=""
            placeholder="Your Name"
            class="border p-2  sm:w-1/2 sm:mt-0 mt-2"
          />
          <input
            type="tel"
            name=""
            id=""
            placeholder="Your Number"
            class="border p-2 sm:w-1/2 sm:mt-0 mt-2"
          />
        </div>
        <input
          type="email"
          name=""
          id=""
          placeholder="Your Email"
          class="border p-2 w-full mt-3"
        />

        <div class="flex items-baseline space-x-2 mt-2">
          <input type="checkbox" name="" id="" class="inline-block" />
          <p class="text-gray-600 text-sm">
            I consent to having this website store my submitted information so
            they can respond to my inquiry.
          </p>
        </div>
        <input
          type="submit"
          value="Submit"
          class="w-full mt-6 bg-[#37C47E] hover:bg-[#3dda8b] text-white font-semibold p-3"
        />
      </div>
    </>
  );
};

export default page;
