import "./App.css";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:lang" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
