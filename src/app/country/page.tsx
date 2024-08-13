"use client";

import { Box } from "@mui/material";
import Hero from "../../components/Hero";
import CarouselIndicator from "../../components/CarrouselIndicator";
import SearchBar from "../../components/Country/SearchBar";

export default function Country() {
  return (
    <Box>
      <Hero />
      <CarouselIndicator />
      <SearchBar />
    </Box>
  );
}
