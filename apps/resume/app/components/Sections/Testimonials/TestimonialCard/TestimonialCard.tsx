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
    <article className="w-72 min-w-[248px] rounded-2xl border bg-white p-6 shadow-sm">
      <header className="relative">
        <h3 className="sr-only">{name}님의 추천서</h3>

        <span
          className="absolute bottom-0 left-0 h-2 w-full translate-y-full bg-gradient-to-b from-white to-transparent"
          aria-hidden
        />
      </header>

      <div className="h-52 overflow-hidden pb-6">
        <Icon
          className="rotate-180 fill-gray-600"
          name="FormatQuote"
          aria-hidden
        />
        <p className="break-keep text-sm text-slate-800 line-clamp-7">{text}</p>
      </div>

      <footer className="mt-5 border-t pt-2">
        <div className="flex gap-4">
          <Image
            className="h-12 w-12 rounded-full"
            src={avatarSrc}
            width={48}
            height={48}
            alt={name}
          />

          <div className="flex flex-col justify-center">
            <a href={link} target="_blank" rel="noreferrer">
              <strong className="mb-1">{name}</strong>
            </a>
            <span className="text-xs text-gray-400">{jobTitle}</span>
          </div>
        </div>
      </footer>
    </article>
  );
};

export default TestimonialCard;
