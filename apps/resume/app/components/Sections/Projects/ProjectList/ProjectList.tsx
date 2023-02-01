import type { ProjectListProps } from "./ProjectList.types";

const ProjectList = ({ title, projectList }: ProjectListProps) => {
  return (
    <article className="border-b py-4 last:border-b-0">
      <header className="mb-3">
        <h3 className="text-xl font-bold">{title}</h3>
      </header>

      <ul className="list-dotted">
        {projectList.map(({ name, link }) => (
          <li key={name} className="mb-3">
            <a
              className="open-in-new"
              href={link}
              target="_blank"
              rel="noreferrer"
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default ProjectList;
