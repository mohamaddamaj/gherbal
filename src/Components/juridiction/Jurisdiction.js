import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Paper, Typography, Grid } from "@mui/material";
import "./style.css";

const Jurisdiction = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const [data, setData] = useState({});

  return (
    <Paper elevation={3}>
      <Grid
        container
        direction={isRTL ? "row-reverse" : "row"}
        justify="center"
      >
        <Grid item xs={12}>
          <Typography variant="h5">{t("herspecialty")}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>{t("text")}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1">{t("ex")}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">{t("ex1")}</Typography>
          <Typography>{t("ex2")}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">{t("ex3")}</Typography>
          <Typography>{t("search")}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">{t("search1")}</Typography>
          <Typography>{t("search2")}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">{t("search3")}</Typography>
          <Typography>{t("search4")}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">{t("alert")}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Jurisdiction;
