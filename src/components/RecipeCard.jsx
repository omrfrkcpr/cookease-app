import React from "react";
import { useNavigate } from "react-router-dom";
import { RecipeCardContainerS } from "./styles/ContainerS";
import { RecipeCardImg } from "./styles/ImageS";
import { RecipeCardBtn } from "./styles/ButtonS";

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();

  const { label, image } = recipe;

  return (
    <RecipeCardContainerS>
      <h4
        style={{
          height: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
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
      <RecipeCardBtn
        onClick={() => navigate(`/details/${label}`, { state: { recipe } })}
      >
        View Details
      </RecipeCardBtn>
    </RecipeCardContainerS>
  );
};

export default RecipeCard;
