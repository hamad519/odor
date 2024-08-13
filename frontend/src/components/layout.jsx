// src/components/Layout.js
import React from "react";
import TopHeader from "./headers/top_header";
import Footer from "./footer/footer";
import MainHeader from "./headers/main_header";
import ScrollTop from "./scrollTop";

const Layout = ({ children }) => {
  return (
    <>
      <TopHeader />
      <MainHeader/>
      <main>{children}</main>
      <Footer />
      <ScrollTop/>
    </>
  );
};

export default Layout;
