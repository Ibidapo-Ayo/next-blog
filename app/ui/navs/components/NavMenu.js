import React, { useEffect, useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import Link from "next/link";

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  const dropdownRef = useRef();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <ul className="flex w-full flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-5 mt-3">
      {["News", "How To & Reviews", "Stories", "Contact Us"].map(
        (menu, index) => (
          <div key={index} className="relative">
             <div className="flex space-x-2 items-end">
              <Link
                onMouseEnter={() => menu === "Stories" && handleMouseEnter()}
                key={index}
                className={`text-md tracking-tight cursor-pointer md:dark:text-gray-100 text-gray-700 no-underline`}
                href="/category/stories"
              >
                {menu}
              </Link>
              {menu === "Stories" && <FiChevronDown onClick={()=> setIsOpen(!isOpen)} />}
            </div>
            {isOpen && menu === "Stories" && (
              <div
                className="absolute left-0 top-12 z-50 md:top-16 w-64 bg-gray-100  md:dark:bg-black border border-gray-200 dark:border-gray-800"
                ref={dropdownRef}
                onMouseLeave={handleMouseLeave}
              >
                <div className="py-1 divide-y">
                  {[
                    "Startup",
                    "Cryptocurrency",
                    "Founders",
                    "Cybersecurity",
                  ].map((stories, index) => (
                    <Link
                      key={index}
                      href={`/category/${stories.toLowerCase()}`}
                      className="block px-4 py-2 hover:text-gray-700 text-xs text-gray-700 no-underline md:dark:text-gray-100"
                    >
                      {stories}
                    </Link>
                  ))}
                </div>
              </div>
            )}
            </div>
        )
      )}
    </ul>
  );
};

export default NavMenu;
