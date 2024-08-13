import { Box, Typography, Grid } from "@mui/material";
import Image from "next/image";

function ImageTextSection() {
  return (
    <Box px={20} py={10} sx={{ backgroundColor: "#f5f5f5" }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Box position="relative" width="100%" height="300px">
            <Image
              src="/assets/video-example.png"
              alt="Video Example"
              layout="fill"
              objectFit="cover"
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            Transparencia total en la gestión de recursos Públicos
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Con el uso de herramientas digitales y acceso a información buscamos
            dar una visión 360° del uso de los recursos públicos. Se incluye
            información sobre la planificación y ejecución presupuestaria, los
            proyectos de inversión pública y la contratación pública, teniendo
            como eje transversal la participación ciudadana.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ImageTextSection;
