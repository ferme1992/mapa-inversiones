import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  Chip,
  Grid,
} from "@mui/material";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import PeopleIcon from "@mui/icons-material/People";

const ProjectDetails = () => {
  return (
    <Box p={3}>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        Actualizado el 22 de Julio 2025
      </Typography>

      <Box mb={2}>
        <Button variant="outlined" sx={{ mr: 1 }}>
          Compartir en redes
        </Button>
        <Button variant="outlined">Seguir este proyecto</Button>
      </Box>

      <Card variant="outlined">
        <CardContent>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={2}
          >
            <Typography variant="h5" component="div">
              CDI EN AGUA DE ORO
            </Typography>
            <Chip label="EN EJECUCIÓN" color="success" size="small" />
          </Box>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="body2">
                <strong>Sector:</strong> Arquitectura
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body2">
                <strong>Subsector:</strong> EDIFICIOS PARA ATENCIÓN Y APOYO A
                GRUPOS ESPECÍFICOS
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body2">
                <strong>Responsable:</strong> DIRECCIÓN NACIONAL DE ARQUITECTURA
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="body2">
                <strong>Código Bapin:</strong> 128407
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="body2">
                <strong>Fecha Estimación:</strong> 23/02/2022
              </Typography>
            </Grid>
          </Grid>
        </CardContent>

        <CardActions
          sx={{ bgcolor: "action.hover", justifyContent: "space-around" }}
        >
          <Button startIcon={<PhotoLibraryIcon />}>Galería de fotos</Button>
          <Button startIcon={<PeopleIcon />}>Participación ciudadana</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default ProjectDetails;
