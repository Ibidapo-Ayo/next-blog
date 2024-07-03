"use client";
import NewsCard from "@/app/components/NewsCard";
import { formateDate } from "@/lib/formateDate";
import React, { useEffect, useState } from "react";
import Pagination from "./components/Pagination";
import MainSideBar from "./components/MainSideBar";
import { generateLink } from "@/lib/helper";

const MainPage = ({ posts }) => {
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const handlePageClick = (selected) => {
    setCurrentPage(selected.selected + 1);
  };

  return (
    <div className="grid xl:grid-cols-[1fr,auto] grid-cols-1 mt-7 gap-3 px-10 md:px-20 lg:px-40">
      <div className="w-full">
        <div className="w-full grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          {posts?.data
            .slice(indexOfFirstItem, indexOfLastItem)
            .map((post, index) => {
              const {
                title,
                gettyImageUrl,
                content,
                publishOn,
                commentCount,
              } = post.attributes;

              const { author } = post.relationships;

              const authorData = posts.included.filter(
                (aut) => aut.id === author.data.id
              );
              return (
                <NewsCard
                  title={title}
                  category={post.type}
                  date={() => formateDate(publishOn)}
                  comment={commentCount}
                  id={post.id}
                  content={content}
                  postImage={gettyImageUrl}
                  author={authorData}
                  key={post.id}
                  link={generateLink(title)}
                />
              );
            })}
        </div>
        <Pagination
          totalPages={Math.ceil(posts?.data?.length / itemsPerPage)}
          handlePageClick={handlePageClick}
        />
      </div>
      <div className="lg:w-[300px] md:w-[150px] sm:w-100">
        <MainSideBar latestPosts={posts?.data.slice(0, 3)} />
      </div>
    </div>
  );
};

export default MainPage;
