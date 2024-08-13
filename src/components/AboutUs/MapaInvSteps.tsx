import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import Image from "next/image";

const MapaInversionesSteps = () => {
  return (
    <Box sx={{ bgcolor: "#f5f5f5", py: 7 }}>
      <Grid container spacing={4} alignItems="center" px={20}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            10 Pasos para implementar MapaInversiones
          </Typography>
          <Typography variant="body1" paragraph>
            Desde la definición de la visión hasta la socialización y
            comunicación, nuestro desarrollo incluye 12 pasos clave: alcance,
            inventario tecnológico, arquitectura, integración y calidad de
            datos, participación ciudadana, construcción y capacitación,
            transferencia, publicación, socialización y estrategias de
            comunicación. Cada etapa asegura un enfoque meticuloso y
            colaborativo para una implementación exitosa y sostenible.
          </Typography>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#0a4d68",
              "&:hover": { bgcolor: "#083f54" },
            }}
          >
            Solicitar información
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ position: "relative", height: 0, paddingTop: "56.25%" }}>
            <Image
              src="/assets/video-example.png"
              alt="10 pasos para la implementación de MapaInversiones"
              layout="fill"
              objectFit="cover"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MapaInversionesSteps;
