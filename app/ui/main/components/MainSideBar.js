
import { formateDate } from "@/lib/formateDate";
import Link from "next/link";
import React from "react";

const MainSideBar = ({ latestPosts }) => {
  return (
    <div className="w-100 space-y-3">
      <div className="space-y-2">
        <h4 className="text-gray-900 dark:text-gray-50 text-[22px]">
          Latest News
        </h4>
        {latestPosts.map((post, index) => {
            const {
              title,
              publishedAt,
              urlToImage,
              url
            } = post;
          return (
            <div key={title} className="grid grid-cols-[auto,1fr] gap-3">
              <div className="w-28 h-20 ">
                {urlToImage ? (
                  <img src={urlToImage} alt="" className="w-full h-full" />
                ) : null}
              </div>
              <div className="">
                <Link href={url} target="_blank" className="no-underline text-gray-900 dark:text-gray-50">
                  <h2 className="text-[18px]">{title}</h2>
                </Link>
                <p className="text-gray-900 dark:text-gray-50 text-sm tracking-tight">{formateDate(publishedAt)}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-100 flex">
        <input
          type="text"
          className="outline-none focus:outline-none placeholder:text-md border border-slate-200 px-2 rounded-tl-md rounded-bl-md"
          placeholder="Enter your email"
        />
        <button className="text-center py-3 bg-slate-200 text-gray-900 font-medium tracking-wide text-sm px-2 rounded-tr-md rounded-br-md">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default MainSideBar;
