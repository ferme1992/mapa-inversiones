"use client";

import React, { useState } from "react";
import { Box, Typography, Container } from "@mui/material";
import FilterSearch from "@/components/Country/WorksAndProjects/FilterSearch";
import dynamic from "next/dynamic";
import ProjectsTable from "@/components/Country/WorksAndProjects/ProjectsTable";

const Map = dynamic(() => import("../../../components/Country/Map/Map"), {
  loading: () => "Loading...",
  ssr: false,
});

const WorksAndProjects = () => {
  const [locations, setLocations] = useState([
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-70.3389823, 19.039363],
      },
      properties: {
        IdGeorreferencia: 1,
        NombreReferencia: "010901",
        FechaUltimaModificacion: "2022-09-25T21:12:48.53",
        ConsecutivoCarga: 0,
        Modificadopor: "Administrador",
        idProyecto: 339,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-69.96172, 18.55539],
      },
      properties: {
        IdGeorreferencia: 2,
        NombreReferencia: "010901",
        FechaUltimaModificacion: "2022-09-25T21:12:48.53",
        ConsecutivoCarga: 0,
        Modificadopor: "Administrador",
        idProyecto: 3136,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-71.531688, 19.757416],
      },
      properties: {
        IdGeorreferencia: 3,
        NombreReferencia: "010901",
        FechaUltimaModificacion: "2022-09-25T21:12:48.53",
        ConsecutivoCarga: 0,
        Modificadopor: "Administrador",
        idProyecto: 4375,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-70.326904, 18.485533],
      },
      properties: {
        IdGeorreferencia: 4,
        NombreReferencia: "010901",
        FechaUltimaModificacion: "2022-09-25T21:12:48.53",
        ConsecutivoCarga: 0,
        Modificadopor: "Administrador",
        idProyecto: 5017,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-68.97317580001412, 18.431243527775674],
      },
      properties: {
        IdGeorreferencia: 5,
        NombreReferencia: "010901",
        FechaUltimaModificacion: "2022-09-25T21:12:48.53",
        ConsecutivoCarga: 0,
        Modificadopor: "Administrador",
        idProyecto: 5081,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-68.97317580001412, 18.431243527775674],
      },
      properties: {
        IdGeorreferencia: 6,
        NombreReferencia: "010901",
        FechaUltimaModificacion: "2022-09-25T21:12:48.53",
        ConsecutivoCarga: 0,
        Modificadopor: "Administrador",
        idProyecto: 5081,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-68.9731, 18.4312],
      },
      properties: {
        IdGeorreferencia: 7,
        NombreReferencia: "010902",
        FechaUltimaModificacion: "2022-09-26T10:15:30.00",
        ConsecutivoCarga: 1,
        Modificadopor: "Usuario1",
        idProyecto: 5081,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-68.9732, 18.4313],
      },
      properties: {
        IdGeorreferencia: 8,
        NombreReferencia: "010903",
        FechaUltimaModificacion: "2022-09-27T11:20:00.00",
        ConsecutivoCarga: 2,
        Modificadopor: "Usuario2",
        idProyecto: 5081,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-68.9733, 18.4311],
      },
      properties: {
        IdGeorreferencia: 9,
        NombreReferencia: "010904",
        FechaUltimaModificacion: "2022-09-28T12:25:00.00",
        ConsecutivoCarga: 3,
        Modificadopor: "Usuario3",
        idProyecto: 5081,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-68.9734, 18.4314],
      },
      properties: {
        IdGeorreferencia: 10,
        NombreReferencia: "010905",
        FechaUltimaModificacion: "2022-09-29T13:30:00.00",
        ConsecutivoCarga: 4,
        Modificadopor: "Usuario4",
        idProyecto: 5081,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-69.96172, 18.55539],
      },
      properties: {
        IdGeorreferencia: 11,
        NombreReferencia: "010901",
        FechaUltimaModificacion: "2022-09-25T21:12:48.53",
        ConsecutivoCarga: 0,
        Modificadopor: "Administrador",
        idProyecto: 3136,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-69.96272, 18.55639],
      },
      properties: {
        IdGeorreferencia: 12,
        NombreReferencia: "010902",
        FechaUltimaModificacion: "2022-09-26T10:15:30.00",
        ConsecutivoCarga: 1,
        Modificadopor: "Usuario1",
        idProyecto: 3136,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-69.96372, 18.55439],
      },
      properties: {
        IdGeorreferencia: 13,
        NombreReferencia: "010903",
        FechaUltimaModificacion: "2022-09-27T11:20:00.00",
        ConsecutivoCarga: 2,
        Modificadopor: "Usuario2",
        idProyecto: 3136,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-69.96072, 18.55339],
      },
      properties: {
        IdGeorreferencia: 14,
        NombreReferencia: "010904",
        FechaUltimaModificacion: "2022-09-28T12:25:00.00",
        ConsecutivoCarga: 3,
        Modificadopor: "Usuario3",
        idProyecto: 3136,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-69.96472, 18.55739],
      },
      properties: {
        IdGeorreferencia: 15,
        NombreReferencia: "010905",
        FechaUltimaModificacion: "2022-09-29T13:30:00.00",
        ConsecutivoCarga: 4,
        Modificadopor: "Usuario4",
        idProyecto: 3136,
      },
    },
  ]);

  return (
    <Box>
      <Box sx={{ bgcolor: "#0a4d68", color: "white", py: 6 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            fontWeight="bold"
          >
            Mapa de proyectos
          </Typography>
          <Typography variant="body1" paragraph>
            Accede a información detallada y actualizada sobre la ejecución de
            obras públicas en tu región y a nivel nacional. Nuestro portal te
            permite seguir de cerca cada proyecto,
            <Typography component="span" fontWeight="bold">
              fomentar la transparencia y participar activamente en el control
              ciudadano.
            </Typography>
          </Typography>
        </Container>
      </Box>
      <FilterSearch />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        mx={20}
        my={10}
      >
        <Map locations={locations} />
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        mx={20}
        my={10}
      >
        <ProjectsTable />
      </Box>
    </Box>
  );
};

export default WorksAndProjects;
