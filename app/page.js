import Header from "./ui/navs/nav/Header";
import GlobalContext from "./context/globalContext";
import "bootstrap/dist/css/bootstrap.min.css";
import dynamic from "next/dynamic";
import MainPage from "./ui/main/MainPage";
import axios from "axios";

const SideBar = dynamic(() => import("./ui/navs/sidebar/SideBar"));

const getPosts = async () => {
  const options = {
    method: "GET",
    url: "https://seeking-alpha.p.rapidapi.com/news/v2/list",
    params: {
      size: "40",
      category: "market-news::all",
      number: "1",
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

export default async function Home() {
  const data = await getPosts();
  return (
    <GlobalContext>
      <Header />
      <SideBar />
      <MainPage posts={data} />
    </GlobalContext>
  );
}
