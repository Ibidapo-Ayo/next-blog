import React, { useState } from "react";

const Pagination = ({ posts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(posts / 9);

  console.log(totalPages);
  return <div>Pagination</div>;
};

export default Pagination;
