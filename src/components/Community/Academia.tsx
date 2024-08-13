import { Box, Typography, Grid, Card, CardContent, Chip } from "@mui/material";

function Academia() {
  const courses = [
    {
      tag: "VisualizaciónDeDatos",
      title: "Participación ciudadana y control social",
      description:
        "Explora las mejores prácticas y estrategias para fomentar la participación ciudadana en la fiscalización del gasto público. Este curso te enseñará a involucrar a la comunidad y utilizar sus aportes para mejorar la gestión de recursos públicos.",
    },
    {
      tag: "GestiónPública",
      title: "Herramientas de análisis de datos para la gestión pública",
      description:
        "Aprende a utilizar herramientas avanzadas para analizar y visualizar datos de inversión pública. Desde hojas de cálculo hasta software especializado, desarrollarás capacidades para interpretar datos y tomar decisiones informadas.",
    },
    {
      tag: "AnálisisDeDatos",
      title: "Introducción a la transparencia y datos abiertos",
      description:
        "Descubre los principios fundamentales de la transparencia gubernamental y aprende a utilizar datos abiertos para la investigación y el análisis. Este curso te proporciona las bases necesarias para entender y aplicar prácticas de transparencia en tu entorno.",
    },
  ];

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        Academia
      </Typography>
      <Typography variant="body1" paragraph>
        Fortalece tus habilidades y conocimientos en temas de transparencia,
        datos abiertos y gestión pública. Aprende a tu propio ritmo y con acceso
        a expertos en la materia.
      </Typography>
      <Grid container spacing={3}>
        {courses.map((course, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <Box height={100} position="relative">
                <Box
                  position="absolute"
                  top={10}
                  left={10}
                  width={30}
                  height={30}
                  sx={{
                    bgcolor: "#00BCD4",
                    transform: "rotate(45deg)",
                  }}
                />
                <Box
                  position="absolute"
                  bottom={10}
                  right={10}
                  width={40}
                  height={40}
                  borderRadius="50%"
                  border="2px solid #FFC107"
                />
                <Box
                  position="absolute"
                  top={10}
                  right={10}
                  width={40}
                  height={40}
                  borderRadius="50%"
                  sx={{
                    bgcolor: "#F44336",
                  }}
                />
              </Box>
              <CardContent sx={{ flexGrow: 1 }}>
                <Chip label={course.tag} size="small" sx={{ mb: 2 }} />
                <Typography variant="h6" gutterBottom>
                  {course.title}
                </Typography>
                <Typography variant="body2">{course.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Academia;
