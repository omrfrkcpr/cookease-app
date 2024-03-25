import axios from "axios";
import React, { createContext, useContext } from "react";
import { useEffect, useState } from "react";

export const RecipeContext = createContext();

const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("chicken");

  const APP_ID = "716bd830";
  const API_KEY = "7445e3656ca5026352eee8a94611c23e";
  const BASE_URL = "https://api.edamam.com/search?";

  const url = `${BASE_URL}&q=${query}&app_id=${APP_ID}&app_key=${API_KEY}
`;

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
  }, [query]);

  return (
    <RecipeContext.Provider value={{ recipes, setRecipes }}>
      {children}
    </RecipeContext.Provider>
  );
};

export const RecipeContextComp = () => {
  return useContext(RecipeContext);
};

export default RecipeProvider;
