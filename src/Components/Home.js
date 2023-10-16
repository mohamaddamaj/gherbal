import { Container } from "@mui/material";
import Header from "./Header";
import Tabs from "./Tabs";
import DelayOfAppellate from "./DelayOfAppellate/DelayOfAppellate";
import Jurisdiction from "./Jurisdiction/Jurisdiction";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useState } from "react";

const Home = () => {
  const [value, setValue] = useState("delayOfAppellate");

  const handleOnChangeValue = (value) => {
    setValue(value);
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="xl">
        <Header />
        <Tabs onChangeValue={handleOnChangeValue} />
        {value === "delayOfAppellate" && <DelayOfAppellate />}
        {value === "jurisdiction" && <Jurisdiction />}
      </Container>
      <Footer />
    </>
  );
};

export default Home;
