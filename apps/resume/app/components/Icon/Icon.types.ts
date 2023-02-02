import type * as iconFiles from "@/assets/icons";

export interface IconProps {
  name: keyof typeof iconFiles;
  width?: number;
  height?: number;
  color?: string;
  tabIndex?: number;
  className?: string;
}
