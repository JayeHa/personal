import Link from "next/link";
import type { PageLinkProps } from "./PageLink.types";

const PageLink = ({ children, link, disabled }: PageLinkProps) => {
  return (
    <div className={disabled ? "cursor-not-allowed opacity-30" : ""}>
      <Link href={link} className={disabled ? "pointer-events-none" : ""}>
        <div className="flex">{children}</div>
      </Link>
    </div>
  );
};

export default PageLink;
