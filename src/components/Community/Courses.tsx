import { Box, Typography, Grid, Button, Stack } from "@mui/material";
import EventCard from "../Home/EventCard";

function Courses() {
  const courses = [
    {
      date: "1 AGO | 10:00 HS",
      type: "CURSO",
      organizer: "",
      title: "Participación ciudadana y control social",
      description:
        "Explora las mejores prácticas y estrategias para fomentar la participación ciudadana en la fiscalización del gasto público. Este curso te enseñará a involucrar a la comunidad y utilizar sus aportes para mejorar la gestión de recursos públicos.",
    },
    {
      date: "1 AGO | 10:00 HS",
      type: "CURSO",
      organizer: "",
      title: "Participación ciudadana y control social",
      description:
        "Aprende a utilizar herramientas avanzadas para analizar y visualizar datos de inversión pública. Desde hojas de cálculo hasta software especializado, desarrollarás capacidades para interpretar datos y tomar decisiones informadas.",
    },
    {
      date: "1 AGO | 10:00 HS",
      type: "CURSO",
      organizer: "",
      title: "Participación ciudadana y control social",
      description:
        "Descubre los principios fundamentales de la transparencia gubernamental y aprende a utilizar datos abiertos para la investigación y el análisis. Este curso te proporciona las bases necesarias para entender y aplicar prácticas de transparencia en tu entorno.",
    },
  ];

  return (
    <Box px={20} py={8}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h4" gutterBottom>
          Cursos
        </Typography>
        <Button variant="text" color="primary">
          <Typography fontWeight={700} fontSize={14}>
            Ver todos
          </Typography>
        </Button>
      </Stack>
      <Typography variant="body1" paragraph>
        Fortalece tus habilidades y conocimientos en temas de transparencia,
        datos abiertos y gestión pública. Aprende a tu propio ritmo y con acceso
        a expertos en la materia.
      </Typography>
      <Grid container spacing={3}>
        {courses.map((course, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: "flex" }}>
            <EventCard event={course} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Courses;
