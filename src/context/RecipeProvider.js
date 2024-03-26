import axios from "axios";
import React, { createContext, useContext } from "react";
import { useEffect, useState } from "react";

export const RecipeContext = createContext();

const RecipeProvider = ({ children }) => {
  // for register page and PrivateRouter
  const [mainUsername, setMainUsername] = useState("");
  const [mainPassword, setMainPassword] = useState("");

  // for login page
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  const [mealType, setMealType] = useState("all");
  // const [favorites, setFavorites] = useState([]);

  const APP_ID = "716bd830";
  const API_KEY = "7445e3656ca5026352eee8a94611c23e";
  const BASE_URL = "https://api.edamam.com/search?";

  const url = `${BASE_URL}&q=${search}&app_id=${APP_ID}&app_key=${API_KEY}${
    mealType === "all" ? "" : `&mealType=${mealType}`
  }`;

  const getRecipes = async () => {
    try {
      const response = await axios.get(url);

      if (response.status !== 200) {
        console.log("Network is not ok");
        return;
      }
      setRecipes(response.data.hits);
      console.log(recipes);
    } catch (err) {
      console.log("Something went wrong!", err);
    }
  };

  useEffect(() => {
    getRecipes();
  }, [search, mealType]);

  return (
    <RecipeContext.Provider
      value={{
        username,
        setUsername,
        password,
        setPassword,
        mainUsername,
        setMainUsername,
        mainPassword,
        setMainPassword,
        recipes,
        setRecipes,
        query,
        setQuery,
        setSearch,
        mealType,
        setMealType,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export const RecipeContextComp = () => {
  return useContext(RecipeContext);
};

export default RecipeProvider;
