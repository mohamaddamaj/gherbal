import React, { useState } from "react";
import { Tabs, Tab, Paper, Box } from "@mui/material";
import DelayOfAppeal from "./delayOfapple/DelayOfApple";
import Jurisdiction from "./juridiction/Jurisdiction";

const TabbedContent = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Delay of Appeal" />
        <Tab label="Jurisdiction" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <DelayOfAppeal />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Jurisdiction />
      </TabPanel>
    </div>
  );
};

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && (
        <Paper elevation={3}>
          <Box p={2}>{children}</Box>
        </Paper>
      )}
    </div>
  );
}

export default TabbedContent;
