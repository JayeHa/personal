import Link from "next/link";
import Icon from "~/components/Icon";
import { PageLink } from "./PageLink";
import type { PaginationProps } from "./Pagination.types";

const Pagination = ({ current, total }: PaginationProps) => {
  const prev = current - 1;
  const next = current + 1;

  const pageInfo = {
    prev: {
      link: `/testimonial/${prev}`,
      disabled: prev < 0,
      text: "이전 페이지",
    },
    next: {
      link: `/testimonial/${next}`,
      disabled: next >= total,
      text: "다음 페이지",
    },
    home: {
      link: "/",
      text: "홈으로",
    },
  };

  return (
    <div className="flex justify-between">
      <PageLink link={pageInfo.prev.link} disabled={pageInfo.prev.disabled}>
        <Icon
          className="fill-gray-800"
          name="ChevronLeft"
          width={24}
          height={24}
        />
        <span>{pageInfo.prev.text}</span>
      </PageLink>

      <Link href={pageInfo.home.link}>{pageInfo.home.text}</Link>

      <PageLink link={pageInfo.next.link} disabled={pageInfo.next.disabled}>
        <span>{pageInfo.next.text}</span>
        <Icon
          className="-scale-x-100 fill-gray-800"
          name="ChevronLeft"
          width={24}
          height={24}
        />
      </PageLink>
    </div>
  );
};

export default Pagination;
