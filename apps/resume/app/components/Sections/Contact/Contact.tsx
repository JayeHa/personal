import Section from "../Section";

const Contact = () => {
  return (
    <Section title="Contact">
      <ul className="list-dotted">
        <li className="mb-2">
          <a href="https://github.com/JayeHa" target="_blank" rel="noreferrer">
            깃허브
          </a>
        </li>
        <li>
          <a href="mailto:jwha94@gmail.com" target="_blank" rel="noreferrer">
            이메일
          </a>
        </li>
      </ul>
    </Section>
  );
};

export default Contact;
