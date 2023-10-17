import React from "react";
import { useTranslation } from "react-i18next";
import {
  Typography,
  Grid,
  Alert,
  Card,
  CardContent,
  Icon,
} from "@mui/material";
import BlockIcon from "@mui/icons-material/Block";
import GavelIcon from "@mui/icons-material/Gavel";

const Jurisdiction = ({ data }) => {
  const { t } = useTranslation();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h7">{data.description}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Card variant="outlined">
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12} md={8}>
                <Typography variant="h7">
                  {t("jurisdiction.withTheExceptionOf")}
                </Typography>
                <ul>
                  {data.exceptions.map((item, index) => (
                    <li key={`exception-${index}`}>{item}</li>
                  ))}
                </ul>
              </Grid>
              <Grid
                item
                xs={12}
                md={4}
                sx={{ display: "flex", justifyContent: "flex-end" }}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/994/994377.png"
                  alt="one"
                  width="256px"
                  height="256px"
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5">
          {t("jurisdiction.theCourtOfAppealConsiders")}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={3}>
          {data.considerations.map((item, index) => (
            <Grid item xs={12} md={3} key={`considerations-${index}`}>
              <Card
                sx={{
                  borderWidth: "2px",
                  borderStyle: "solid",
                  borderColor: item.color,
                  minHeight: "100%",
                }}
              >
                <CardContent>{item.title}</CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Alert severity="info">
          {t("delayOfAppellate.theCourtOfAppealIsEntitled")}
        </Alert>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5">
          {t("jurisdiction.decisionsOfCourt")}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          {data.decisions.map((item, index) => (
            <Grid item xs={12} md={6} key={`considerations-${index}`}>
              <Card
                variant="outlined"
                sx={{
                  borderWidth: "2px",
                  borderStyle: "1px",
                  minHeight: "100%",
                }}
              >
                <CardContent sx={{ display: "flex", alignItems: "center" }}>
                  {item.title}
                  {index === 0 ? (
                    <BlockIcon
                      sx={{
                        color: "#0c9fc1",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    />
                  ) : index === 1 ? (
                    <GavelIcon
                      sx={{
                        color: "#0c9fc1",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    />
                  ) : null}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Jurisdiction;
