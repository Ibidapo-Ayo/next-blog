"use client";
import NewsCard from "@/app/components/NewsCard";
import { formateDate } from "@/lib/formateDate";
import React, { useEffect } from "react";
import Pagination from "../navs/components/Pagination";

const MainPage = ({ posts }) => {
  return (
    <div className="grid grid-cols-[1fr,auto] mt-7 gap-8 px-10 lg:px-40">
      <div className="w-full space-y-5">
        <div className="w-full grid grid-cols-3">
          {posts.data.slice(0, 9).map((post, index) => {
            const {
              title,
              gettyImageUrl,
              content,
              publishOn,
              commentCount,
            } = post.attributes;
            return (
              <NewsCard
                title={title}
                category={post.type}
                date={() => formateDate(publishOn)}
                comment={commentCount}
                id={post.id}
                content={content}
                postImage={gettyImageUrl}
              />
            );
          })}
        </div>
        <Pagination posts={posts} />
      </div>
      <div className="w-[200px]">
        <h1>Hello</h1>
      </div>
    </div>
  );
};

export default MainPage;
