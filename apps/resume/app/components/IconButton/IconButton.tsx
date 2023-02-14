import { ButtonHTMLAttributes } from "react";
import Icon from "../Icon";
import type IconButtonProps from "./IconButton.types";

const IconButton = ({
  className,
  icon,
  size = 32,
  type = "button",
  ...props
}: IconButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center rounded-full border p-1 shadow-md hover:bg-slate-600 hover:fill-slate-50  ${
        className ?? ""
      }`}
      {...props}
    >
      {icon && <Icon name={icon} tabIndex={-1} width={size} height={size} />}
    </button>
  );
};

export default IconButton;
