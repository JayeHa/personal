import { projectList } from "@data/projects";
import Section from "../Section";
import ProjectList from "./ProjectList";

const Projects = () => {
  return (
    <Section title="Projects">
      {projectList.map((project) => (
        <ProjectList
          key={project.title}
          title={project.title}
          projectList={project.list}
        />
      ))}
    </Section>
  );
};

export default Projects;
