import React, { useEffect, useState } from "react";
import Navbar from "./navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
