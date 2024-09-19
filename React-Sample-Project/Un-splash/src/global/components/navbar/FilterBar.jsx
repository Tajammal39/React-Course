import React, { useState } from "react";
import "./FilterBar.scss";
// import { Tab } from "./NavBarStyle";
const FilterBar = () => {
  const tempData = ["Wallpaper", "3D Renderers", "Travel", "Nature"];
  const [isSelected, setIsSelected] = useState("Editorial");
  return (
    <div className="filterBarContainer">
      <Tab
        onClick={() => setIsSelected("Editorial")}
        isSelected={isSelected.toLowerCase().match("Editorial".toLowerCase())}
      >
        Editorial
      </Tab>
      <Tab
        onClick={() => setIsSelected("Following")}
        isSelected={isSelected.toLowerCase().match("Following".toLowerCase())}
      >
        Following
      </Tab>
      <hr />
      {tempData.map((item, index) => (
        <Tab
          key={index}
          onClick={() => setIsSelected(item)}
          isSelected={isSelected.toLowerCase().match(item.toLowerCase())}
        >
          {item}
        </Tab>
      ))}
    </div>
  );
};
export default FilterBar;

import styled from "styled-components";

const Tab = styled.span`
  color: ${({ isSelected }) => (isSelected ? "#000000" : "#767676")};
  font-weight: 500;
  user-select: none;
  position: relative;
  cursor: pointer;
  &::after {
    content: "";
    width: 100%;
    border-bottom: 2px solid
      ${({ isSelected }) => (isSelected ? "#000000" : "transparent")};
    position: absolute;
    bottom: 0px;
    left: 0px;
    top: 20px;
  }
`;
