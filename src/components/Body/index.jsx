import React from "react";
import Sidebar from "../SideBar";
import Maincontainer from "../Maincontainer";
import "./body.scss";
const Body = () => {
  return (
    <div className="body-main">
      <Sidebar />
      <Maincontainer />
    </div>
  );
};

export default Body;
