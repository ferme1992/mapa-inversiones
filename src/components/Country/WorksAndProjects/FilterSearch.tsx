import React from "react";
import {
  Box,
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const FilterSearch = () => {
  const filters = [
    { name: "Tipología", options: ["Option 1", "Option 2", "Option 3"] },
    { name: "Categoría", options: ["Category 1", "Category 2", "Category 3"] },
    {
      name: "Subcategoría",
      options: ["Subcategory 1", "Subcategory 2", "Subcategory 3"],
    },
    { name: "Estado", options: ["Active", "Inactive", "Pending"] },
    { name: "Año", options: ["2022", "2023", "2024"] },
  ];

  return (
    <Box px={20} py={8}>
      <Typography variant="h5" gutterBottom>
        Búsqueda de proyectos
      </Typography>
      <Grid container spacing={2}>
        {filters.map((filter) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={filter.name === "Subcategoría" ? 12 : 6}
            key={filter.name}
          >
            <FormControl fullWidth size="small">
              <InputLabel id={`${filter.name}-label`}>{filter.name}</InputLabel>
              <Select
                labelId={`${filter.name}-label`}
                id={`${filter.name}-select`}
                label={filter.name}
                defaultValue=""
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {filter.options.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FilterSearch;
