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
  const sectorSummary: { [sector: string]: { [etapa: string]: number } } = {};

  dataArray.forEach((item) => {
    const sector = item.Sector;
    const etapa = item.EtapaActual;

    if (!sectorSummary[sector]) {
      sectorSummary[sector] = {};
    }

    if (!sectorSummary[sector][etapa]) {
      sectorSummary[sector][etapa] = 0;
    }

    sectorSummary[sector][etapa] += 1;
  });

  return sectorSummary;
}

const TreeMap = () => {
  const projectData: IProject[] = require("../../../mockData/dominican-republic-data.json");

  const summarizedData = summarizeBySector(projectData);

  const data = [
    ["Location", "Parent", "Cantidad de Proyectos"],
    ["Sectores", null, 0],
    ...Object.entries(summarizedData).flatMap(([sector, etapas]) => [
      [
        sector,
        "Sectores",
        Object.values(etapas).reduce((acc, count) => acc + count, 0),
      ],
      ...Object.entries(etapas).map(([etapa, projectCount]) => [
        `${sector} - ${etapa} - ${projectCount}`,
        sector,
        projectCount,
      ]),
    ]),
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
