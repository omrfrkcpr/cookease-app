import React from "react";
import Header from "../components/Header";
import { HomePageContainerS } from "../components/styles/ContainerS";
import { RecipeContextComp } from "../context/RecipeProvider";
import { Row, Col } from "react-bootstrap";
import RecipeCard from "../components/RecipeCard";
import Footer from "../components/Footer";

const Home = () => {
  const { recipes } = RecipeContextComp();

  return (
    <HomePageContainerS>
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
      {recipes.length !== 0 && <Footer />}
    </HomePageContainerS>
  );
};

export default Home;
