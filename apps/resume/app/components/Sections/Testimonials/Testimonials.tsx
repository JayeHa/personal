import Section from "../Section";
import TestimonialCard from "./TestimonialCard/TestimonialCard";
import { testimonials } from "./Testimonials.constants";

const Testimonials = () => {
  return (
    <Section title="Testimonials" fullWidth>
      <div className="overflow-x-auto py-1 md:overflow-hidden">
        <ul className="inline-flex gap-4 px-4 pb-3 md:flex md:gap-0 md:px-0">
          {testimonials.map((testimonial) => (
            <li
              key={testimonial.name}
              className="w-[70vw] min-w-[248px] shrink-0 md:w-1/2 md:px-2 lg:w-1/3"
            >
              <TestimonialCard {...testimonial} />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Testimonials;
