type ProjectItem = {
  name: string;
  link: string;
};

export interface ProjectListProps {
  title: string;
  projectList: ProjectItem[];
}
