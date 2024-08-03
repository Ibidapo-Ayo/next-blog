"use client";
import { globalContext } from "../../../context/globalContext";
import Image from "next/image";
import React, { useContext } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FiInstagram, FiLinkedin } from "react-icons/fi";
import NavMenu from "../components/NavMenu";
import Link from "next/link"

const SideBar = () => {
  const { sideBarHandler } = useContext(globalContext);
  const [openSideBar, setOpenSideBar] = sideBarHandler;

  const handleClose = () => setOpenSideBar(false);

  return (
    <Offcanvas show={openSideBar} onHide={handleClose}>
      <Offcanvas.Header className="border-b border-b-gray-200" closeButton>
        <Offcanvas.Title>
          <img src="/logo2.svg" className="w-20 h-20" alt="Blog Logo" />
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="space-y-5">
       
       <div className="md:hidden flex">
       <NavMenu />
       </div>
        <div className="">
          <div className="flex space-x-3 items-center">
            <FiLinkedin className="text-blue-600 text-md" />
            <Link href="https://www.linkedin.com/in/ayomide-ibidapo-1912541b4" target="_blank" className="text-black mt-3 text-md"> Linkedin</Link>
          </div>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default SideBar;
