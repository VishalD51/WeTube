import React from "react";
import Sidebar from "../SideBar";
import "./body.scss";
import { Outlet } from "react-router-dom";
const Body = () => {
  return (
    <div className="body-main">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
