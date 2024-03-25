import React from "react";
import "./App.css";
import AppRouter from "./router/AppRouter";
import { ThemeProvider } from "styled-components";

const globalStyle = {
  // responsive: "750px",
  // shadow: "0 10px 10px rgba(0,0,0,0.15)",
};

function App() {
  return (
    <ThemeProvider theme={globalStyle}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
