import { Box, Typography, Button } from "@mui/material";

function TransparencySection() {
  return (
    <>
      <Box py={7}>
        <Typography variant="h4" align="center" gutterBottom>
          Transparencia e integridad
          <span style={{ fontWeight: "normal" }}> en el uso</span>
        </Typography>
        <Typography variant="h4" align="center" gutterBottom>
          de los recursos públicos
        </Typography>
      </Box>
      <Box padding={2} mb={3} sx={{ backgroundColor: "#EAC84F" }}>
        <Typography variant="h6" align="center">
          Si eres nuevo en MapaInversiones y no sabes cómo comenzar, nosotros te
          ayudamos
        </Typography>
      </Box>
    </>
  );
}

export default TransparencySection;
