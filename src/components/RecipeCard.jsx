import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RecipeCardContainerS } from "./styles/ContainerS";
import { RecipeCardImg } from "./styles/ImageS";
import { RecipeCardBtn } from "./styles/ButtonS";
import { Heart } from "@phosphor-icons/react";
import { AppContextComp } from "../context/AppProvider";

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();
  const [heart, setHeart] = useState(false);
  const { isLoggedIn, addToFavorites, removeFromFavorites } = AppContextComp();

  const { label, image } = recipe;

  const handleFavorite = () => {
    setHeart(true);
    addToFavorites(recipe);
  };

  const handleUnFavorite = () => {
    setHeart(false);
    removeFromFavorites(recipe.label);
  };

  const handleViewRecipe = () => {
    if (isLoggedIn) {
      navigate(`/details/${label}`, { state: { recipe } });
    } else {
      navigate("/login");
    }
  };

  return (
    <RecipeCardContainerS recipe>
      <h4
        style={{
          height: "80px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          borderBottom: "2px solid black",
        }}
      >
        {label}
      </h4>
      <div
        style={{
          width: "250px",
          height: "250px",
          overflow: "hidden",
          margin: "1rem",
        }}
      >
        <RecipeCardImg src={image} alt={`${label}-img`} />
      </div>
      <div className="buttons">
        <RecipeCardBtn onClick={handleViewRecipe}>View Recipe</RecipeCardBtn>
        {heart ? (
          <Heart
            size={32}
            color="#e84b11"
            weight={"fill"}
            style={{ marginLeft: ".5rem" }}
            onClick={(e) => handleUnFavorite(e)}
          />
        ) : (
          <Heart
            size={32}
            color="#e84b11"
            weight={"regular"}
            style={{ marginLeft: ".5rem" }}
            onClick={(e) => handleFavorite(e)}
          />
        )}
      </div>
    </RecipeCardContainerS>
  );
};

export default RecipeCard;
