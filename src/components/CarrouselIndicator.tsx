import { Box } from "@mui/material";

function CarouselIndicator() {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: "150px",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        gap: "8px",
      }}
    >
      {[0, 1, 2, 3, 4, 5, 6, 7].map((index) => (
        <Box
          key={index}
          width="10px"
          height="10px"
          borderRadius="50%"
          sx={{
            backgroundColor: index === 0 ? "primary.main" : "grey",
          }}
        />
      ))}
    </Box>
  );
}

export default CarouselIndicator;
