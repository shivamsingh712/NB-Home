import React from "react";
import { Header, Footer } from "../components/index";
import { Outlet } from "react-router";
const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
