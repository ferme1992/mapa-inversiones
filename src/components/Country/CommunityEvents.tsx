import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
} from "@mui/material";
import Image from "next/image";

const CommunityEvents = () => {
  const events = [
    {
      date: "1 AGO | 10:00 HS",
      title: "Foro Internacional de Transparencia y Gestión Pública",
      type: "FORO",
      description:
        "Únete a líderes y expertos de todo el mundo en un foro dedicado a la transparencia y la gestión eficiente de los recursos públicos. Este evento de dos días incluirá paneles de discusión, talleres interactivos y estudios de caso sobre las mejores prácticas en transparencia gubernamental.",
      action: "¡Quiero participar!",
    },
    {
      date: "1 AGO | 10:00 HS",
      title: "Foro Internacional de Transparencia y Gestión Pública",
      type: "FORO",
      description:
        "Únete a líderes y expertos de todo el mundo en un foro dedicado a la transparencia y la gestión eficiente de los recursos públicos. Este evento de dos días incluirá paneles de discusión, talleres interactivos y estudios de caso sobre las mejores prácticas en transparencia gubernamental.",
      action: "¡Quiero participar!",
    },
    {
      title: "Participación ciudadana y control social",
      type: "CURSO",
      description:
        "Explora las mejores prácticas y estrategias para fomentar la participación ciudadana en la fiscalización del gasto público.",
      action: "Anotarme",
      image: "/path-to-your-image.jpg",
    },
  ];

  return (
    <Box p={3} mx={17}>
      <Typography variant="h4" gutterBottom>
        Comunidad
      </Typography>
      <Grid container spacing={3}>
        {events.map((event, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card>
              <CardContent>
                {event.date && (
                  <Typography variant="subtitle2" color="text.secondary">
                    {event.date}
                  </Typography>
                )}
                <Typography variant="h6" component="div" gutterBottom>
                  {event.title}
                </Typography>
                <Typography variant="overline" display="block" gutterBottom>
                  {event.type}
                </Typography>
                {event.image && (
                  <Box height={200} position="relative" mb={2}>
                    <Image
                      src={event.image}
                      alt={event.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </Box>
                )}
                <Typography variant="body2" color="text.secondary">
                  {event.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="outlined" fullWidth>
                  {event.action}
                </Button>
              </CardActions>
              <CardActions>
                <Button size="small">Compartir</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CommunityEvents;
