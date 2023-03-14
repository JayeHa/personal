import type { ReactElement } from "react";

export interface PageLinkProps {
  link: string;
  children: ReactElement | ReactElement[];
  disabled: boolean;
}
