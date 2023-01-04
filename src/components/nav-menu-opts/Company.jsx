import React from "react";

const Company = () => {
  return (
    <div className="invisible opacity-0 group-hover:opacity-100 pointer-events-none group-hover:visible group-hover:pointer-events-auto transition-all group-hover:top-7 duration-100 absolute top-11 right-[-40px] z-10 bg-white shadow-2xl rounded-xl p-6 w-[130px]">
      <ul className="flex flex-col gap-y-2">
        <li className="capitalize text-medium-gray hover:outline-dotted hover:outline-2 hover:outline-medium-gray">
          history
        </li>
        <li className="capitalize text-medium-gray hover:outline-dotted hover:outline-2 hover:outline-medium-gray">
          our team
        </li>
        <li className="capitalize text-medium-gray hover:outline-dotted hover:outline-2 hover:outline-medium-gray">
          blog
        </li>
      </ul>
    </div>
  );
};

export default Company;
