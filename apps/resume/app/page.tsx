import {
  Contact,
  Cover,
  Projects,
  Skills,
  Testimonials,
  WorkExperience,
} from "./components";

export default function Home() {
  return (
    <main>
      <Cover />

      <Skills />
      <WorkExperience />
      <Projects />
      <Testimonials />
      <Contact />
    </main>
  );
}
