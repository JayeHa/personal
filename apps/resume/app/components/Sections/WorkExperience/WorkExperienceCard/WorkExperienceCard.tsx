import type { WorkExperienceCardProps } from "../WorkExperience.types";
import ProjectExperience from "./ProjectExperience";

const WorkExperienceCard = ({ item }: WorkExperienceCardProps) => {
  const { companyName, url, period, projects } = item;

  return (
    <article className="relative ml-1 border-l-2 border-gray-300 pl-4 pb-16 after:absolute after:top-0 after:-left-[8px] after:h-4 after:w-4 after:rounded-full after:border-2 after:border-gray-300 after:bg-white last:pb-0 md:flex md:gap-2">
      <header className="relative -top-1 mb-2 md:w-2/6">
        <h3 className="inline-block text-xl font-medium tracking-wide md:mb-2 md:text-2xl">
          <a
            className="open-in-new"
            href={url}
            target="_blank"
            rel="noreferrer"
          >
            {companyName}
          </a>
        </h3>

        <dl>
          <dt className="sr-only">근무기간</dt>
          <dd className="text-xs text-gray-500 md:text-sm">{period}</dd>
        </dl>
      </header>

      <div className="pl-1 md:w-4/6">
        {projects.map((project) => (
          <ProjectExperience key={project.title} project={project} />
        ))}
      </div>
    </article>
  );
};

export default WorkExperienceCard;
