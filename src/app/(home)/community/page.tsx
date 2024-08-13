import { Box, Typography, Stack } from "@mui/material";
import Events from "../../../components/Community/Events";
import Publications from "../../../components/Community/Publications";
import Forum from "../../../components/Community/Forum";
import Academia from "../../../components/Community/Academia";
import Newsletter from "../../../components/Community/Newsletter";

export default function Community() {
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
        bgcolor={"#234F6A"}
        px={20}
      >
        <Typography fontWeight={700} fontSize="40px">
          Comunidad
        </Typography>
        <Typography fontWeight={400} fontSize="28px">
          Construyendo juntos un futuro transparente
        </Typography>
      </Stack>
      <Events />
      <Publications />
      <Forum />
      <Academia />
      <Newsletter />
    </Box>
  );
}
