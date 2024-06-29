import React, { useContext } from "react";
import SearchInput from "./components/SearchInput";
import TopRated from "./components/TopRated";

const Search = () => {
  return (
    <div className="absolue  top-16 w-full bg-gray-100 dark:bg-gray-800 px-10 lg:px-40 py-10 h-auto space-y-14">
      <SearchInput />
      <TopRated />
    </div>
  );
};

export default Search;
