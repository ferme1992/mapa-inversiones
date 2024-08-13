import { Box } from "@mui/material";
import Hero from "../../components/Hero";
import CarouselIndicator from "../../components/CarrouselIndicator";
import TransparencySection from "../../components/Home/TransparencySection";
import QuestionBar from "../../components/QuestionBar";
import Benefits from "../../components/Home/Benefits";
import ImageTextSection from "../../components/Home/ImageTextSection";
import MeetCommunitySection from "../../components/Home/MeetCommunity";

export default function Home() {
  return (
    <Box>
      <Hero />
      <CarouselIndicator />
      <TransparencySection />
      <QuestionBar backGroundColor="#00bcd4" />
      <ImageTextSection />
      <MeetCommunitySection />
      <Benefits />
    </Box>
  );
}
