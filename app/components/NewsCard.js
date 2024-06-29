import images from "@/constants/images";
import { calculateReadTime } from "@/lib/calculateReadTime";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FiClock, FiMessageSquare } from "react-icons/fi";

const NewsCard = ({
  category,
  title,
  author,
  date,
  comment,
  readTime,
  content,
  postImage,
  id,
}) => {
  const [isHovered, setIsHovered] = useState(null);
  const handleHover = () => {
    setIsHovered(id);
  };
  const handleLeave = () => {
    setIsHovered(null);
  };

  return (
    <div className="w-[260px] flex flex-col space-y-4 h-auto" key={id}>
      <Link href="#">
        <div
          className="w-full relative group overflow-hidden justify-center items-center flex"
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          <img
            src={postImage}
            alt=""
            className="block w-full h-52 transition-transform transform-gpu scale-100 group-hover:scale-110"
            style={{ transition: "transform 0.4s" }}
          />
          {isHovered && (
            <div
              className={`absolute h-52 top-0 w-full bg-black/50 flex justify-end bg-opacity-0 transition-opacity`}
            ></div>
          )}
          <div
            className={`flex space-x-2 h-20 justify-around w-28 absolute bottom-0 items-center text-gray-50 bg-transparent transform transition-all duration-300 ${
              isHovered ? "-translate-y-0" : "translate-y-16"
            }`}
          >
            <p className="text-xs font-semibold flex space-x-1 items-center"><FiClock />  <span>{calculateReadTime(content)}mins</span></p>
            <p className="text-xs font-semibold flex space-x-1 items-center">  <FiMessageSquare />  <span>{comment}</span></p>
          
          </div>
        </div>
      </Link>

      <p className="text-xs text-blue-600 tracking-tight font-semibold uppercase">
        {category}
      </p>
      <Link
        href={"#"}
        className="text-2xl tracking-tight leading-7 font-semibold hover:text-gray-600 text-gray-900 dark:text-gray-50 dark:hover:text-gray-600 no-underline transition-colors duration-200"
      >
        {title}
      </Link>
      <div
        className="text-md line-clamp-4 text-gray-900 dark:text-gray-50"
        dangerouslySetInnerHTML={{ __html: content }}
      />

      <div className="flex space-x-3">
        <div className="w-10 h-10 rounded-full">
          <Image
            src={images.post2}
            alt=""
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div>
          <Link
            href={"#"}
            className="truncate text-[14px] font-medium tracking-tight text-gray-900 dark:text-gray-50 hover:text-gray-600 dark:hover:text-gray-600 no-underline transition-colors duration-200"
          >
            Ibidapo Ayomide
          </Link>
          <p className="truncate text-[12px] tracking-wide text-gray-400 dark:text-gray-50">
            {date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
