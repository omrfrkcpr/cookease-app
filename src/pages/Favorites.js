import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  PageContainerS,
  RecipeCardContainerS,
} from "../components/styles/ContainerS";
import { RecipeCardImg } from "../components/styles/ImageS";
import { RecipeCardBtn } from "../components/styles/ButtonS";
import { Heart } from "@phosphor-icons/react";
import { AppContextComp } from "../context/AppProvider";
import { Col, Row } from "react-bootstrap";

const Favorites = () => {
  const navigate = useNavigate();
  const [, setHeart] = useState(false);
  const { favorites, removeFromFavorites } = AppContextComp();

  const handleUnFavorite = (recipeLabel) => {
    setHeart(false);
    removeFromFavorites(recipeLabel);
  };
  return (
    <PageContainerS>
      <Row
        style={{
          padding: "1rem",
          margin: "0 auto",
          maxWidth: "1600px",
        }}
      >
        {favorites.map((recipe, index) => (
          <Col md={6} lg={4} xxl={3} key={index} style={{ margin: ".5rem 0" }}>
            <RecipeCardContainerS recipe>
              <h4
                style={{
                  height: "50px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {recipe.label}
              </h4>
              <div
                style={{
                  width: "250px",
                  height: "250px",
                  overflow: "hidden",
                  margin: "1rem",
                }}
              >
                <RecipeCardImg src={recipe.image} alt={`${recipe.label}-img`} />
              </div>
              <div className="buttons">
                <RecipeCardBtn
                  onClick={() =>
                    navigate(`/details/${recipe.label}`, { state: { recipe } })
                  }
                >
                  View Details
                </RecipeCardBtn>
                <Heart
                  size={32}
                  color="#e84b11"
                  weight={"fill"}
                  style={{ marginLeft: ".5rem" }}
                  onClick={() => handleUnFavorite(recipe.label)}
                />
              </div>
            </RecipeCardContainerS>
          </Col>
        ))}
      </Row>
    </PageContainerS>
  );
};

export default Favorites;
