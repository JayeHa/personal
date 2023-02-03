import Section from "../Section";
import ProjectList from "./ProjectList";
import { OpenSourceList } from "./Projects.constants";

const Projects = () => {
  return (
    <Section title="Projects">
      <ProjectList title="오픈소스 프로젝트" projectList={OpenSourceList} />
    </Section>
  );
};

export default Projects;
