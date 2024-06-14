"use client";
import { globalContext } from "../../../context/globalContext";
import React, { useContext } from "react";
import { FiCloudOff, FiMenu, FiSearch } from "react-icons/fi";
import Image from "next/image";
import ModeToggler from "../../theme/Toggler";
import NavMenu from "../components/NavMenu";

const Header = () => {
  const { sideBarHandler } = useContext(globalContext);
  const [openSideBar, setOpenSideBar] = sideBarHandler;
  return (
    <div className="w-full sm:px-20 px-4 grid grid-cols-[auto,1fr,auto] md:grid-cols-[auto,auto,1fr,auto] items-center justify-between border-b border-b-gray-200">
      <div className="w-[50px] flex items-center space-x-3 md:space-x-8">
        <FiMenu
          className="text-2xl cursor-pointer dark:text-white"
          onClick={() => setOpenSideBar(true)}
        />
      </div>
    <div className="w-full md:w-[100px] flex justify-center items-center">
    <img src="/next.svg" className="w-20 h-20 md:w-28 md:h-28" alt="Blog Logo" />
    </div>
      <div className="md:flex hidden">
      <NavMenu />
      </div>
      <div className="w-[100px] flex justify-end items-center space-x-2 md:space-x-5">
        <ModeToggler />
        <FiSearch className="cursor-pointer dark:text-white" />
      </div>
    </div>
  );
};

export default Header;
