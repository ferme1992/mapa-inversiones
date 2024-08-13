"use client";

import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  IconButton,
} from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const testimonials = [
  {
    image: "/assets/avatar-example.png",
    text: "Lorem ipsum dolor sit amet consectetur. Venenatis dolor scelerisque id auctor hendrerit urna fringilla proin.",
    author: "Pellentesque vel ut sollicitudin elit sollicitudin elit",
  },
  {
    image: "/assets/avatar-example.png",
    text: "2Lorem ipsum dolor sit amet consectetur. Venenatis dolor scelerisque id auctor hendrerit urna fringilla proin.",
    author: "2Pellentesque vel ut sollicitudin elit sollicitudin elit",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : testimonials.length - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < testimonials.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <Box px={20} py={7} width="100%" position="relative">
      <Typography variant="h4" gutterBottom>
        Testimonios
      </Typography>
      <Card sx={{ display: "flex", alignItems: "center", p: 2 }}>
        <IconButton onClick={handlePrev} sx={{ position: "absolute", left: 0 }}>
          <ChevronLeft />
        </IconButton>
        <CardContent sx={{ textAlign: "center", maxWidth: 600, mx: "auto" }}>
          <Avatar
            src={testimonials[currentIndex].image}
            sx={{ width: 80, height: 80, mx: "auto", mb: 2 }}
          />
          <Typography variant="body1" paragraph>
            {testimonials[currentIndex].text}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            {testimonials[currentIndex].author}
          </Typography>
        </CardContent>
        <IconButton
          onClick={handleNext}
          sx={{ position: "absolute", right: 0 }}
        >
          <ChevronRight />
        </IconButton>
      </Card>
    </Box>
  );
};

export default TestimonialSlider;
