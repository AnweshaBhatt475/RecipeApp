import React, { useState, useEffect } from "react";
import MealItem from "./MealItem";
import RecipeIndex from "./RecipeIndex";

const getRandomLetter = () => {
  const letters = "BCDEFGHIJKLMNOPQRSTUVWXYZ"; 
  return letters[Math.floor(Math.random() * letters.length)];
};

const Meal = () => {
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);
  const [item, setItem] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    // Generate a random letter when the component mounts
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${getRandomLetter()}`);
  }, []);

  useEffect(() => {
    if (url) {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setItem(data.meals);
          setShow(true);
        });
    }
  }, [url]);

  const searchRecipe = (evt) => {
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
  };

  const setIndex = (alpha) => {
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`);
  };

  return (
    <div className="main">
      <header className="heading">
        <h1>Search Your Food Recipe</h1>
        <p>
          "Discover mouthwatering recipes chosen just for you—every visit brings a new culinary adventure!"  


        </p>
      </header>

      <div className="searchBox">
        <input
          type="search"
          className="search-bar"
          placeholder="Search for a recipe..."
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={searchRecipe}
        />
      </div>

      <section className="container">
        {show ? <MealItem data={item} /> : <p className="not-found">No results found. Try another search.</p>}
      </section>

      <div className="indexContainer">
        <RecipeIndex alphaIndex={(alpha) => setIndex(alpha)} />
      </div>
    </div>
  );
};

export default Meal;