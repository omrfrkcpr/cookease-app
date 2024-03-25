import React from "react";
import { RecipeContextComp } from "../../context/RecipeProvider";

const RecipeCard = () => {
  const { recipes } = RecipeContextComp();
  return (
    <div>
      {recipes.map((recipe) => (
        <div>{recipe}</div>
      ))}
    </div>
  );
};

export default RecipeCard;
