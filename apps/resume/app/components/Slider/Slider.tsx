import type { SliderProps } from "./Slider.types";

const Slider = ({ children }: SliderProps) => {
  return (
    <ul className="inline-flex gap-4 px-4 pb-3 md:flex md:gap-0 md:px-0">
      {children.map((child, index) => (
        <li
          // TODO: 키 만들기
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          className="w-[70vw] min-w-[248px] shrink-0 md:w-1/2 md:px-2 lg:w-1/3"
        >
          {child}
        </li>
      ))}
    </ul>
  );
};

export default Slider;
