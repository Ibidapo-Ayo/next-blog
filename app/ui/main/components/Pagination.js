import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import ReactPaginate from "react-paginate";

const Pagination = ({ totalPages, handlePageClick }) => {
  return (
    <ReactPaginate
      breakLabel={
        <span className="text-gray-900 dark:text-gray-50">...</span>
      }
      nextLabel={
        <span className="w-8 h-8 flex items-center justify-center rounded-md bg-blue-600">
          <FiChevronRight className="text-gray-50" />
        </span>
      }
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      pageCount={totalPages}
      previousLabel={
        <span className="w-8 h-8 flex items-center justify-center rounded-md bg-blue-600 mr-4">
          <FiChevronLeft className="text-gray-50" />
        </span>
      }
      renderOnZeroPageCount={null}
      containerClassName="flex items-center justify-around mt-8 mb-4"
      pageClassName="block border- border-solid w-8 h-8 border-blue-300 hover:bg-blue-600 text-gray-900 hover:text-gray-50  flex items-center justify-center rounded-md mr-4 dark:text-gray-50"
      activeClassName="bg-blue-600 text-white"
      initialPage={1}
    />
  );
};

export default Pagination;
