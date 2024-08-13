import { Box } from "@mui/material";
import Hero from "../../components/Hero";
import CarouselIndicator from "../../components/CarrouselIndicator";
import TransparencySection from "../../components/Home/TransparencySection";
import QuestionBar from "../../components/QuestionBar";

export default function Home() {
  return (
    <Box>
      <Hero />
      <CarouselIndicator />
      <TransparencySection />
      <QuestionBar backGroundColor="#00bcd4" />
    </Box>
  );
}
