import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Paper, Typography, Grid } from "@mui/material";

import "./Delay_of_apple.css";

const DelayOfAppeal = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const [data, setData] = useState({});

  return (
    <Paper elevation={3} className="delay-appeal-container">
      <Typography variant="h5" className="delay-appeal-title">
        {isRTL ? data.final : t("final")}
      </Typography>
      <Grid
        container
        direction={isRTL ? "row-reverse" : "row"}
        justify="center"
      >
        <Grid item xs={12}>
          <Typography className="delay-appeal-text">
            {isRTL ? data.p1 : t("p1")}
            <span className="delay-appeal-highlight">
              {isRTL ? data.days : t("days")}
            </span>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className="delay-appeal-text">
            {isRTL ? data.c1 : t("c1")}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className="delay-appeal-text">
            {isRTL ? data.c2 : t("c2")}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className="delay-appeal-text">
            {isRTL ? data.p2 : t("p2")}
            <span className="delay-appeal-highlight">
              {isRTL ? data.month : t("month")}
            </span>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className="delay-appeal-text">
            {isRTL ? data.pc2 : t("pc2")}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className="delay-appeal-text">
            {isRTL ? data.p3 : t("p3")}
            <span className="delay-appeal-highlight">
              {isRTL ? data.months : t("months")}
            </span>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className="delay-appeal-text">
            {isRTL ? data.pc3 : t("pc3")}
          </Typography>
        </Grid>
        <Typography variant="h6" className="delay-appeal-subtitle">
          {isRTL ? data.title2 : t("title2")}
        </Typography>
        <Grid item xs={12}>
          <Typography className="delay-appeal-text">
            {isRTL ? data.tp1 : t("tp1")}
            <span className="delay-appeal-highlight">
              {isRTL ? data.hours : t("hours")}
            </span>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className="delay-appeal-text">
            {isRTL ? data.bullet1 : t("bullet1")}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className="delay-appeal-text">
            {isRTL ? data.tp2 : t("tp2")}
            <span className="delay-appeal-highlight">
              {isRTL ? data.hours2 : t("hours2")}
            </span>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className="delay-appeal-text">
            {isRTL ? data.bullet2 : t("bullet2")}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className="delay-appeal-text">
            {isRTL ? data.alert : t("alert")}
          </Typography>
        </Grid>
        <Typography variant="h6" className="delay-appeal-subtitle">
          {isRTL ? data.title : t("title")}
        </Typography>
        <Grid item xs={12}>
          <Typography className="delay-appeal-text">
            {isRTL ? data.tb1 : t("tb1")}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className="delay-appeal-text">
            {isRTL ? data.tb2 : t("tb2")}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default DelayOfAppeal;
