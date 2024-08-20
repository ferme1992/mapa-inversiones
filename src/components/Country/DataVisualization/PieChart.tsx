"use client";

import React from "react";
import { Box } from "@mui/material";
import { Chart } from "react-google-charts";
import { IProject } from "@/types/Project";

const projectData: IProject[] = require("../../../mockData/dominican-republic-data.json");

const options = {
  title: "Proyectos por Estado de Ejecución",
  pieHole: 0.4,
  is3D: false,
};

function countByStage(projects: IProject[]) {
  const stageSummary = {};

  projects.forEach((item) => {
    const stage = item.EtapaActual;

    if (!stageSummary[stage]) {
      stageSummary[stage] = 0;
    }

    stageSummary[stage] += 1;
  });

  return stageSummary;
}

const PieChart = () => {
  const stageSummary = countByStage(projectData);

  const data = [
    ["Estados", "Proyectos por Estado"],
    ...Object.entries(stageSummary).map(([stage, count]) => [stage, count]),
  ];

  return (
    <Box display="flex" justifyContent="center">
      <Chart
        chartType="PieChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </Box>
  );
};

export default PieChart;
