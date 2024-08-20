"use client";

import React from "react";
import { Box } from "@mui/material";
import { Chart } from "react-google-charts";
import { IProject } from "@/types/Project";

const options = {
  minColor: "#f00",
  midColor: "#ddd",
  maxColor: "#0d0",
  headerHeight: 15,
  fontColor: "black",
};

function summarizeBySector(dataArray: IProject[]) {
  const sectorSummary = {};

  dataArray.forEach((item) => {
    const sector = item.Sector;
    const executedValue = item.valorejecutado;

    if (!sectorSummary[sector]) {
      sectorSummary[sector] = { totalExecuted: 0, projectCount: 0 };
    }

    sectorSummary[sector].totalExecuted += executedValue;
    sectorSummary[sector].projectCount += 1;
  });

  return sectorSummary;
}

const TreeMap = () => {
  const projectData: IProject[] = require("../../../mockData/dominican-republic-data.json");

  const summarizedData = summarizeBySector(projectData);

  const data = [
    ["Location", "Parent", "Valor Total de proyectos", "Cantidad de Proyectos"],
    ["Sectores", null, 0, 0],
    ...Object.entries(summarizedData).map(
      ([sector, { totalExecuted, projectCount }]) => [
        sector,
        "Sectores",
        totalExecuted,
        projectCount,
      ]
    ),
  ];

  return (
    <Box display="flex" justifyContent="center">
      <Chart
        chartType="TreeMap"
        width="80%"
        height="800px"
        data={data}
        options={options}
      />
    </Box>
  );
};

export default TreeMap;
