import React from "react";
import { TfiMenu } from "react-icons/tfi";
import { IoLogoYoutube } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import "./header.scss";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../redux/AppSlice";
const Header = () => {
  const dispatch = useDispatch();

  const handleMenuToggle = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="header-main">
      <div className="menu-logo">
        <TfiMenu size={24} onClick={handleMenuToggle} className="menu" />
        <div className="logo">
          <IoLogoYoutube size={30} color="red" />
          <span className="logo-text">WeTube</span>
        </div>
      </div>
      <div className="search">
        <input placeholder="search" />
        <button>
          <GoSearch />
        </button>
      </div>
      <div className="login">
        <FaUserCircle size={30} />
      </div>
    </div>
  );
};

export default Header;
