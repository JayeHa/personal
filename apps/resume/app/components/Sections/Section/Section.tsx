import type { PropsWithChildren } from "react";

export interface SectionProps {
  title: string;
  fullWidth?: true;
}

const Section = ({
  title,
  fullWidth,
  children,
}: SectionProps & PropsWithChildren) => {
  return (
    <section className={fullWidth ? "main-section-full" : "main-section"}>
      <div className="mb-12 md:mb-20">
        <h2
          className={`mb-3 text-2xl font-bold tracking-tight md:mb-8 md:text-4xl ${
            fullWidth ? "px-4 md:px-0" : ""
          }`}
        >
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
};

export default Section;
