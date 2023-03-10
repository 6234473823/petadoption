import { Outlet } from "react-router-dom";
import Footer from "./ui/Footer";
import Header from "./ui/Header"; 
import HeaderUser from "./ui/HeaderUser";

const Layout = () => {
  return (
    <>
      {/* <Header /> */}
      <HeaderUser/>
      <Outlet height="100%"/>
      <Footer/>
    </>
  );
};

export default Layout;