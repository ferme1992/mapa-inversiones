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
          <Link href="/about-us" component={NextLink}>
            <Typography>Nosotros</Typography>
          </Link>
          <Button color="inherit">
            <Typography>Comparación Internacional</Typography>
          </Button>
          <Button color="inherit">
            <Typography>Datos Abiertos</Typography>
          </Button>
          <Link href="/community" component={NextLink}>
            <Typography>Comunidad</Typography>
          </Link>
          <Link href="/community" component={NextLink}>
            <Typography>Canales de ayuda</Typography>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
