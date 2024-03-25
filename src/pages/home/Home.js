import React from "react";
import Header from "../../components/header/Header";
import { HomePageContainerS } from "../../components/styles/ContainerS";
import RecipeCard from "../../components/recipeCard/RecipeCard";

const Home = () => {
  return (
    <HomePageContainerS>
      <Header />
      <RecipeCard />
    </HomePageContainerS>
  );
};

export default Home;
