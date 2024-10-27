import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const options = [
    {
      id: 1,
      name: "Introduction",
      link: "/",
    },
    {
      id: 2,
      name: "Authentication",
      link: "/auth",
    },
    {
      id: 3,
      name: "Endpoints",
      link: "/endpoints",
    },
  ];
  return (
    <div className={`w-60 min-h-screen max-[625px]:min-h-fit max-[625px]:w-full h-fit bg-neutral-200 `}>
      {options.map((item) => (
        <Link to={item.link} key={item.id}>
          <div
            className={`font-light text-lg p-2 px-3 flex items-center justify-start hover:bg-neutral-300 transition-all duration-300 ease-in-out`}
          >
            {item.name}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
