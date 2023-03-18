import { contactList } from "@data/contact";
import Section from "../Section";

const Contact = () => {
  return (
    <Section title="Contact">
      <ul className="list-dotted">
        {contactList.map((contact) => (
          <li className="mb-2" key={contact.title}>
            <a href={contact.link} target="_blank" rel="noreferrer">
              {contact.title}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Contact;
