"use client";

import React from "react";
import { Box } from "@mui/material";
import { Chart } from "react-google-charts";
import { IProject } from "@/types/Project";

const projectData: IProject[] = require("../../../mockData/dominican-republic-data.json");

function summarizeBySector(projects: IProject[]) {
  const sectorSummary = {};

  projects.forEach((item) => {
    const sector = item.Sector;
    const programmedValue = item.valorprogramado;

    if (!sectorSummary[sector]) {
      sectorSummary[sector] = 0;
    }

    sectorSummary[sector] += programmedValue;
  });

  return sectorSummary;
}

const ColumnChart = () => {
  const sectorSummary = summarizeBySector(projectData);

  const budgetData = [
    ["Sector", "Presupuesto", { role: "style" }],
    ...Object.entries(sectorSummary).map(([sector, budget]) => [
      sector,
      budget,
      "color: #78B8C0",
    ]),
  ];

  return (
    <Box display="flex" justifyContent="center">
      <Chart
        chartType="ColumnChart"
        width="100%"
        height="600px"
        data={budgetData}
      />
    </Box>
  );
};

export default ColumnChart;
