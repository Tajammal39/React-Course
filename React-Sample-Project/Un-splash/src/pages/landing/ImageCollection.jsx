import React, { useEffect, useRef, useState } from "react";
import api from "../../utils/api";
import { MainConatiner } from "../../global/styles/globalStyle";
import "./ImageCollection.scss";

const ImageCollection = () => {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    api
      .get(`search/photos?query=office&page=${page}`)
      .then((res) => {
        setList([...list, ...res.data.results]);
      })
      .then((error) => {
        console.log(error);
      });
  }, []);

  const loaderDiv = useRef(null);
  useEffect(() => {
    if (list.length > 0) {
      let obs = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setPage((prev = prev + 1));
        }
      });
      obs.observe(loaderDiv.current);
    }
  }, [page]);
  return (
    <div className="imgCollectionContainer">
      {list.map(({ links }, index) => (
        <img key={index} src={links.download} alt="" />
      ))}

      <div ref={loaderDiv}></div>
    </div>
  );
};

export default ImageCollection;
