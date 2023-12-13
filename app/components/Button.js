import React from "react";

const Button = (props) => {
  return (
    <button className="sm:text-xs bg-white px-2 py-1 my-2 rounded border-[#157F7F] border-2 text-[#157F7F] font-semibold tracking-wide hover:bg-[#e9e9e9] transition-all duration-200 ease-in-out text-[0.6rem]">
      {props.content}
    </button>
  );
};

export default Button;
