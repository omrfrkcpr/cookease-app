import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RecipeCardContainerS } from "./styles/ContainerS";
import { RecipeCardImg } from "./styles/ImageS";
import { RecipeCardBtn } from "./styles/ButtonS";
import { Heart } from "@phosphor-icons/react";
import { RecipeContextComp } from "../context/RecipeProvider";

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();
  const [heart, setHeart] = useState(false);
  const { favorites, setFavorites } = RecipeContextComp();

  const { label, image } = recipe;

  const handleFavorite = () => {
    setHeart(true);
    // const updatedFavorites = favorites || [];
    // updatedFavorites.push({ label, image });
    // setFavorites(updatedFavorites);
  };

  const handleUnFavorite = () => {
    setHeart(false);
    // const updatedFavorites = favorites.filter((item) => item.label !== label);
    // setFavorites(updatedFavorites);
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
        <RecipeCardBtn
          onClick={() => navigate(`/details/${label}`, { state: { recipe } })}
        >
          View Details
        </RecipeCardBtn>
        {heart ? (
          <Heart
            size={32}
            color="#e84b11"
            weight={"fill"}
            style={{ marginLeft: ".5rem" }}
            onClick={handleUnFavorite}
          />
        ) : (
          <Heart
            size={32}
            color="#e84b11"
            weight={"regular"}
            style={{ marginLeft: ".5rem" }}
            onClick={handleFavorite}
          />
        )}
      </div>
    </RecipeCardContainerS>
  );
};

export default RecipeCard;
