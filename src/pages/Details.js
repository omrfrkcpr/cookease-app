import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { DetailCardContainerS } from "../components/styles/ContainerS";

const Details = () => {
  const {
    state: { recipe },
  } = useLocation();
  const navigate = useNavigate();

  const { label, calories, image, ingredients } = recipe;

  return (
    <DetailCardContainerS>
      <img src={image} alt={`${label}-img`} />
      <h1>{label}</h1>
      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>Calorie = {Math.trunc(calories)}</p>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </DetailCardContainerS>
  );
};

export default Details;
