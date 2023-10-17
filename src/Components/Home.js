import { Container, Grid, LinearProgress } from "@mui/material";
import Header from "./Header";
import TabbedContent from "./TabbedContent";
import DelayOfAppellate from "./DelayOfAppellate/DelayOfAppellate";
import Jurisdiction from "./Jurisdiction/Jurisdiction";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useCallback, useEffect, useState } from "react";
import i18next from "i18next";
import { firestore } from "firebase";

const Home = () => {
  const [value, setValue] = useState("delayOfAppellate");
  const [data, setData] = useState({});
  const handleOnChangeValue = (value) => {
    setValue(value);
  };

  const init = useCallback(async () => {
    if (i18next.language) {
      await firestore()
        .collection("judiciary")
        .doc(i18next.language)
        .get()
        .then((querySnapshot) => {
          setData(querySnapshot.data());
        });
    } else {
      setData({});
    }
  }, []);

  useEffect(() => {
    init();
  }, [init]);

  return (
    <>
      <Navbar />
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            {data.introduction && <Header introduction={data.introduction} />}
          </Grid>
          <Grid item xs={12}>
            <TabbedContent onChangeValue={handleOnChangeValue} />
          </Grid>
          <Grid item xs={12}>
            {data.delayOfAppellateData && value === "delayOfAppellate" && (
              <DelayOfAppellate data={data.delayOfAppellateData} />
            )}
          </Grid>
          <Grid item xs={12}>
            {data.jurisdiction && value === "jurisdiction" && (
              <Jurisdiction data={data.jurisdiction} />
            )}
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
