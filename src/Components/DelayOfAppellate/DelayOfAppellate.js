import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Paper,
  Typography,
  Grid,
  Container,
  styled,
  CssBaseline,
  Alert,
} from "@mui/material";

const StyledPaper = styled(Paper)(({ theme }) => ({
  width: "100%",
  maxWidth: "300px",
  padding: theme.spacing(2),
  margin: "30px",
  marginBottom: theme.spacing(2),
  backgroundColor: "#f2f2f2",
  borderRadius: "8px",
  boxShadow: "0 3px 5px rgba(0, 0, 0, 0.2)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
}));

const StyledContent = styled("div")(({ theme }) => ({
  padding: theme.spacing(2),
}));

const Highlight = styled("span")(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: "bold",
}));

const customListStyle = {
  textAlign: "right",
  direction: "rtl",
  fontFamily: "YourArabicFont",
};

const customListItemStyle = {
  listStyleType: "circle",
  marginLeft: "20px",
};

const DelayOfAppellate = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const [data, setData] = useState({});

  return (
    <Container>
      <Typography variant="h5" sx={{ marginBottom: 2 }}>
        {t("delay.final")}
      </Typography>
      <CssBaseline />
      <Grid container spacing={2}>
        <StyledPaper>
          <StyledContent>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {t("delay.p1")}
              <Highlight>{t("delay.days")}</Highlight>
            </Typography>

            <ul style={customListStyle}>
              <li style={customListItemStyle}>{t("delay.c1")}</li>
              <li style={customListItemStyle}>{t("delay.c2")}</li>
            </ul>
          </StyledContent>
        </StyledPaper>
        <StyledPaper>
          <StyledContent>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {t("delay.p2")}
              <Highlight>{t("delay.month")}</Highlight>
            </Typography>
            <ul style={customListStyle}>
              <li style={customListItemStyle}>{t("delay.pc2")}</li>
            </ul>
          </StyledContent>
        </StyledPaper>
        <StyledPaper>
          <StyledContent>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {t("delay.p3")}
              <Highlight>{t("delay.months")}</Highlight>
            </Typography>
            <ul style={customListStyle}>
              <li style={customListItemStyle}>{t("delay.pc3")}</li>
            </ul>
          </StyledContent>
        </StyledPaper>
        <Typography variant="h5" sx={{ marginBottom: 2 }}>
          {t("delay.title2")}
        </Typography>
        <Grid container spacing={2}>
          <StyledPaper>
            <StyledContent>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {t("delay.tp1")}
                <Highlight>{t("delay.hours")}</Highlight>
              </Typography>
              <ul style={customListStyle}>
                <li style={customListItemStyle}>{t("delay.bullet1")}</li>
              </ul>
            </StyledContent>
          </StyledPaper>
          <StyledPaper>
            <StyledContent>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {t("delay.tp2")}
                <Highlight>{t("delay.hours2")}</Highlight>
              </Typography>
              <ul style={customListStyle}>
                <li style={customListItemStyle}>{t("delay.bullet2")}</li>
              </ul>
            </StyledContent>
          </StyledPaper>
        </Grid>
        <Grid item xs={12}>
          <Alert severity="error" sx={{ margin: "10px", padding: "10px" }}>
            {t("delay.alert")}
          </Alert>
        </Grid>
      </Grid>

      <Typography variant="h6" sx={{ marginTop: 2 }}>
        {t("delay.title3")}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <StyledPaper>
            <StyledContent>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {t("delay.tb1")}
              </Typography>
            </StyledContent>
          </StyledPaper>
        </Grid>
        <Grid item xs={6}>
          <StyledPaper>
            <StyledContent>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {t("delay.tb2")}
              </Typography>
            </StyledContent>
          </StyledPaper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DelayOfAppellate;
