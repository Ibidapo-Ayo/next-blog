import React, { useEffect, useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import Link from "next/link";

const NavMenu = () => {
  return (
    <ul className="flex w-full flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-5 mt-3">
     <Link href={"/"} className="text-md tracking-tight cursor-pointer md:dark:text-gray-100 text-gray-700 no-underline">News</Link>
    </ul>
  );
};

export default NavMenu;
