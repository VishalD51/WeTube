import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="sidebar-main">
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscription</li>
      </ul>
      <h1>You</h1>
      <ul>
        <li>Your Channel</li>
        <li>History</li>
        <li>Your video</li>
        <li>Watch Later</li>
      </ul>
      <h1>Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Shopping</li>
        <li>music</li>
        <li>Films</li>
        <li>Live</li>
      </ul>
    </div>
  );
};

export default Sidebar;
