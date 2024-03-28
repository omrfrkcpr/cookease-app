import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  RecipeCardContainerS,
  RecipeCardImgContainerS,
} from "./styles/ContainerS";
import { RecipeCardImg } from "./styles/ImageS";
import { RecipeCardBtn } from "./styles/ButtonS";
import { Heart } from "@phosphor-icons/react";
import { AppContext } from "../context/AppProvider";
import { RecipeCardH4 } from "./styles/HeaderS";

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);
  const { favorites, isLoggedIn, addToFavorites, removeFromFavorites } =
    useContext(AppContext);

  useEffect(() => {
    // After every new search check recipe.label in favorites array to get filled or regular Heart icon
    const isRecipeFavorite = favorites.some(
      (fav) => fav.label === recipe.label
    );
    setIsFavorite(isRecipeFavorite);
  }, [favorites, recipe.label]);

  const { label, image } = recipe;

  const handleFavorite = () => {
    if (isLoggedIn) {
      setIsFavorite(true);
      addToFavorites(recipe);
    } else {
      navigate("/login");
    }
  };

  const handleUnFavorite = () => {
    setIsFavorite(false);
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
      <RecipeCardH4>{label}</RecipeCardH4>
      <RecipeCardImgContainerS>
        <RecipeCardImg src={image} alt={`${label}-img`} />
      </RecipeCardImgContainerS>
      <div className="buttons">
        <RecipeCardBtn onClick={handleViewRecipe}>View Recipe</RecipeCardBtn>
        {isFavorite ? (
          <Heart
            size={32}
            color="#e84b11"
            weight={"fill"}
            style={{ marginLeft: ".5rem", cursor: "pointer" }}
            onClick={handleUnFavorite}
          />
        ) : (
          <Heart
            size={32}
            color="#e84b11"
            weight={"regular"}
            style={{ marginLeft: ".5rem", cursor: "pointer" }}
            onClick={handleFavorite}
          />
        )}
      </div>
    </RecipeCardContainerS>
  );
};

export default RecipeCard;
