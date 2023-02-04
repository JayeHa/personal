import Slider from "../../Slider";
import Section from "../Section";
import TestimonialCard from "./TestimonialCard/TestimonialCard";
import { testimonials } from "./Testimonials.constants";

const Testimonials = () => {
  return (
    <Section title="Testimonials" fullWidth>
      <div className="overflow-x-auto py-1 md:overflow-hidden">
        <Slider>
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </Slider>
      </div>
    </Section>
  );
};

export default Testimonials;
