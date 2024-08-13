import NextLink from "next/link";
import { AppBar, Toolbar, Box, Button, Typography, Link } from "@mui/material";

function NavBar() {
  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Box display="flex" flexGrow={1}>
          <Link href="/" component={NextLink}>
            <img
              src="/assets/mapa-inversiones-header.svg"
              alt="Mapa Inversiones"
            />
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
          <Link href="/country/works-and-projects" component={NextLink}>
            <Typography>Proyectos y obras públicas</Typography>
          </Link>
          <Link href="/country/datos-abiertos" component={NextLink}>
            <Typography>Datos abiertos</Typography>
          </Link>
          <Link href="/country/canales-ayuda" component={NextLink}>
            <Typography>Canales de ayuda</Typography>
          </Link>
          <Button variant="contained" color="primary">
            <Typography>Participa</Typography>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
