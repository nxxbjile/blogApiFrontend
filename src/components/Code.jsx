import React from "react";

const Code = ({ children }) => {
  return (
    <div
      className={`w-full h-fit p-2 px-4 font-normal lext-md rounded-xl bg-neutral-200`}
    >
      {children}
    </div>
  );
};

export default Code;
