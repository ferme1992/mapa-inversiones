import { Box, Typography, TextField, Button, Chip, Grid } from "@mui/material";

function Newsletter() {
  return (
    <Box px={20} py={8} bgcolor="#f0f8ff">
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            Inscríbete a nuestro boletín y entérate de los temas de tu interés
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box component="form" noValidate autoComplete="off">
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              placeholder="example@example.com"
              sx={{ mb: 2 }}
            />
            <Typography variant="subtitle2" gutterBottom>
              Temas de interés
            </Typography>
            <Box mb={2}>
              {["Datos", "Gastos públicos", "Herramientas", "Reportes"].map(
                (topic) => (
                  <Chip
                    key={topic}
                    label={topic}
                    variant="outlined"
                    sx={{ mr: 1, mb: 1 }}
                  />
                )
              )}
            </Box>
            <Button variant="contained" color="primary">
              Enviar
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Newsletter;
