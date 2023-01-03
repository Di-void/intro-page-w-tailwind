import React, { useState } from "react";
import Logo from "../assets/svgs/logo.svg";
import { TbMenu2 } from "react-icons/tb";
import { GrClose } from "react-icons/gr";
import { featureIcons } from "../libs/featureIcons";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const optionsForDropDown = {
  FEAT: "feat",
  COMPANY: "comp",
};

const Navbar = () => {
  const [navStates, setNavStates] = useState({
    menuState: {
      isOpen: false,
      features: false,
      company: false,
    },
  });

  // FUNCTIONS

  const expandOptions = (e) => {
    const id = e.currentTarget.dataset.id;
    if (id === optionsForDropDown.FEAT) {
      setNavStates((oldState) => {
        const isOpen = oldState.menuState.features;
        const newState = {
          ...oldState,
          menuState: { ...oldState.menuState, features: !isOpen },
        };
        return newState;
      });
    }

    if (id === optionsForDropDown.COMPANY) {
      setNavStates((oldState) => {
        const isOpen = oldState.menuState.company;
        const newState = {
          ...oldState,
          menuState: { ...oldState.menuState, company: !isOpen },
        };
        return newState;
      });
    }
  };

  const toggleMenu = () => {
    setNavStates((oldState) => {
      const isOpen = oldState.menuState.isOpen;
      const newState = {
        ...oldState,
        menuState: { ...oldState.menuState, isOpen: !isOpen },
      };
      return newState;
    });
  };

  return (
    <nav className="flex justify-between p-5">
      {/* logo */}
      <div className="flex md:w-[80%] max-w-[700px]">
        <img src={Logo} alt="/" />
        {/* desktop-links */}
        <ul className="hidden md:flex justify-between ml-20 w-[80%]">
          <li className="flex items-center text-medium-gray text-left">
            Features{" "}
            <span className="ml-2">
              <MdKeyboardArrowDown />
            </span>
          </li>
          <li className="flex items-center text-medium-gray text-left">
            Company{" "}
            <span className="ml-2">
              <MdKeyboardArrowDown />
            </span>
          </li>
          <li className="text-medium-gray text-left">Careers</li>
          <li className="text-medium-gray text-left">About</li>
        </ul>
        {/* desktop links */}
      </div>

      {/* mobile-menu */}
      {/* overlay */}
      <div
        className={`${
          navStates.menuState.isOpen ? "visible" : "invisible"
        } md:hidden bg-almost-black bg-opacity-80 fixed top-0 left-0 w-full h-screen duration-150 z-10`}
      >
        {/* menu-start */}
        <div
          className={`${
            navStates.menuState.isOpen ? "right-0" : "right-[-100%]"
          } bg-almost-white w-[65%] absolute h-[100%] p-5 duration-75`}
        >
          {/* close MENU button */}
          <button
            className="text-3xl text-right absolute right-5"
            onClick={toggleMenu}
          >
            <GrClose />
          </button>

          {/* mobile-links */}
          <ul className="flex flex-col gap-4 mt-14 justify-between">
            {/* FEATURES */}
            <li className="flex flex-col text-medium-gray text-left ">
              <button
                data-id="feat"
                className="flex items-center hover:text-almost-black"
                onClick={expandOptions}
              >
                Features
                <span>
                  {navStates.menuState.features ? (
                    <MdKeyboardArrowUp />
                  ) : (
                    <MdKeyboardArrowDown />
                  )}
                </span>
              </button>
              {/* sub links */}
              <ul
                className={`mt-3 ml-8 flex flex-col gap-2 ${
                  navStates.menuState.features ? "" : "hidden"
                }`}
              >
                {featureIcons.map((item) => {
                  return (
                    <li
                      key={item.id}
                      className="hover:outline-dotted capitalize flex items-center cursor-pointer"
                    >
                      <span className="mr-2">{item.icon}</span>
                      {item.text}
                    </li>
                  );
                })}
              </ul>
            </li>

            {/* COMPANY */}
            <li className="flex flex-col text-medium-gray text-left ">
              <button
                data-id="comp"
                className="flex items-center hover:text-almost-black"
                onClick={expandOptions}
              >
                Company
                <span>
                  {navStates.menuState.company ? (
                    <MdKeyboardArrowUp />
                  ) : (
                    <MdKeyboardArrowDown />
                  )}
                </span>
              </button>
              {/* sub links */}
              <ul
                className={`mt-3 ml-8 flex flex-col gap-2 ${
                  navStates.menuState.company ? "" : "hidden"
                }`}
              >
                <li className="hover:outline-dotted cursor-pointer">History</li>
                <li className="hover:outline-dotted cursor-pointer">
                  Our Team
                </li>
                <li className="hover:outline-dotted cursor-pointer">Blog</li>
              </ul>
            </li>

            {/*  */}
            <li className="text-medium-gray hover:text-almost-black text-left hover:cursor-pointer">
              Careers
            </li>

            {/*  */}
            <li className="text-medium-gray hover:text-almost-black text-left hover:cursor-pointer">
              About
            </li>
          </ul>

          {/* buttons */}
          <button className="block mx-auto text-medium-gray mt-7 hover:text-almost-black">
            Login
          </button>
          <button className="mt-3 py-2 rounded-lg text-center text-medium-gray border-2 border-almost-black w-[100%] hover:bg-almost-black hover:text-almost-white duration-75">
            Register
          </button>
        </div>
      </div>
      {/* mobile-menu-end*/}

      {/* buttons */}

      {/* hamburger */}
      <button className="text-3xl md:hidden" onClick={toggleMenu}>
        <TbMenu2 />
      </button>
    </nav>
  );
};

export default Navbar;
