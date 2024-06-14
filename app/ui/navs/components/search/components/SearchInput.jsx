import React from "react";
import { FiSearch, FiX } from "react-icons/fi";

const SearchInput = () => {
  return (
    <div className="grid grid-cols-[auto,1fr,auto] gap-6 border border-gray-100 px-3 py-3 items-center justify-between">
      <FiSearch className="cursor-pointer dark:text-white" />
      <input
        className="w-full bg-transparent placeholder:font-medium placeholder:text-sm border-0 outline-0 dark:text-gray-100 text-xs"
        placeholder="Enter keyword"
      />
      <FiX className="cursor-pointer dark:text-white" />
    </div>
  );
};

export default SearchInput;
