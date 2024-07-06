import { calculateReadTime } from "@/lib/calculateReadTime";
import { formateDate } from "@/lib/formateDate";
import axios from "axios";
import Link from "next/link";

import React, { useEffect, useState } from "react";
import { FiClock } from "react-icons/fi";

const TopRated = ({ searchText }) => {
  const [loading, setLoading] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    if (searchText.trim()) {
      setLoading(true);
      const fetchData = async () => {
        await axios
          .get(
            `https://newsapi.org/v2/everything?q=${searchText}&apiKey=f1f84bbd0eee4a0488bd18fa69967a45`
          )
          .then((res) => {
            setSearchResult(res.data);
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            setLoading(false);
          });
      };

      fetchData();
    }
  }, [searchText]);
  return loading ? (
    <p>Loading</p>
  ) : (
    <div className="space-y-2">
      <div className="-space-y-3">
        {searchResult.length !== 0 && (
          <>
            <p className="text-gray-400 font-medium text-xs tracking-tight">
              Search Results
            </p>
            <h4 className="text-gray-700 dark:text-gray-100 text-[22px]">
              {searchResult.articles.length +
                " results found with that keyword " +
                searchText}
            </h4>
          </>
        )}
      </div>
      <div className="md:grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-16 justify-between items-center mt-4 space-x-4">
        {searchResult.length === 0
          ? ""
          : searchResult?.articles.slice(0, 3).map((search, index) => {
              const {
                title,
                publishedAt,
                urlToImage,
                author,
                content,
                url,
              } = search;

              return (
                <div
                  className="grid xl:grid-cols-[auto,1fr] lg:grid-cols-1 gap-2"
                  key={index}
                >
                  <img
                    src={urlToImage}
                    className="xl:w-[90px] lg:w-full w-full"
                    alt="Images not found"
                  />
                  <div className="space-y-3">
                    <Link
                      href={url}
                      target="_blank"
                      className="text-[15px] font-semibold text-gray-700 dark:text-gray-100 no-underline leading-none w-full hover:text-gray-500 dark:hover:text-gray-400"
                    >
                      {title}
                    </Link>
                    <div className="-space-y-4">
                      <div className="flex items-center space-x-3 w-52">
                        <p className="text-xs font-semibold text-gray-700 no-underline dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-400">
                          NEWS
                        </p>
                        <p className="truncate text-[14px] font-medium tracking-tight text-gray-900 dark:text-gray-50 hover:text-gray-600 dark:hover:text-gray-600 transition-colors duration-200">
                          {author}
                        </p>
                      </div>
                      <div className="flex space-x-3 items-center">
                        <p className="truncate text-xs tracking-tight text-gray-700 no-underline dark:text-gray-300">
                          {formateDate(publishedAt)}
                        </p>
                        <p className="flex items-center space-x-2 text-xs font-semibold text-gray-700 no-underline dark:text-gray-300 ">
                          <FiClock />
                          <span> {calculateReadTime(content)} min</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default TopRated;
