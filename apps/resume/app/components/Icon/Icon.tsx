import * as iconFiles from "@assets/icons";
import type { IconProps } from "./Icon.types";

const Icon = ({
  name,
  width = 48,
  height = 48,
  color,
  className,
  ...props
}: IconProps) => {
  const IconComponent = iconFiles[name];

  return (
    <span className={`inline-flex ${className ?? ""}`} {...props}>
      <IconComponent width={width} height={height} fill={color} />
    </span>
  );
};

export default Icon;
