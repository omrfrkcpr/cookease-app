import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRouter from "./router/AppRouter";
import { ThemeProvider } from "styled-components";
import AppProvider from "./context/AppProvider";

const globalStyle = {
  responsiveExtraSmall: "500px",
  responsiveSmall: "700px",
  responsiveLarge: "1000px",
};

function App() {
  return (
    <AppProvider>
      <ThemeProvider theme={globalStyle}>
        <AppRouter />
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;
