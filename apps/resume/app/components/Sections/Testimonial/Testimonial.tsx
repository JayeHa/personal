import Image from "next/image";
import Link from "next/link";
import Icon from "~/components/Icon";
import Section from "../Section";
import { testimonials } from "../Testimonials/Testimonials.constants";
import { Pagination } from "./Pagination";
import type { TestimonialProps } from "./Testimonial.types";

const Testimonial = ({ index }: TestimonialProps) => {
  const { avatar, company, jobTitle, link, name, text } = testimonials[index];

  return (
    <Section>
      <div className="flex flex-col items-center gap-10">
        <header className="flex w-full">
          <Link href="/" className="relative -bottom-3">
            <Icon className="fill-gray-800" name="ChevronLeft" width={38} />
          </Link>

          <div>
            <div className="relative left-1 flex gap-1 text-sm text-gray-700">
              <dl>
                <dt className="sr-only">소속</dt>
                <dd>{company},</dd>
              </dl>

              <dl>
                <dt className="sr-only">직무</dt>
                <dd>{jobTitle}</dd>
              </dl>
            </div>

            <h2 className="text-2xl font-medium">
              <span className="relative text-3xl font-bold">{name}</span>
              님의 추천서&nbsp;
              <Link
                href={link}
                target="_blank"
                className="text-sm font-normal text-blue-600"
              >
                &#40;링크&#41;
              </Link>
            </h2>
          </div>
        </header>

        <div className="flex w-full flex-col items-center gap-10">
          <div className="relative h-48 w-48 shrink-0 overflow-hidden rounded-full shadow-lg md:h-56 md:w-56">
            <Image src={avatar} alt={name} fill sizes="14rem" />
          </div>

          <p className="w-full whitespace-pre-line break-keep text-sm font-light leading-6">
            {text}
          </p>
        </div>
      </div>

      <footer className="mt-16">
        <Pagination current={index} total={testimonials.length} />
      </footer>
    </Section>
  );
};

export default Testimonial;
