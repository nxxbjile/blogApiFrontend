import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div
        className={`fixed max-[625px]:sticky top-0 left-0 w-screen flex items-center border-b-2 border-neutral-600 h-16 bg-black/80 backdrop-blur-md p-2`}
      >
        <div className={`text-xl font-semibold text-white`}>Blog API</div>
      </div>
      <div className={`flex max-[625px]:mt-0 mt-16 max-[625px]:flex-col`}>
        <Sidebar />
        <div
          className={`w-[70vw] max-[625px]:w-full h-screen min-[625px]:overflow-y-scroll pb-32`}
          style={{ scrollbarWidth: "none" }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
