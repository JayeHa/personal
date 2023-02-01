import Section from "../Section";
import ProjectList from "./ProjectList";
import { OpenSourceList, SideProjectList } from "./Projects.constants";

const Projects = () => {
  return (
    <Section title="Projects">
      <ProjectList title="오픈소스 프로젝트" projectList={OpenSourceList} />
      <ProjectList title="사이드 프로젝트" projectList={SideProjectList} />
    </Section>
  );
};

export default Projects;
