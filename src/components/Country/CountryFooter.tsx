import React from "react";
import { Box, Typography, Button } from "@mui/material";

const CountryFooter = () => {
  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
        backgroundColor: "#0B3866",
        color: "white",
      }}
    >
      <Typography variant="body2" component="div">
        <img
          src="assets/logo-gobierno.svg"
          alt="Logo"
          style={{ height: "40px" }}
        />
      </Typography>
      <Box>
        <Button color="inherit">Canales de ayuda</Button>
        <Button color="inherit">Términos y condiciones</Button>
        <Button color="inherit">Marco legal</Button>
      </Box>
    </Box>
  );
};

export default CountryFooter;
