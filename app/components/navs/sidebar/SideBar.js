"use client"
import { globalContext } from "../../../context/globalContext";
import Image from "next/image";
import React, { useContext } from "react";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FiInstagram, FiLinkedin } from "react-icons/fi";

const SideBar = () => {
  const { sideBarHandler } = useContext(globalContext);
  const [openSideBar, setOpenSideBar] = sideBarHandler;

  const handleClose = () => setOpenSideBar(false);

  return (
    <Offcanvas show={openSideBar} onHide={handleClose}>
      <Offcanvas.Header className="border-b border-b-gray-200" closeButton>
        <Offcanvas.Title>
        <img src="/next.svg" className="w-20 h-20" alt="Blog Logo" />
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="space-y-5">
      <div className="flex">
      <input type="text" className="outline-none focus:outline-none placeholder:font-normal placeholder:text-xs placeholder:tracking-normal border border-gray-20 px-2 py-3" placeholder="Enter keyword" />
      <button className="text-center px-5 py-3 bg-blue-500 text-white">Search</button>
      </div>
      <div className="">
        <div className="flex space-x-3 items-center">
          <FiInstagram className="text-gray-600 text-md" />
          <p className="text-black mt-3"> Instagram</p>
        </div>
        <div className="flex space-x-3 items-center">
          <FiLinkedin className="text-blue-600 text-md" />
          <p className="text-black mt-3 text-md"> Linkedin</p>
        </div>
      </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default SideBar;
