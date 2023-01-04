import React, { useState } from "react";
import Logo from "../assets/svgs/logo.svg";
import { TbMenu2 } from "react-icons/tb";
import { GrClose } from "react-icons/gr";
import { featureIcons } from "../libs/featureIcons";
import Features from "./nav-menu-opts/Features";
import Company from "./nav-menu-opts/Company";
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
  const [isHovering, setIsHovering] = useState({
    features: false,
    company: false,
  });

  // FUNCTIONS

  const handleMouseEnter = (e) => {
    const id = e.currentTarget.dataset.id;
    if (id === optionsForDropDown.FEAT) {
      setIsHovering((oldState) => {
        let newState = {
          ...oldState,
          features: true,
        };
        return newState;
      });
    }
    if (id === optionsForDropDown.COMPANY) {
      setIsHovering((oldState) => {
        let newState = {
          ...oldState,
          company: true,
        };
        return newState;
      });
    }
  };

  const handleMouseLeave = (e) => {
    const id = e.currentTarget.dataset.id;
    if (id === optionsForDropDown.FEAT) {
      setIsHovering((oldState) => {
        let newState = {
          ...oldState,
          features: false,
        };
        return newState;
      });
    }
    if (id === optionsForDropDown.COMPANY) {
      setIsHovering((oldState) => {
        let newState = {
          ...oldState,
          company: false,
        };
        return newState;
      });
    }
  };

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
      {/* DESKTOP MENU */}

      {/* LOGO AND LINKS SECTION */}
      <div className="flex">
        <img src={Logo} alt="/" className="hover:cursor-pointer md:w-[110px]" />
        {/* DESKTOP MENU LINKS */}
        <ul className="hidden md:flex items-center justify-between px-1 md:gap-x-4 lg:gap-x-8 md:ml-3 lg:ml-14">
          <li
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            data-id={optionsForDropDown.FEAT}
            className="group relative flex items-center hover:cursor-pointer h-full"
          >
            <span className="text-medium-gray hover:text-almost-black">
              Features
            </span>{" "}
            <span>
              {isHovering.features ? (
                <MdKeyboardArrowUp />
              ) : (
                <MdKeyboardArrowDown />
              )}
            </span>
            <Features />
          </li>
          <li
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            data-id={optionsForDropDown.COMPANY}
            className="group relative flex items-center hover:cursor-pointer h-full"
          >
            <span className="text-medium-gray hover:text-almost-black">
              Company
            </span>{" "}
            <span>
              {isHovering.company ? (
                <MdKeyboardArrowUp />
              ) : (
                <MdKeyboardArrowDown />
              )}
            </span>
            <Company />
          </li>
          <li className="text-medium-gray hover:text-almost-black hover:cursor-pointer">
            Careers
          </li>
          <li className="text-medium-gray hover:text-almost-black hover:cursor-pointer">
            About
          </li>
        </ul>
        {/* END LOGO AND LINKS SECTION */}
      </div>

      {/* DESKTOP BTNS */}
      <div className="hidden  md:flex justify-between items-center gap-x-8">
        <button className="text-medium-gray hover:text-almost-black hover:cursor-pointer">
          Login
        </button>
        <button className="px-2 py-1 rounded-lg text-center hover:bg-almost-black hover:text-almost-white border-2 border-almost-black duration-75">
          Register
        </button>
      </div>
      {/* END DESKTOP BTNS */}

      {/* HAMBURGER */}
      <button className="text-3xl md:hidden" onClick={toggleMenu}>
        <TbMenu2 />
      </button>
      {/* END HAMBURGER */}

      {/* END DESKTOP MENU */}

      {/* MOBILE MENU */}
      {/* OVERLAY */}
      <div
        className={`${
          navStates.menuState.isOpen ? "visible" : "invisible"
        } md:hidden bg-almost-black bg-opacity-80 fixed top-0 left-0 w-full h-screen duration-150 z-10`}
      >
        {/* MENU START */}
        <div
          className={`${
            navStates.menuState.isOpen ? "right-0" : "right-[-100%]"
          } bg-almost-white w-[65%] absolute h-[100%] p-5 duration-75 overflow-auto`}
        >
          {/* close MENU button */}
          <button
            className="text-3xl text-right absolute right-5"
            onClick={toggleMenu}
          >
            <GrClose />
          </button>

          {/* LINKS */}
          <ul className="flex flex-col gap-4 mt-14 justify-between">
            {/* FEATURES */}
            <li className="flex flex-col text-medium-gray text-left ">
              <button
                data-id={optionsForDropDown.FEAT}
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
              {/* FEATURES SUBLINKS */}
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
              {/* END FEATURES SUBLINKS */}
            </li>
            {/* END FEATURES */}

            {/* COMPANY */}
            <li className="flex flex-col text-medium-gray text-left ">
              <button
                data-id={optionsForDropDown.COMPANY}
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
              {/* COMPANY SUBLINKS */}
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
              {/* END COMPNAY SUBLINKS */}
            </li>
            {/* END COMPANY */}

            {/*  */}
            <li className="text-medium-gray hover:text-almost-black text-left hover:cursor-pointer">
              Careers
            </li>

            {/*  */}
            <li className="text-medium-gray hover:text-almost-black text-left hover:cursor-pointer">
              About
            </li>
          </ul>

          {/* BUTTONS */}
          <button className="block mx-auto text-medium-gray mt-7 hover:text-almost-black">
            Login
          </button>
          <button className="mt-3 py-2 rounded-lg text-center text-medium-gray border-2 border-almost-black w-[100%] hover:bg-almost-black hover:text-almost-white duration-75">
            Register
          </button>
        </div>
        {/* END LINKS */}
      </div>
      {/* END MOBILE MENU */}
    </nav>
  );
};

export default Navbar;
