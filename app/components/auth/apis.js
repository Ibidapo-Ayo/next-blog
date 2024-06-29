import axios from "axios";

const API_URL = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default API_URL;

export const getAllPosts = () => {
  var url = `news/v2/list`;
  const headers = {
    "x-rapidapi-key": "89a545c432msh66c883678a71bf2p12beddjsn6b1659ffcf26",
    "x-rapidapi-host": "seeking-alpha.p.rapidapi.com",
  };
  return API_URL({
    method: "GET",
    headers: headers,
    url: url,
    params: {
      size: "40",
      category: "market-news::all",
      number: "1",
    },
  });
};
