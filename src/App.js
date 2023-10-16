import "./App.css";
import Home from "./components/Home";
import { CssBaseline } from "@mui/material";
import i18next from "i18next";

function App() {
  if (window.location.pathname.split("/")[1] === "ar")
    i18next.changeLanguage("ar");
  else i18next.changeLanguage("en");

  return (
    <>
      <CssBaseline />
      <Home />
    </>
  );
}

export default App;
