import React, { useEffect, useState } from "react";
import { MainConatiner } from "../../global/styles/globalStyle";
import "./Hero.scss";
import api from "../../utils/api";
const Hero = () => {
  const [background, setBackground] = useState("");

  useEffect(() => {
    api
      .get("/photos/random")
      .then((res) => {
        setBackground(res.data.links.download);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <MainConatiner
      className="heroContainer"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div>
        <h1>Unsplash</h1>
        <span>
          The internet's sources for visuals. <br />
          Powered by creators everywhere
        </span>
      </div>
    </MainConatiner>
  );
};

export default Hero;
