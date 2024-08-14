import React from "react";
import { Fab } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";

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
        width={156}
        height={156}
      />
    </Fab>
  );
};

export default FloatingIcon;
