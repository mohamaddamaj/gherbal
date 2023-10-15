import React from "react";
import { Box, Stack, Typography, TextField, Button } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t, i18n } = useTranslation();

  const footerStyles = {
    backgroundColor: "#0C9FC1",
    color: "white",
    textAlign: "center",
    padding: "20px 0",
  };

  const textInputStyles = {
    backgroundColor: "white",
    borderRadius: "7px",
  };

  const subscribeButtonStyles = {
    color: "white",
    backgroundColor: "#252525",
    fontFamily: "Regular",
    borderRadius: "7px",
    marginLeft: "8px", // Adjusted margin for better spacing
  };

  const rightsStyles = {
    backgroundColor: "#252525",
    color: "white",
    padding: "10px 0",
    textAlign: "center",
  };

  return (
    <Stack direction="column">
      <Box sx={footerStyles} height="35vh" mt={6}>
        <Typography
          py={1}
          fontFamily="Medium"
          fontSize={{ xs: "1.1rem", sm: "1.5rem", md: "2rem" }}
        >
          {t("footer.sign")}
        </Typography>
        <Typography
          pb={4}
          fontFamily="Regular"
          fontSize={{ xs: "0.6rem", sm: "0.8rem", md: "1rem" }}
        >
          {t("footer.update")}
        </Typography>
        <Stack direction="row" width="100%" justifyContent="center">
          <TextField
            placeholder={t("footer.placeholder")}
            inputProps={{
              sx: {
                textAlign: i18n.language === "ar" ? "right" : "left",
                "&::placeholder": {
                  textAlign: i18n.language === "ar" ? "right" : "left",
                },
              },
            }}
            sx={textInputStyles}
            width="35%"
          />
          <Button sx={subscribeButtonStyles}>{t("footer.subscribe")}</Button>
        </Stack>
      </Box>
      <Box sx={rightsStyles}>
        <Typography py={2} fontFamily="Regular">
          {t("footer.rights")}
          <br />
          {t("footer.copy")}
        </Typography>
      </Box>
    </Stack>
  );
}
