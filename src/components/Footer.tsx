import { Box, Container, Typography, IconButton, Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Image from "next/image";

function Footer() {
  return (
    <Box component="footer" bgcolor="#003366" color="white" py={3} px={7}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
      >
        <Box display="flex" gap={2}>
          <IconButton color="inherit" aria-label="Facebook">
            <FacebookIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="Twitter">
            <XIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="Instagram">
            <InstagramIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="LinkedIn">
            <LinkedInIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="YouTube">
            <YouTubeIcon />
          </IconButton>
        </Box>
        <Box display="flex" alignItems="center" gap={2}>
          <Typography variant="body2">
            © 2021 Awesome Website. All rights reserved.
          </Typography>
          <Link href="#" color="inherit" underline="hover">
            Términos y condiciones
          </Link>
        </Box>
        <Box width={105} height={42} position="relative">
          <Image
            src="/assets/bid-logo.png"
            alt="BID Logo"
            fill
            style={{objectFit:"contain"}}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
