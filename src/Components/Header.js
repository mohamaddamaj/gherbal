import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation();

  const stackStyles = {
    flexDirection: {
      xs: "column",
      sm: "column",
      md: i18n.language === "ar" ? "row-reverse" : "row",
    },
    width: "100%",
    py: 6,
    spacing: 6,
  };

  const titleStyles = {
    fontFamily: "SemiBold",
    color: "#202020",
    fontWeight: "bold", // Set the font weight to "bold"
    mb: 4,
    variant: "h4", // Change the variant to "h4"
    component: "h1", // Use an <h1> element for the title
    textAlign: i18n.language === "ar" ? "right" : "left",
  };

  const textStyles = {
    fontFamily: "Regular",
    color: "#202020",
    fontSize: "1.1rem",
    lineHeight: "35px",
    textAlign: i18n.language === "ar" ? "right" : "left",
  };
  // console.log(i18n.language);
  return (
    <React.Fragment>
      <Stack sx={stackStyles}>
        <Box width={{ xs: "100%", sm: "100%", md: "50%" }}>
          <Typography variant={titleStyles.variant} sx={titleStyles}>
            {t("header.title")}
          </Typography>
          <Typography sx={textStyles}>{t("header.text1")}</Typography>
          <Typography sx={textStyles}>{t("header.text2")}</Typography>
          <Typography sx={textStyles}>{t("header.text3")}</Typography>
        </Box>
        <Box width={{ xs: "100%", sm: "100%", md: "50%" }}>
          <img
            src="https://cdn.pixabay.com/photo/2017/07/23/17/43/isolated-2532037_1280.png"
            alt="court"
            width="100%"
            height="auto"
            style={{ borderRadius: "7px" }}
          />
        </Box>
      </Stack>
    </React.Fragment>
  );
}
