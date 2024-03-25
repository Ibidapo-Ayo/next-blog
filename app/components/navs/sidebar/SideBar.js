"use client"
import { globalContext } from "../../../context/globalContext";
import Image from "next/image";
import React, { useContext } from "react";
import Offcanvas from 'react-bootstrap/Offcanvas';

const SideBar = () => {
  const { sideBarHandler } = useContext(globalContext);
  const [openSideBar, setOpenSideBar] = sideBarHandler;

  const handleClose = () => setOpenSideBar(false);

  return (
    <Offcanvas show={openSideBar} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          <Image src="/next.svg" alt="Blog Logo" width={40} height={40} />
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        Some text as placeholder. In real life you can have the elements you
        have chosen. Like, text, images, lists, etc.
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default SideBar;
