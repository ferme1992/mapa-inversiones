import React from "react";
import { Box, Typography, Container } from "@mui/material";
import FilterSearch from "../../../components/Country/WorksAndProjects/FilterSearch";

const WorksAndProjects = () => {
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
            Proyectos y obras públicas
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
      <FilterSearch />
    </Box>
  );
};

export default WorksAndProjects;
