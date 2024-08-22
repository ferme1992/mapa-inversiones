"use client";

import React from "react";
import { Box, Typography, Container, Tabs, Tab } from "@mui/material";
import ColumnChart from "@/components/Country/DataVisualization/ColumnChart";
import TreeMap from "@/components/Country/DataVisualization/TreeMap";
import PieChart from "@/components/Country/DataVisualization/PieChart";

// TabPanel component to render content conditionally
function TabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

const DataVisualization = () => {
  const [tabValue, setTabValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Box>
      <Box sx={{ bgcolor: "#0a4d68", color: "white", py: 6 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            fontWeight="bold"
          >
            Visualizador de datos
          </Typography>
          <Typography variant="body1" paragraph>
            Accede a información detallada y actualizada sobre la ejecución de
            obras públicas en tu región y a nivel nacional. Nuestro portal te
            permite seguir de cerca cada proyecto,
            <Typography component="span" fontWeight="bold">
              fomentar la transparencia y participar activamente en el control
              ciudadano.
            </Typography>
          </Typography>
        </Container>
      </Box>
      <Box maxWidth={1200} mx="auto">
        <Tabs
          value={tabValue}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          centered
          sx={{
            "& .MuiTab-root": {
              textTransform: "none",
              fontWeight: "bold",
              fontSize: "1.1rem",
            },
            "& .MuiTabs-indicator": {
              height: "4px",
              backgroundColor: "#0a4d68",
            },
          }}
        >
          <Tab label="Sectores" />
          <Tab label="Estados" />
          <Tab label="Presupuestos" />
        </Tabs>
      </Box>
      <TabPanel value={tabValue} index={0}>
        <TreeMap />
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        <PieChart />
      </TabPanel>
      <TabPanel value={tabValue} index={2}>
        <ColumnChart />
      </TabPanel>
    </Box>
  );
};

export default DataVisualization;
