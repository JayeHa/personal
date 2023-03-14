import type { testimonials } from "@data/testimonials";
import Image from "next/image";
import Link from "next/link";
import Icon from "~/components/Icon";

const TestimonialCard = ({
  index,
  name,
  jobTitle,
  avatar,
  company,
  link,
  text,
}: Utils.ElementType<typeof testimonials> & { index: number }) => {
  return (
    <article className="rounded-2xl border bg-white p-6 pt-3">
      <header className="relative">
        <h3 className="sr-only">{name}님의 추천서</h3>
      </header>

      <div className="h-56 overflow-hidden pb-6">
        <Link href={`/testimonial/${index}`}>
          <Icon
            className="relative -left-1.5 rotate-180 fill-gray-600 opacity-40"
            name="FormatQuote"
            aria-hidden
          />
          <p className="whitespace-pre-line break-keep text-sm font-light leading-6 line-clamp-7">
            {text}
          </p>
        </Link>
      </div>

      <footer className="mt-5 border-t pt-4">
        <div className="flex gap-4">
          <Image
            className="h-12 w-12 rounded-full"
            src={avatar}
            width={48}
            height={48}
            alt={name}
          />

          <div className="flex flex-col justify-center">
            <a href={link} target="_blank" rel="noreferrer">
              <strong className="mb-1 line-clamp-1">{name}</strong>
            </a>
            <dl>
              <dt className="sr-only">소속</dt>
              <dd className="text-xs text-gray-500 line-clamp-1">{company}</dd>
            </dl>
            <dl>
              <dt className="sr-only">직무</dt>
              <dd className="text-xs text-gray-400 line-clamp-1">{jobTitle}</dd>
            </dl>
          </div>
        </div>
      </footer>
    </article>
  );
};

export default TestimonialCard;
