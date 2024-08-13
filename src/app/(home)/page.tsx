import { Box } from "@mui/material";
import Hero from "../../components/Hero";
import CarouselIndicator from "../../components/CarrouselIndicator";
import TransparencySection from "../../components/Home/TransparencySection";
import QuestionBar from "../../components/QuestionBar";
import Benefits from "../../components/Home/Benefits";

export default function Home() {
  return (
    <Box>
      <Hero />
      <CarouselIndicator />
      <TransparencySection />
      <QuestionBar backGroundColor="#00bcd4" />
      <Benefits />
    </Box>
  );
}
