import type { PropsWithChildren } from "react";

export interface SectionProps {
  title: string;
}

const Section = ({ title, children }: SectionProps & PropsWithChildren) => {
  return (
    <section className="mb-12 md:mb-20">
      <h2 className="font-bold text-2xl mb-3 md:mb-8 tracking-tight md:text-4xl">
        {title}
      </h2>
      {children}
    </section>
  );
};

export default Section;
