"use client";

import { Testimonial } from "~/components/Sections/Testimonial";

const Page = ({ params: { index } }: { params: { index: string } }) => {
  return <Testimonial index={Number(index)} />;
};

export default Page;
