import Header from "./ui/navs/nav/Header";
import GlobalContext from "./context/globalContext";
import "bootstrap/dist/css/bootstrap.min.css";
import dynamic from "next/dynamic";
import MainPage from "./ui/main/MainPage";
import axios from "axios";
import Footer from "./ui/Footer";

const SideBar = dynamic(() => import("./ui/navs/sidebar/SideBar"));

const getPosts = async () => {
  let data = []
  await axios
  .get(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=f1f84bbd0eee4a0488bd18fa69967a45"
  )
  .then((res) => {
    data = res.data
  })
  .catch((err) => {
    console.log(err);
  });

  return data
};

export default async function Home() {
  const data = await getPosts();
  return (
    <GlobalContext>
      <Header />
      <SideBar />
      <MainPage posts={data} />

      <Footer />
    </GlobalContext>
  );
}
