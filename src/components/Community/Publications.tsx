import React from "react";
import { Box, Grid, Typography, Button, Paper } from "@mui/material";
import Image from "next/image";

const Publications = () => {
  return (
    <Box sx={{ bgcolor: "#f5f5f5", p: 4 }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={7}>
          <Typography variant="h4" gutterBottom>
            Publicaciones
          </Typography>
          <Typography variant="h5" gutterBottom>
            El impacto de MapaRegalías en Colombia
          </Typography>
          <Typography variant="body1" paragraph>
            Este documento analiza el impacto de MapaRegalías en la eficiencia
            de la ejecución de los proyectos de inversión pública en Colombia.
            MapaRegalías es una plataforma en línea que presenta información
            georreferenciada y datos sobre las regalías provenientes del sector
            extractivo.
          </Typography>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#6c757d",
              "&:hover": { bgcolor: "#5a6268" },
            }}
          >
            Ver artículo
          </Button>
        </Grid>
        <Grid item xs={12} md={5}>
          <Paper elevation={3} sx={{ p: 2, maxWidth: 300, ml: "auto" }}>
            <Image
              src="/assets/publication-cover.png"
              alt="Publication cover"
              width={300}
              height={400}
              layout="responsive"
            />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Publications;
