import Button from "@/app/components/Button";
import { trendingTags } from "@/constants/data/tags";
import { formateDate } from "@/lib/formateDate";
import Image from "next/image";
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
            gettyImageUrl,
            content,
            publishOn,
            commentCount,
          } = post.attributes;
          return (
            <div key={post.id} className="grid grid-cols-[auto,1fr]">
              <div className="w-28 h-20 ">
                {gettyImageUrl ? (
                  <Image src={gettyImageUrl} alt="" width={100} height={100} />
                ) : null}
              </div>
              <div className="">
                <Link href={"#"} className="no-underline text-gray-900 dark:text-gray-50">
                  <h2 className="text-[18px]">{title}</h2>
                </Link>
                <p className="text-gray-900 dark:text-gray-50 text-sm tracking-tight">{formateDate(publishOn)}</p>
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
      <h4 className="text-gray-900 dark:text-gray-50 text-[22px]">Trending</h4>
      <div className="inline space-x-y-2">
        {trendingTags.map((tags, index) => (
          <Button
            variant={"ghost"}
            size={"tags"}
            key={index}
            className={"inline mt-3 ml-1"}
          >
            {tags}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default MainSideBar;
