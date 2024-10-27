import React from "react";

const Method = ({ req, endpoint }) => {
  const colors = {
    GET: "bg-green-500",
    POST: "bg-blue-500",
    PATCH: "bg-gray-500",
    DELETE: "bg-red-500",
  };
  return (
    <div className={`flex gap-2`}>
      <div
        className={`p-1 px-4 text-white text-lg font-semibold ${colors[req]} rounded-lg`}
      >
        {req}
      </div>
      <div className={`flex items-center justify-cente`}>{endpoint}</div>
    </div>
  );
};

export default Method;
