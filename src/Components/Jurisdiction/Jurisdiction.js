import React from "react";
import { useTranslation } from "react-i18next";
import {
  Paper,
  Typography,
  Grid,
  Box,
  styled,
  Alert,
  Stack,
} from "@mui/material";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
}));

const customListStyle = {
  textAlign: "right",
  direction: "rtl",
  fontFamily: "YourArabicFont", // Replace with the actual font
};

const customListItemStyle = {
  listStyleType: "circle",
  marginLeft: "20px",
};

const Square = styled(Box)(({ theme }) => ({
  width: "300px",
  height: "200px",
  backgroundColor: "#f5f5f5",
  marginBottom: theme.spacing(2),
  padding: theme.spacing(2),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  position: "relative",
  zIndex: 1,
  border: "1px solid red",
  borderRadius: ".5em",
  boxShadow: "0 0 .5em #000",
}));

const Jurisdiction = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Typography
        sx={{
          margin: "10px",
          padding: "10px",
          textAlign: i18n.language === "ar" ? "right" : "left",
        }}
      >
        {t("herspecialty.txt")}
      </Typography>

      <Grid container justify="center">
        <StyledPaper>
          <Typography
            fontWeight="bold"
            fontSize="1.7rem"
            fontFamily="SemiBold"
            sx={{
              textAlign: i18n.language === "ar" ? "right" : "left",
            }}
          >
            {t("herspecialty.ex")}
          </Typography>

          <Typography
            variant="h6"
            sx={{
              fontFamily: "Regular",
            }}
          >
            <ul>
              <li>{t("herspecialty.t1")}</li>
              <li>{t("herspecialty.t2")}</li>
              <li>{t("herspecialty.t3")}</li>
            </ul>
          </Typography>
          <Box width={{ xs: "100%", sm: "60%", md: "15%", display: "flex" }}>
            <img
              src="https://www.shutterstock.com/shutterstock/photos/2116706651/display_1500/stock-photo-close-up-of-gavel-book-and-scales-on-blurry-gray-mock-up-background-law-and-jurisdiction-concept-2116706651.jpg"
              alt="one"
              width="100%"
              height="auto"
            />
          </Box>
        </StyledPaper>

        <Stack
          direction={{
            xs: "column",
            sm: i18n.language === "ar" ? "row-reverse" : "row",
            md: i18n.language === "ar" ? "row-reverse" : "row",
          }}
          width="100%"
          alignItems="center"
          my={4}
        >
          <Box width="85%">
            <Typography
              fontFamily="Regular"
              variant="h6"
              sx={{
                textAlign: i18n.language === "ar" ? "right" : "left",
              }}
            >
              {t("herspecialty.search")}
            </Typography>
          </Box>
        </Stack>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Square>
              <Typography variant="h6">{t("herspecialty.search1")}</Typography>
            </Square>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Square>
              <Typography>{t("herspecialty.search2")}</Typography>
            </Square>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Square>
              <Typography variant="h6">{t("herspecialty.search3")}</Typography>
            </Square>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Square>
              <Typography>{t("herspecialty.search4")}</Typography>
            </Square>
          </Grid>
        </Grid>
      </Grid>

      <Alert
        severity="success"
        sx={{
          margin: "10px",
          padding: "10px",
          textAlign: i18n.language === "ar" ? "right" : "left",
        }}
      >
        {t("herspecialty.alert")}
      </Alert>
    </>
  );
};

export default Jurisdiction;
