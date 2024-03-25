"use client";
import { globalContext } from "../../../context/globalContext";
import React, { useContext } from "react";
import { FiCloudOff, FiMenu } from "react-icons/fi";
import Image from "next/image";

const Header = () => {
  const { sideBarHandler } = useContext(globalContext);
  const [openSideBar, setOpenSideBar] = sideBarHandler;
  return (
    <div className="w-full flex items-center justify-between py-2">
      <div className="sm:w-3/4 flex items-center space-x-3 md:space-x-8">
        <FiMenu
          className="text-2xl cursor-pointer"
          onClick={() => setOpenSideBar(true)}
        />
        <img src="/next.svg" className="w-20 h-20 md:w-28 md:h-28" alt="Blog Logo" />

        <ul className="hidden md:flex flex-row space-x-2 mt-3">
          {["News", "How To & Reviews", "Stories", "Contact Us"].map((menu, index)=>(
            <li key={index} className={`text-md tracking-tight text-dark hover:text-gray-200 cursor-pointer`}>{menu}</li>
          ))}
        </ul>
      </div>
      <div className="w-1/4 grid justify-end">
            <FiCloudOff />
      </div>
    </div>
  );
};

export default Header;
