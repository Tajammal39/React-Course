import React from "react";
import HeaderSection from "./HeaderSection";
import FilterButton from "../FilterButton/FilterButton";

const TopSection = ({ searchBar, filterFood }) => {
  return (
    <div className="top_container">
      <HeaderSection searchBar={searchBar} />;
      <FilterButton filterFood={filterFood} />
    </div>
  );
};

export default TopSection;
