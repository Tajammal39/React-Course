import React, { useEffect, useState } from "react";
import "./App.css";
import TopSection from "./components/TopSection/TopSection";
import FoodCard from "./components/FoodContainer/FoodCard";
export const BASE_URL = "http://localhost:9000";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredData, sentFilteredData] = useState(null);
  const [selectedBtn, setSelectedBtn] = useState("all");

  useEffect(() => {
    const fetchFoodData = async () => {
      try {
        fetch(BASE_URL)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            setData(data);
            sentFilteredData(data);
            setLoading(false);
            console.log(data);
          });
      } catch (error) {
        setError("Unable to fetch data");
      }
    };
    fetchFoodData();
  }, []);

  const filterFood = (type) => {
    if (type.toLowerCase() == "all") {
      sentFilteredData(data);
      setSelectedBtn(type.toLowerCase());
      return;
    }

    const filter = data.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    sentFilteredData(filter);
    setSelectedBtn(type);
  };

  const searchBar = (e) => {
    let searchView = e.target.value;
    if (searchView == null) {
      sentFilteredData(null);
    }
    const filter = data.filter((food) =>
      food.name.toLowerCase().includes(searchView.toLowerCase())
    );
    sentFilteredData(filter);
    console.log(filter);
  };

  if (error) return <div>{error}</div>;
  if (loading) return <div>loading...</div>;

  return (
    <>
      <TopSection searchBar={searchBar} filterFood={filterFood} />
      <FoodCard data={filteredData} />
    </>
  );
};

export default App;
