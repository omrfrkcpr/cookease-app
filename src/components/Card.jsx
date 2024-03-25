import React from "react";
import { RecipeCardContainerS } from "./styles/ContainerS";
import { RecipeCardImg } from "./styles/ImageS";
import { Heart } from "@phosphor-icons/react";

const Card = ({ recipe }) => {
  const { label, image } = recipe;
  return (
    <RecipeCardContainerS recipe>
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
    </RecipeCardContainerS>
  );
};

export default Card;
