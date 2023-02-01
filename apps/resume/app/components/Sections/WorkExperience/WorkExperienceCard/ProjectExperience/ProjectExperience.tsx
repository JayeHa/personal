import type { ProjectExperienceProps } from "./ProjectExperience.types";

const ProjectExperience = ({ project }: ProjectExperienceProps) => {
  const { url, subtitle, skills, description } = project;

  return (
    <div key={project.title} className="relative mb-7 last:mb-0">
      <span className="absolute top-3.5 -left-[22px] h-1 w-2 rounded-full border-t-2 border-gray-300 md:hidden" />

      <h4 className="text-lg font-medium md:text-xl">{project.title}</h4>

      {url && (
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="text-sm italic text-gray-500"
        >
          {url}
        </a>
      )}

      <p className="text-sm text-gray-600 md:mt-1 md:text-base">{subtitle}</p>

      <ul className="mt-2 flex flex-wrap gap-x-2 gap-y-1">
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded bg-gray-200 py-0.5 px-2 text-xs text-gray-800"
          >
            {skill}
          </li>
        ))}
      </ul>

      <ul className="list-dotted mt-2">
        {description.map((desc) => (
          <li key={desc} className="text-[0.95rem] md:text-base">
            {desc}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectExperience;
