import { workExperiences } from "@data/workExperience";
import Section from "../Section";
import WorkExperienceCard from "./WorkExperienceCard";

const WorkExperience = () => {
  return (
    <Section title="Work Experience">
      {workExperiences.map((work) => (
        <WorkExperienceCard key={work.companyName} item={work} />
      ))}
    </Section>
  );
};

export default WorkExperience;
