import axios from "axios";

const API_URL = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default API_URL;

export const getSearchPosts = (query) => {
  var url = ` everything?q=${query}&apiKey=f1f84bbd0eee4a0488bd18fa69967a45`;
  return API_URL({
    method: "GET",
    url: url,
  });
};
