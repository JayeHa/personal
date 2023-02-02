import Section from "../Section";
import TestimonialCard from "./TestimonialCard/TestimonialCard";
import { testimonials } from "./Testimonials.constants";

const Testimonials = () => {
  // TODO: 캐러셀 빼고 스크롤로 변경
  return (
    <Section title="Testimonials">
      <div className="flex gap-4 overflow-hidden overflow-x-auto py-1">
        <TestimonialCard {...testimonials[0]} />
        <TestimonialCard {...testimonials[1]} />
      </div>
    </Section>
  );
};

export default Testimonials;
