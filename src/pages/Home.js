import React from "react";
import Header from "../components/Header";
import { PageContainerS } from "../components/styles/ContainerS";
import { AppContextComp } from "../context/AppProvider";
import { Row, Col } from "react-bootstrap";
import RecipeCard from "../components/RecipeCard";

const Home = () => {
  const { recipes } = AppContextComp();

  return (
    <PageContainerS>
      <Header />
      <Row
        style={{
          padding: "1rem",
          margin: "0 auto",
          maxWidth: "1600px",
        }}
      >
        {recipes.map((recipe, index) => (
          <Col md={6} lg={4} xxl={3} key={index} style={{ margin: ".5rem 0" }}>
            <RecipeCard recipe={recipe.recipe} />
          </Col>
        ))}
      </Row>
    </PageContainerS>
  );
};

export default Home;
