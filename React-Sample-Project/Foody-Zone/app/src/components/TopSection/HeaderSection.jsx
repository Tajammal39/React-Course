import React from "react";
import style from "./headerSection.module.css";
import { Link } from "react-dom";
import FilterButton from "../FilterButton/FilterButton";

const HeaderSection = ({ searchBar }) => {
  return (
    <div className={style.logo_section}>
      <img src="./foody_zone.svg" alt="" />
      <input type="search" placeholder="Search Food..." onChange={searchBar} />
    </div>
  );
};

export default HeaderSection;
