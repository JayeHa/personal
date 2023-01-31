import Section from "../Section";

const Skills = () => {
  return (
    // TODO: ES6 등 스킬 추가
    <Section title="Skills">
      <ul className="md:flex md:gap-4">
        <li className="md:text-xl">React</li>
        <li className="md:text-xl">Next.js</li>
        <li className="md:text-xl">TypeScript</li>
      </ul>
    </Section>
  );
};

export default Skills;
