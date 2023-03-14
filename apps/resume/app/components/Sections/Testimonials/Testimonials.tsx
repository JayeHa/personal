import { testimonials } from "data/testimonials";
import Slider from "../../Slider";
import Section from "../Section";
import TestimonialCard from "./TestimonialCard/TestimonialCard";

const Testimonials = () => {
  return (
    <Section title="Testimonials" fullWidth>
      <div className="overflow-x-auto py-1 md:overflow-hidden">
        <Slider>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              index={index}
              {...testimonial}
            />
          ))}
        </Slider>
      </div>
    </Section>
  );
};

export default Testimonials;
