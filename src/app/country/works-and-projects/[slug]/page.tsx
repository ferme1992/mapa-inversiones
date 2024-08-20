import { Box } from "@mui/material";
import ProjectDetails from "../../../../components/Country/WorksAndProjects/ProjectDetails/ProjectDetails";
import ProjectTabs from "../../../../components/Country/WorksAndProjects/ProjectDetails/ProjectTabs";
import RelatedProjects from "../../../../components/Country/WorksAndProjects/ProjectDetails/RelatedProjects";
import { IProject } from "@/types/Project";

const projectData: IProject[] = require("../../../../mockData/dominican-republic-data.json");

export default function Project({ params }: { params: { slug: string } }) {
  const project = projectData.find(
    (project) => project.IdProyecto === Number(params.slug)
  );

  const relatedProjects = projectData.filter(
    (project) => project.IdProyecto !== Number(params.slug)
  );

  return (
    <Box mx={17}>
      {project && <ProjectDetails project={project} />}
      {project && <ProjectTabs project={project} />}
      {project && <RelatedProjects projects={relatedProjects} />}
    </Box>
  );
}
