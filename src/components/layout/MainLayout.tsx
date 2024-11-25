import React from "react";
import Navbar from "../Navbar/Navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
        {<Navbar />}
        <div>{children}</div>
    </>
  );
};

export default MainLayout;
