import React from "react";
import { useTranslation } from "react-i18next";
import {
  Typography,
  Grid,
  Alert,
  Stack,
  Divider,
  Card,
  CardContent,
  Box,
} from "@mui/material";

const RenderFinalJudgementCard = ({ days, title, descriptions }) => {
  const { t } = useTranslation();

  return (
    <Card variant="outlined" sx={{ minHeight: "100%" }}>
      <CardContent>
        <Stack
          divider={<Divider orientation="vertical" flexItem />}
          spacing={1}
        >
          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={3}
          >
            <Box>
              <Typography>{t("delayOfAppellate.delayDays")}</Typography>
              <Typography variant="h3">{days}</Typography>
            </Box>
            <Typography variant="subtitle1">{title}</Typography>
          </Stack>
          <Divider />
          <ul style={{ marginTop: "20px" }}>
            {descriptions.map((i, index) => (
              <li key={`li-${days}-${index}`}>{i}</li>
            ))}
          </ul>
        </Stack>
      </CardContent>
    </Card>
  );
};

const DelayOfAppellate = ({ data }) => {
  const { t } = useTranslation();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h5">
          {t("delayOfAppellate.finalJudgements")}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={3}>
          {data.finalJudgement.map((item, index) => (
            <Grid item xs={12} md={4} key={`finalJudgements-${index}`}>
              <RenderFinalJudgementCard
                title={item.title}
                days={item.days}
                descriptions={item.descriptions}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5">
          {t("delayOfAppellate.decisionOnRevokingOrAccepting")}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={3}>
          {data.decisions.map((item, index) => (
            <Grid
              item
              xs={12}
              md={6}
              key={`decisionOnRevokingOrAccepting-${index}`}
            >
              <RenderFinalJudgementCard
                title={item.title}
                days={item.days}
                descriptions={item.descriptions}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Alert severity="warning">
          {t("delayOfAppellate.theAppealShallBeSubmittedThroughALawyer")}
        </Alert>
      </Grid>
    </Grid>
  );
};

export default DelayOfAppellate;
