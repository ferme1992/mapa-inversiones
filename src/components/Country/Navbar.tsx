import NextLink from "next/link";
import { AppBar, Toolbar, Box, Button, Typography, Link } from "@mui/material";

function NavBar() {
  return (
    <AppBar
      position="static"
      color="default"
      sx={{ minHeight: 175, display: "flex", justifyContent: "center" }}
    >
      <Toolbar sx={{ display: "flex", alignItems: "center", mx: 20 }}>
        <Box display="flex" flexGrow={1}>
          <Link href="/" component={NextLink}>
            <img src="/assets/logo-gobierno.svg" alt="Mapa Inversiones" />
          </Link>
        </Box>
        <Box
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
          gap={2.5}
        >
          <Link href="/country/about-us" component={NextLink}>
            <Typography>Nosotros</Typography>
          </Link>
          <Link href="/country/project-map" component={NextLink}>
            <Typography>Proyectos y obras públicas</Typography>
          </Link>
          <Link href="/country/datos-abiertos" component={NextLink}>
            <Typography>Datos abiertos</Typography>
          </Link>
          <Link href="/country/community" component={NextLink}>
            <Typography>Comunidad</Typography>
          </Link>
          <Button variant="contained" color="primary">
            <Typography>Participación ciudadana</Typography>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
