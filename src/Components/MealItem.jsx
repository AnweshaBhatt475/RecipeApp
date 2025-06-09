import React from "react";
import { useNavigate } from "react-router-dom";

const MealItem = ({ data }) => {
  let navigate = useNavigate();

  return (
    <>
      {data && data.length > 0 ? (
        data.map((item) => (
          <div className="card" key={item.idMeal} onClick={() => navigate(`/${item.idMeal}`)}>
            <img src={item.strMealThumb} alt={item.strMeal} />
            <h3>{item.strMeal}</h3>
          </div>
        ))
      ) : (
        <p className="not-found">No results found. Try another search.</p>
      )}
    </>
  );
};

export default MealItem;