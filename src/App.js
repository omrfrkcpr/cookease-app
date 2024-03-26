import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRouter from "./router/AppRouter";
import { ThemeProvider } from "styled-components";
import RecipeProvider from "./context/RecipeProvider";

const globalStyle = {
  responsiveSmall: "700px",
  responsiveLarge: "1000px",
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
