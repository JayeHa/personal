"use client";

// import Carousel from "nuka-carousel/lib/carousel";
import Carousel from "nuka-carousel/lib/carousel";
import Section from "../Section";
import TestimonialCard from "./TestimonialCard/TestimonialCard";
import { testimonials } from "./Testimonials.constants";

const Testimonials = () => {
  return (
    <Section title="Testimonials">
      <Carousel
        className="py-12 px-3"
        slidesToShow={3}
        wrapAround
        cellSpacing={330}
      >
        <TestimonialCard {...testimonials[0]} />
        <TestimonialCard {...testimonials[1]} />
      </Carousel>
    </Section>
  );
};

export default Testimonials;
