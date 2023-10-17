import React from "react";
import { Typography, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Header({ introduction }) {
  const { t } = useTranslation();
  console.log(introduction);
  return (
    <Grid container spacing={3} marginTop={5}>
      <Grid item xs={12}>
        <Typography variant="h4">{t("appellateCourts")}</Typography>
      </Grid>
      <Grid item xs={8}>
        {introduction.split(";").map((i, index) => (
          <Typography variant="body1" key={`intro-${index}`} gutterBottom>
            {i}
          </Typography>
        ))}
      </Grid>
      <Grid item xs={4}>
        <img
          src="https://cdn.pixabay.com/photo/2017/07/23/17/43/isolated-2532037_1280.png"
          alt="court"
          width="100%"
          height="100%"
        />
      </Grid>
    </Grid>
  );
}
