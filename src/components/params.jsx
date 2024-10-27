import React from "react";

const params = ({ params }) => {
  return (
    <ul className={`my-2`}>
      {params &&
        params.map((item, idx) => (
          <li key={idx} className={`list-disc flex gap-2`}>
            <div className={`font-semibold text-lg`}>
              {item.key ? item.key : ''} : {item.type ? item.type : ''}
            </div>
            <div className={`font-normal text-md`}>{item.value ? item.value : ''}</div>
          </li>
        ))}
    </ul>
  );
};

export default params;
