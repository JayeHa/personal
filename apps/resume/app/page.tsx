import { Cover, Projects, Skills, WorkExperience } from "./components";

export default function Home() {
  return (
    <main className="px-4 py-12 md:mx-auto md:max-w-5xl md:px-24 md:py-32">
      <Cover />

      <Skills />
      <WorkExperience />
      <Projects />
    </main>
  );
}
