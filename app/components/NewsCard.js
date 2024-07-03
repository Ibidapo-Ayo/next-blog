/* eslint-disable @next/next/no-img-element */
import { calculateReadTime } from "@/lib/calculateReadTime";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FiClock, FiMessageSquare } from "react-icons/fi";

const NewsCard = ({
  category,
  title,
  author,
  date,
  comment,
  content,
  postImage,
  id,
  link,
}) => {
  const [isHovered, setIsHovered] = useState(null);
  const handleHover = () => {
    setIsHovered(id);
  };
  const handleLeave = () => {
    setIsHovered(null);
  };

  return (
    <div className="flex w-100 flex-col space-y-4 h-auto" key={id}>
      <Link href={`/${id}/${link}`}>
        <div className="flex">
          <div
            className="w-full relative group overflow-hidden justify-center items-center flex"
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            <img
              src={postImage}
              alt=""
              className="block w-full md:h-60 h-full transition-transform transform-gpu scale-100 group-hover:scale-110 shrink-0"
              style={{ transition: "transform 0.4s" }}
            />
            {isHovered && (
              <div
                className={`absolute h-60 top-0 w-full bg-black/50 flex justify-end bg-opacity-0 transition-opacity`}
              ></div>
            )}
            <div
              className={`flex space-x-2 h-20 justify-around w-28 absolute bottom-0 items-center text-gray-50 bg-transparent transform transition-all duration-300 ${
                isHovered ? "-translate-y-0" : "translate-y-16"
              }`}
            >
              <p className="text-xs font-semibold flex space-x-1 items-center">
                <FiClock /> <span>{calculateReadTime(content)}mins</span>
              </p>
              <p className="text-xs font-semibold flex space-x-1 items-center">
                {" "}
                <FiMessageSquare /> <span>{comment}</span>
              </p>
            </div>
          </div>
        </div>
      </Link>
      <p className="text-xs text-blue-600 tracking-tight font-semibold uppercase">
        {category}
      </p>
      <Link
        href={`/${id}/${link}`}
        className="text-2xl tracking-tight leading-7 font-semibold hover:text-gray-600 text-gray-900 dark:text-gray-50 dark:hover:text-gray-600 no-underline transition-colors duration-200"
      >
        {title}
      </Link>
      <div
        className="text-md line-clamp-4 text-gray-900 dark:text-gray-50"
        dangerouslySetInnerHTML={{ __html: content }}
      />

      <div className="flex space-x-3">
        <div className="w-10 h-10 rounded-full flex justify-center items-center shrink-0">
          <img
            src={author[0].attributes.image.big}
            alt=""
            className="w-10 h-10 rounded-full"
          />
        </div>
        <div className="shrink-0">
          <Link href={"#"} className="no-underline">
            <p className="truncate text-[14px] font-medium tracking-tight text-gray-900 dark:text-gray-50 hover:text-gray-600 dark:hover:text-gray-600 transition-colors duration-200">
              {author[0].attributes.nick}
            </p>
          </Link>
          <p className="truncate text-[13px] tracking-tight text-gray-400 dark:text-gray-50 -mt-4">
            {date()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
