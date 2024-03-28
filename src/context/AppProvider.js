import axios from "axios";
import React, { createContext, useContext } from "react";
import { useEffect, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  const [mealType, setMealType] = useState("all");
  const [favorites, setFavorites] = useState([]);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [localUsername, setLocalUsername] = useState(
    localStorage.getItem("localUsername") || ""
  );
  const [localPassword, setLocalPassword] = useState(
    localStorage.getItem("localPassword") || ""
  );

  const addToFavorites = (recipe) => {
    const isFavorite = favorites.some(
      (favorite) => favorite.label === recipe.label
    );

    if (!isFavorite && isLoggedIn) {
      setFavorites((prevFavorites) => [...prevFavorites, recipe]);
    }
  };

  const clearFavoritesByLogOut = () => {
    if (!isLoggedIn) {
      setFavorites([]);
    }
  };

  useEffect(() => {
    clearFavoritesByLogOut();
  }, [isLoggedIn]);

  const removeFromFavorites = (recipeLabel) => {
    const updatedFavorites = favorites.filter(
      (favorite) => favorite.label !== recipeLabel
    );
    setFavorites(updatedFavorites);
  };

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
    <AppContext.Provider
      value={{
        isLoggedIn,
        isRegistered,
        username,
        password,
        confirmPass,
        localUsername,
        localPassword,
        setIsLoggedIn,
        setIsRegistered,
        setUsername,
        setPassword,
        setConfirmPass,
        setLocalUsername,
        setLocalPassword,
        recipes,
        setRecipes,
        query,
        setQuery,
        setSearch,
        mealType,
        setMealType,
        favorites,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const AppContextComp = () => {
  return useContext(AppContext);
};

export default AppProvider;
