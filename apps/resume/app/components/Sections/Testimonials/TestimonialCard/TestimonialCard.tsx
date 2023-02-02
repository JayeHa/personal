import Icon from "@/app/components/Icon";
import Image from "next/image";
import type { testimonials } from "../Testimonials.constants";

const TestimonialCard = ({
  name,
  jobTitle,
  avatarSrc,
  link,
  text,
}: Utils.ElementType<typeof testimonials>) => {
  return (
    <article className="min-w-[248px] max-w-xs rounded-2xl p-6 pt-8 shadow-xl md:w-72">
      <header className="relative">
        <h3 className="sr-only">{name}님의 추천서</h3>

        <span
          className="absolute bottom-0 left-0 h-2 w-full translate-y-full bg-gradient-to-b from-white to-transparent"
          aria-hidden
        />
      </header>

      <div className="no-scroll-bar h-48 overflow-y-scroll pb-6">
        <Icon
          className="rotate-180 fill-slate-400 "
          name="FormatQuote"
          aria-hidden
        />
        <p className="whitespace-pre-line break-keep text-sm text-slate-800">
          {text}
        </p>
      </div>

      <footer className="border-t pt-3">
        <div className="flex gap-4">
          <Image
            className="h-12 w-12 rounded-full"
            src={avatarSrc}
            alt={name}
          />

          <a
            className="flex flex-col justify-center"
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            <strong className="mb-1">{name}</strong>
            <span className="text-xs text-gray-400">{jobTitle}</span>
          </a>
        </div>
      </footer>
    </article>
  );
};

export default TestimonialCard;
