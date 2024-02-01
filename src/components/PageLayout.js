import React from "react";
import { Outlet } from "react-router-dom";
import ProgressBar from "./ProgressBar";

const PageLayout = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <ProgressBar />
    </>
  );
};

export default PageLayout;
