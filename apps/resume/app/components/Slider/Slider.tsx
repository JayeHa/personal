"use client";

import IconButton from "../IconButton";
import useSlider from "./Slider.hooks";
import type { SliderProps } from "./Slider.types";

const Slider = ({ children }: SliderProps) => {
  const app = useSlider({ children });

  return (
    <div className="group flex md:px-24">
      {!app.isMobile && (
        <IconButton
          icon="ChevronLeft"
          className="absolute top-1/2 left-12 hidden -translate-y-1/2 md:group-hover:inline-flex"
          {...app.ButtonProps.LeftButton}
        />
      )}

      <div className="md:max-w-4xl md:overflow-hidden">
        <ul
          className="inline-flex gap-4 px-4 pb-3 md:flex md:gap-0 md:px-0"
          style={app.PageAnimationStyle}
        >
          {children.map((child, index) => (
            <li
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              className="w-[70vw] shrink-0 md:w-1/3 md:px-2 "
            >
              {child}
            </li>
          ))}
        </ul>
      </div>

      {!app.isMobile && (
        <IconButton
          icon="ChevronLeft"
          className=" absolute top-1/2 right-12 hidden -translate-y-1/2 -scale-x-100 md:group-hover:inline-flex"
          {...app.ButtonProps.RightButton}
        />
      )}
    </div>
  );
};

export default Slider;
