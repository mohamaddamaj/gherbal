import React from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import i18next from "i18next";
import "./App.css";

function App() {
  if (window.location.pathname.split("/")[1] === "ar") {
    i18next.changeLanguage("ar");
    document.body.dir = "rtl";
  } else {
    document.body.dir = "ltr";
    i18next.changeLanguage("en");
  }

  const theme = createTheme({
    palette: {
      primary: {
        main: "#0c9fc1",
      },
    },
    direction: i18next.language === "ar" ? "rtl" : "ltr",
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter basename={i18next.language === "ar" ? "ar" : ""}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
