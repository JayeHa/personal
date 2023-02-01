type Project = {
  title: string;
  url?: string;
  subtitle: string;
  skills: string[];
  description: string[];
};

export interface ProjectExperienceProps {
  project: Readonly<Project>;
}
