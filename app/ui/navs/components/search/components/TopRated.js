import Button from "@/app/components/Button";
import { searchData } from "@/constants/data/dummyData";
import { searchTags } from "@/constants/data/tags";
import { generateLink, generateLowerCase } from "@/lib/helper";
import Image from "next/image";
import Link from "next/link";

import React from "react";
import { FiClock, FiMessageSquare } from "react-icons/fi";

const TopRated = () => {
  return (
    <div className="space-y-2 hidden md:block">
      <div className="-space-y-3">
        <p className="text-gray-400 font-medium text-xs tracking-tight">
          Hand-Picked
        </p>
        <h4 className="text-gray-700 dark:text-gray-100 text-[22px]">
          Top-Read Stories
        </h4>
      </div>
      <div className="md:grid grid-cols-3 gap-16 justify-between items-center mt-4 space-x-4 hidden">
        {searchData.map((search, index) => {
          return (
            <div className="grid grid-cols-[auto,1fr] gap-2" key={index}>
              <Image
                src={search.image}
                className="w-[90px]"
                alt="Images not found"
              />
              <div className="space-y-3">
                <Link
                  href={`${generateLink(search.title)}`}
                  className="text-[15px] font-semibold text-gray-700 dark:text-gray-100 no-underline leading-none w-full hover:text-gray-500 dark:hover:text-gray-400"
                >
                  {search.title}
                </Link>
                <div className="-space-y-4">
                  <div className="flex items-center space-x-3 w-52">
                    <p className="text-xs">
                      <Link
                        href={`/category/${generateLowerCase(search.category)}`}
                        className="font-semibold text-gray-700 no-underline dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-400"
                      >
                        {search.category}
                      </Link>
                    </p>
                    <p className="text-xs">
                      <Link
                        href={`/author/${generateLowerCase(search.author)}`}
                        className="font-semibold no-underline text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-400"
                      >{`by ${search.author}`}</Link>
                    </p>
                    <p
                      href={"#"}
                      className="text-xs font-semibold no-underline text-gray-700 dark:text-gray-300 mt-1"
                    >
                      {search.date}
                    </p>
                  </div>
                  <div className="flex space-x-3 items-center">
                    <p className="flex items-center space-x-2 text-xs font-semibold text-gray-700 no-underline dark:text-gray-300 ">
                      <FiClock />
                      <span> {search.readTime}</span>
                    </p>
                    <p className="flex items-center space-x-2  text-xs font-semibold text-gray-700 no-underline dark:text-gray-300 ">
                      <FiMessageSquare />
                      <span>
                        {search.comment.length === 0
                          ? "No comments"
                          : `${search.comment.length} comments`}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 space-y-5">
        <div className="-space-y-3">
          <p className="text-gray-400 font-medium text-xs tracking-tight">
            Trending
          </p>
          <h4 className="text-gray-700 dark:text-gray-100 text-[22px]">Tags</h4>
        </div>
        <div className="flex space-x-4">
          {searchTags.map((tags, index) => (
            <Button
              variant={"ghost"}
              size={"tags"}
              key={index}
            >
              {tags}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopRated;
