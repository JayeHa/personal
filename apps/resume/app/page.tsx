import { Cover, Skills } from "./components";

export default function Home() {
  return (
    <main className="px-4 py-12 md:max-w-5xl md:px-24 md:py-32 md:mx-auto">
      <Cover />

      <Skills />
    </main>
  );
}
