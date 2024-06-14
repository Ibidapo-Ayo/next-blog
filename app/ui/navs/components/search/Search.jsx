import React from "react";
import { FiSearch, FiX } from "react-icons/fi";
import SearchInput from "./components/SearchInput";
import TopRated from "./components/TopRated";

const Search = () => {
  return (
    <div className="absolue  top-16 w-full bg-gray-100 dark:bg-gray-900 sm:px-4 md:px-20 lg:px-40 py-10 h-auto space-y-14">
      <SearchInput />
      <TopRated />
    </div>
  );
};

export default Search;
