"use client";

import { Box } from "@mui/material";
import Hero from "../../components/Hero";
import CarouselIndicator from "../../components/CarrouselIndicator";
import SearchBar from "../../components/Country/SearchBar";
import Indicators from "../../components/Country/Indicators";
import ExploreProjects from "../../components/Country/ExploreProjects";
import InstitutionBudgets from "../../components/Country/InstitutionsBudgets";
import CommunityEvents from "../../components/Country/CommunityEvents";

export default function Country() {
  return (
    <Box>
      <Hero />
      <CarouselIndicator />
      <SearchBar />
      <Indicators />
      <ExploreProjects />
      <InstitutionBudgets />
      <CommunityEvents />
    </Box>
  );
}
