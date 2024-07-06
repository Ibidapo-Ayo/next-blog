"use client";
import NewsCard from "@/app/components/NewsCard";
import { formateDate } from "@/lib/formateDate";
import React, { useEffect, useState } from "react";
import Pagination from "./components/Pagination";
import MainSideBar from "./components/MainSideBar";
import { generateLink } from "@/lib/helper";

const MainPage = ({ posts }) => {
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const handlePageClick = (selected) => {
    setCurrentPage(selected.selected + 1);
  };

  return (
    <div className="grid xl:grid-cols-[1fr,auto] grid-cols-1 mt-7 gap-3 px-10 lg:px-20 xl:px-40">
      <div className="w-full">
        <div className="w-full grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          {posts?.articles
            .slice(indexOfFirstItem, indexOfLastItem)
            .map((post, index) => {
              const {
                title,
                description,
                publishedAt,
                urlToImage,
                author,
                content,
                url
              } = post;

              return (
                <NewsCard
                  title={title}
                  category={"News"}
                  date={() => formateDate(publishedAt)}
                  id={title}
                  content={content}
                  description={description}
                  postImage={urlToImage}
                  author={author}
                  key={title}
                  link={generateLink(title)}
                  url={url}
                />
              );
            })}
        </div>
        <Pagination
          totalPages={Math.ceil(posts?.articles.length / itemsPerPage)}
          handlePageClick={handlePageClick}
        />
      </div>
      <div className="lg:w-[300px] md:w-[150px] sm:w-100">
        <MainSideBar latestPosts={posts?.articles.slice(0, 3)} />
      </div>
    </div>
  );
};

export default MainPage;
