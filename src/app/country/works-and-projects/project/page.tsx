import { Box } from "@mui/material";
import ProjectDetails from "../../../../components/Country/WorksAndProjects/ProjectDetails/ProjectDetails";
import ProjectTabs from "../../../../components/Country/WorksAndProjects/ProjectDetails/ProjectTabs";
import RelatedProjects from "../../../../components/Country/WorksAndProjects/ProjectDetails/RelatedProjects";

export default function Project() {
  const projects = [
    {
      image: "/assets/project-photo-example.png",
      price: 38422641,
      title: "CENTRO DE DESARROLLO INFANTIL SANTO DOMINGO",
    },
    {
      image: "/assets/project-photo-example.png",
      price: 38422641,
      title: "CENTRO DE DESARROLLO INFANTIL SANTO DOMINGO",
    },
    {
      image: "/assets/project-photo-example.png",
      price: 38422641,
      title: "CENTRO DE DESARROLLO INFANTIL SANTO DOMINGO",
    },
    {
      image: "/assets/project-photo-example.png",
      price: 38422641,
      title: "CENTRO DE DESARROLLO INFANTIL PUNTA CANA",
    },
  ];
  return (
    <Box>
      <ProjectDetails />
      <ProjectTabs />
      <RelatedProjects projects={projects} />
    </Box>
  );
}
