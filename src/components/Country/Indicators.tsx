import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";

const indicators = [
  { label: "APROBADOS", value: 254 },
  { label: "EJECUTADOS", value: 1200 },
  { label: "PARALIZADOS", value: 620 },
  { label: "REEVALUACIÓN", value: 120 },
];

const Indicators = () => {
  return (
    <Box py={7} px={20}>
      <Typography variant="h4" gutterBottom>
        Indicadores
      </Typography>
      <Grid container spacing={2}>
        {indicators.map((indicator, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper
              elevation={3}
              sx={{
                p: 2,
                textAlign: "center",
                borderTop: "4px solid #0a4d68",
              }}
            >
              <Typography
                variant="subtitle2"
                sx={{
                  bgcolor: "#e0e0e0",
                  p: 0.5,
                  borderRadius: 1,
                  display: "inline-block",
                  mb: 1,
                }}
              >
                {indicator.label}
              </Typography>
              <Typography variant="h4">
                {indicator.value.toLocaleString()}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Indicators;
