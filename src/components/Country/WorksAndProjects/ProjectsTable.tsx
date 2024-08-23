import React, { FC, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  Typography,
  Link,
} from "@mui/material";
import { IProject } from "../../../types/Project";
import NextLink from "next/link";

interface ProjectTableProps {
  projects: IProject[];
}

const ProjectTable: FC<ProjectTableProps> = ({ projects }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // Calculate the data slice for the current page
  const paginatedData = projects.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  // Handle page change
  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  // Handle rows per page change
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Proyecto</TableCell>
            <TableCell>Entidad</TableCell>
            <TableCell>Valor</TableCell>
            <TableCell>Estado</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {paginatedData.map((project: IProject) => (
            <TableRow key={project.IdProyecto}>
              <TableCell>
                <Link
                  href={`/country/works-and-projects/${project.IdProyecto}`}
                  component={NextLink}
                >
                  <Typography fontSize={14} fontWeight={500}>
                    {project.NombreProyecto}
                  </Typography>
                </Link>
              </TableCell>
              <TableCell>{project.entidadejecutora}</TableCell>
              <TableCell>{project.CostoEstimadoProyecto}</TableCell>
              <TableCell>{project.EtapaActual}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        component="div"
        count={projects.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[10, 25, 50]}
      />
    </TableContainer>
  );
};

export default ProjectTable;
