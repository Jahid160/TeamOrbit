import Footer from "@/components/MainComponents/Footer/Footer";
import Navbar from "@/components/MainComponents/Navbar/Navbar";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="">{children}</div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
