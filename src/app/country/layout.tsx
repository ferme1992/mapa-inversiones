import { Box } from "@mui/material";
import Navbar from "../../components/Country/Navbar";
import CountryFooter from "@/components/Country/CountryFooter";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <Box>{children}</Box>
      <CountryFooter />
    </>
  );
}
