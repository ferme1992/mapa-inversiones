import { Box, Typography, Stack } from "@mui/material";

export default function AboutUs() {
  return (
    <Box>
      <Stack
        minHeight={257}
        display="flex"
        justifyContent="center"
        alignItems="flex-start"
        color="white"
        fontSize={40}
        fontWeight="bold"
        px={20}
        bgcolor={"#234F6A"}
      >
        <Typography fontWeight={700} fontSize="40px">
          Nosotros
        </Typography>
        <Typography fontWeight={400} fontSize="28px">
          Construyendo juntos un futuro transparente
        </Typography>
      </Stack>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        py={4}
        px={20}
        minHeight={272}
      >
        <Typography fontWeight={400} fontSize="20px">
          MapaInversiones es una iniciativa del BID que impulsa la transparencia
          del gasto, las inversiones y las contrataciones públicas en América
          Latina y el Caribe, a través de plataformas digitales que integran y
          visualizan datos públicos.
        </Typography>
      </Box>
    </Box>
  );
}
