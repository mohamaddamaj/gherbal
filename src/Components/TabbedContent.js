import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";

import { useTranslation } from "react-i18next";

const TabbedContent = ({ onChangeValue }) => {
  const [value, setValue] = useState("delayOfAppellate");
  const { t } = useTranslation();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    onChangeValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        marginTop: "10px",
        marginBottom: "10px",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="inherit"
        variant="fullWidth"
        aria-label="full width tabs example"
      >
        <Tab label={t("delayOfAppellate.title")} value="delayOfAppellate" />
        <Tab label={t("jurisdiction.title")} value="jurisdiction" />
      </Tabs>
    </Box>
  );
};

export default TabbedContent;
