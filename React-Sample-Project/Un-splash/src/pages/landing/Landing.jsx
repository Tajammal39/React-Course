import React from "react";
import NavBar from "../../global/components/navbar/NavBar";
import FilterBar from "../../global/components/navbar/FilterBar";
import Hero from "./Hero";
import ImageCollection from "./ImageCollection";

const Landing = () => {
  return (
    <>
      <NavBar />
      <FilterBar />
      <Hero />
      <ImageCollection />
    </>
  );
};

export default Landing;
