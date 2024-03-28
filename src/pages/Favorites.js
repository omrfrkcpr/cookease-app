import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  PageContainerS,
  RecipeCardContainerS,
  RecipeCardImgContainerS,
} from "../components/styles/ContainerS";
import { RecipeCardImg } from "../components/styles/ImageS";
import { FavoriteBtn, RecipeCardBtn } from "../components/styles/ButtonS";
import { ArrowCircleLeft, Heart } from "@phosphor-icons/react";
import { AppContextComp } from "../context/AppProvider";
import { Col, Row } from "react-bootstrap";
import { RecipeCardH4 } from "../components/styles/HeaderS";

const Favorites = () => {
  const navigate = useNavigate();
  const [, setIsFavorite] = useState(false);
  const { favorites, removeFromFavorites } = AppContextComp();

  const handleUnFavorite = (recipeLabel) => {
    if (window.confirm("Are you sure you want to unfavorite this recipe?")) {
      setIsFavorite(false);
      removeFromFavorites(recipeLabel);
    }
  };
  return (
    <PageContainerS>
      <FavoriteBtn onClick={() => navigate("/home")}>
        <ArrowCircleLeft
          size={48}
          color="#6b675f"
          weight="fill"
          style={{ marginBottom: ".3rem" }}
        />{" "}
        Go Home
      </FavoriteBtn>

      {favorites.length ? (
        <Row
          style={{
            padding: "1rem",
            margin: "0 auto",
            maxWidth: "1600px",
          }}
        >
          {favorites.map((recipe, index) => (
            <Col
              md={6}
              lg={4}
              xxl={3}
              key={index}
              style={{ margin: ".5rem 0" }}
            >
              <RecipeCardContainerS recipe>
                <RecipeCardH4>{recipe.label}</RecipeCardH4>
                <RecipeCardImgContainerS>
                  <RecipeCardImg
                    src={recipe.image}
                    alt={`${recipe.label}-img`}
                  />
                </RecipeCardImgContainerS>
                <div className="buttons">
                  <RecipeCardBtn
                    onClick={() =>
                      navigate(`/details/${recipe.label}`, {
                        state: { recipe },
                      })
                    }
                  >
                    View Details
                  </RecipeCardBtn>
                  <Heart
                    size={32}
                    color="#e84b11"
                    weight={"fill"}
                    style={{ marginLeft: ".5rem", cursor: "pointer" }}
                    onClick={() => handleUnFavorite(recipe.label)}
                  />
                </div>
              </RecipeCardContainerS>
            </Col>
          ))}
        </Row>
      ) : (
        <div
          style={{ textAlign: "center", marginTop: "5rem", color: "#6b675f" }}
        >
          <h3>There is no favorite recipe...</h3>
        </div>
      )}
    </PageContainerS>
  );
};

export default Favorites;
