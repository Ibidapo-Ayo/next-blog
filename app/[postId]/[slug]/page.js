import React from "react";
import axios from "axios";
import FullNewsPage from "./ui/MainPage";

const getPost = async (postId) => {
  console.log(postId);
  const options = {
    method: "GET",
    url: "https://seeking-alpha.p.rapidapi.com/news/get-details",
    params: {
      id: postId,
    },
    headers: {
      "x-rapidapi-key": "89a545c432msh66c883678a71bf2p12beddjsn6b1659ffcf26",
      "x-rapidapi-host": "seeking-alpha.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const PostPage = async ({ params }) => {
  const { postId } = params;
  const post = await getPost(postId);
  return <FullNewsPage post={post} />;
};

export default PostPage;
