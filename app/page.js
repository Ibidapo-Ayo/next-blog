import Header from "./components/navs/nav/Header";
import  GlobalContext from "./context/globalContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import dynamic from "next/dynamic";

const SideBar = dynamic(()=> import("./components/navs/sidebar/SideBar"))

export default function Home() {
  return (
    <GlobalContext>
      <Header />
      <SideBar />
    </GlobalContext>
  );
}