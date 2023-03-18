import { skills } from "@data/skills";
import Section from "../Section";

const Skills = () => {
  return (
    <Section title="Skills">
      <ul className="md:flex md:gap-4">
        {skills.map((skill) => (
          <li key={skill} className="md:text-xl">
            {skill}
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Skills;
