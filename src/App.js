import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppRouter from "./router/AppRouter";
import { ThemeProvider } from "styled-components";
import RecipeProvider from "./context/RecipeProvider";

const globalStyle = {
  // responsive: "750px",
  // shadow: "0 10px 10px rgba(0,0,0,0.15)",
};

function App() {
  return (
    <RecipeProvider>
      <ThemeProvider theme={globalStyle}>
        <AppRouter />
      </ThemeProvider>
    </RecipeProvider>
  );
}

export default App;
