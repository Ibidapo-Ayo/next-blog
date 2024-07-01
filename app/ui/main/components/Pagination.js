import React, { useEffect, useState } from "react";

const Pagination = ({ posts, paginate, currentPage, itemsPerPage }) => {
  return (
    <div className="flex justify-center mt-4">
      <button
        className="px-4 py-2 mx-1 bg-gray-200"
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      {Array.from({ length: Math.ceil(posts.data.length / itemsPerPage) }).map(
        (_, index) => (
          <button
            key={index}
            className={`px-4 py-2 mx-1 ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </button>
        )
      )}

      <button
        className="px-4 py-2 mx-1 bg-gray-200"
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === Math.ceil(posts.data.length / itemsPerPage)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
