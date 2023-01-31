import type { experiences } from "../Experience.constants";

interface ExperienceCardProps {
  item: Utils.ElementType<typeof experiences>;
}

const ExperienceCard = ({ item }: ExperienceCardProps) => {
  const { companyName, url, period, projects } = item;

  return (
    <article className="relative pl-4 pb-16 ml-1 border-l-2 border-gray-300 last:pb-0 md:flex md:gap-2">
      <header className="relative -top-1 mb-2 md:w-2/6">
        <h2 className="inline-block text-xl font-medium tracking-wide">
          <a href={url} target="_blank" rel="noreferrer">
            {companyName}
          </a>

          <span className="relative bottom-1 text-sm text-gray-600">↗️</span>
        </h2>

        <dl>
          <dt className="sr-only">근무기간</dt>
          <dd className="text-xs text-gray-500">{period}</dd>
        </dl>
      </header>

      <div className="pl-1 md:w-4/6">
        {projects.map((project) => (
          <div key={project.title} className="relative mb-7 last:mb-0">
            <span className="absolute top-3.5 -left-[22px] w-2 h-1 rounded-full border-t-2 border-gray-300 md:hidden" />

            <h3 className="text-lg font-medium">{project.title}</h3>

            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-gray-500 italic"
              >
                {project.url}
              </a>
            )}

            <p className="text-sm text-gray-600">{project.subtitle}</p>

            <ul className="flex flex-wrap gap-x-2 gap-y-1 mt-2">
              {project.skills.map((skill) => (
                <li
                  key={skill}
                  className=" text-xs text-gray-800 bg-gray-200 py-0.5 px-2 rounded"
                >
                  {skill}
                </li>
              ))}
            </ul>

            <ul className="mt-2">
              {project.description.map((desc) => (
                <li key={desc} className="relative pl-3 text-sm">
                  <span
                    className="block absolute bg-gray-800 w-1 h-1 rounded-full top-3 left-0"
                    aria-hidden
                  />
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <span
        className="absolute top-0 -left-[8px] w-4 h-4 rounded-full border-2 border-gray-300 bg-white"
        aria-hidden
      />
    </article>
  );
};

export default ExperienceCard;
