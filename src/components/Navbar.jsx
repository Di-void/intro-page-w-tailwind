import React from "react";
import Logo from "../assets/svgs/logo.svg";
import { TbMenu2 } from "react-icons/tb";

const Navbar = () => {
  return (
    <nav className="flex justify-between p-5">
      {/* logo */}
      <div>
        <img src={Logo} alt="/" />
      </div>
      {/* links */}

      {/* buttons */}

      {/* hamburger */}
      <button className="text-3xl">
        <TbMenu2 />
      </button>
    </nav>
  );
};

export default Navbar;
