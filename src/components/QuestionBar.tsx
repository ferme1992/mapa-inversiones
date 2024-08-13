"use client";

import React, { FC, useState } from "react";
import {
  Box,
  Select,
  MenuItem,
  Button,
  InputBase,
  SelectChangeEvent,
} from "@mui/material";
import { styled } from "@mui/system";

interface QuestionBarProps {
  backGroundColor: string;
}

const StyledSelect = styled(Select)(({ theme }) => ({
  backgroundColor: "white",
  borderRadius: "4px",
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
}));

const StyledTextField = styled(InputBase)(({ theme }) => ({
  backgroundColor: "white",
  borderRadius: "4px",
  padding: "8px 12px",
  width: "100%",
}));

const QuestionBar: FC<QuestionBarProps> = ({ backGroundColor }) => {
  const [profile, setProfile] = useState("");
  const [question, setQuestion] = useState("");

  const handleProfileChange = (event: SelectChangeEvent<unknown>) => {
    setProfile(event.target.value as string);
  };

  const handleQuestionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(event.target.value);
  };

  const handleSubmit = () => {
    console.log("Profile:", profile, "Question:", question);
    // Handle submission logic here
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        backgroundColor: backGroundColor,
      }}
    >
      <StyledSelect
        value={profile}
        onChange={handleProfileChange}
        displayEmpty
        renderValue={profile !== "" ? undefined : () => "Selecciona tu perfil"}
      >
        <MenuItem value="">Selecciona tu perfil</MenuItem>
        <MenuItem value="ciudadano">Ciudadano</MenuItem>
        <MenuItem value="funcionario">Funcionario</MenuItem>
      </StyledSelect>
      <Box sx={{ flexGrow: 1, display: "flex", gap: 1 }}>
        <StyledTextField
          placeholder="Hazme una pregunta"
          value={question}
          onChange={handleQuestionChange}
          fullWidth
        />
        <Button
          variant="contained"
          onClick={handleSubmit}
          sx={{
            backgroundColor: "white",
            color: "black",
            "&:hover": {
              backgroundColor: "#f0f0f0",
            },
          }}
        >
          Enviar
        </Button>
      </Box>
    </Box>
  );
};

export default QuestionBar;
