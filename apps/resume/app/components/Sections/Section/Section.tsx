import type { PropsWithChildren } from "react";

export interface SectionProps {
  title: string;
}

const Section = ({ title, children }: SectionProps & PropsWithChildren) => {
  return (
    <section className="mb-12 md:mb-20">
      <h2 className="mb-3 text-2xl font-bold tracking-tight md:mb-8 md:text-4xl">
        {title}
      </h2>
      {children}
    </section>
  );
};

export default Section;
