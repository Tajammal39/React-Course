import React from "react";
import "./NavBar.scss";
import unsplashSymbol from "../../../assets/images/unsplash_symbol.png";
import { MdOutlineSearch } from "react-icons/md";
const NavBar = () => {
  return (
    <div className="navBarConatiner">
      <img src={unsplashSymbol} alt="" />
      <form action="">
        <MdOutlineSearch />
        <input type="text" name="" id="" required />
      </form>
      <span>Advertise</span>
      <span>Blog</span>
      <span>Unsplash</span>
    </div>
  );
};

export default NavBar;
