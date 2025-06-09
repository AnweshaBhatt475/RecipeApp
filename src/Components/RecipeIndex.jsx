import React from "react";

const RecipeIndex = ({ alphaIndex }) => {
  const alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 
                 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  return (
    <>
      {alpha.map((item, index) => (
        <div className="numBox" key={index} onClick={() => alphaIndex(item)}>
          <h3>{item}</h3>
        </div>
      ))}
    </>
  );
};

export default RecipeIndex;