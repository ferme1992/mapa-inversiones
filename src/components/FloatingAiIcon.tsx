import React from "react";
import { Fab } from "@mui/material";

const FloatingIcon = () => {
  return (
    <Fab
      color="primary"
      aria-label="chat"
      style={{
        position: "fixed",
        bottom: "8rem",
        right: "4rem",
        zIndex: 1000,
      }}
    >
      <img
        src="/assets/botI.svg"
        alt="Mapa Inversiones"
        width={130}
        height={130}
      />
    </Fab>
  );
};

export default FloatingIcon;
