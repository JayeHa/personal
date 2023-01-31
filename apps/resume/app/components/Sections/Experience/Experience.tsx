import Section from "../Section";
import { experiences } from "./Experience.constants";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <Section title="Professional Experience">
      {experiences.map((work) => (
        <ExperienceCard key={work.companyName} item={work} />
      ))}
    </Section>
  );
};

export default Experience;
