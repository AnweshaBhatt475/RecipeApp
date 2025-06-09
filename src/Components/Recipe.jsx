import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Recipe = () => {
  const [item, setItem] = useState(null);
  const [videoId, setVideoId] = useState("");
  const { recipeId } = useParams();

  useEffect(() => {
    if (recipeId !== " ") {
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`)
        .then((res) => res.json())
        .then((data) => {
          setItem(data.meals ? data.meals[0] : null);
        });
    }
  }, [recipeId]);

  useEffect(() => {
    if (item?.strYoutube) {
      const str = item.strYoutube.split("=");
      setVideoId(str[str.length - 1]);
    }
  }, [item]);

  return (
    <>
      {!item ? (
        <p>Loading...</p>
      ) : (
        <div className="content">
          <img src={item.strMealThumb} alt="" />
          <div className="inner-content">
            <h1>{item.strMeal}</h1>
            <h2>{item.strArea} Food</h2>
            <h3>Category {item.strCategory}</h3>
          </div>

          <div className="recipe-details">
            <div className="ingredients">
              <h2>Ingredients</h2>
              {[...Array(8)].map((_, i) => (
                <h4 key={i}>
                  {item[`strIngredient${i + 1}`]}: {item[`strMeasure${i + 1}`]}
                </h4>
              ))}
            </div>
            <div className="instructions">
              <h2>Instructions</h2>
              <h4>{item.strInstructions}</h4>
            </div>
          </div>

          {videoId && (
            <div className="video">
              <iframe
                width="100%"
                height="515"
                title="recipeVideo"
                src={`https://www.youtube.com/embed/${videoId}`}
              ></iframe>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Recipe;