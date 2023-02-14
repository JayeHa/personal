import IconButton from "../IconButton";
import type { SliderProps } from "./Slider.types";

const Slider = ({ children }: SliderProps) => {
  // md인지 파악
  // const total =  Math.ceil(children.length / 3)
  // hasLeftButton = current !== 0
  // hasRightButton = current !== total - 1
  // onClick => translateX(current * -100)

  return (
    <div className="group flex md:px-24">
      <IconButton
        icon="ChevronLeft"
        className="absolute top-1/2 left-12 hidden -translate-y-1/2 md:group-hover:inline-flex"
      />

      <div className="md:max-w-4xl md:overflow-hidden">
        <ul className="inline-flex gap-4 px-4 pb-3 md:flex md:gap-0 md:px-0">
          {children.map((child, index) => (
            <li
              // TODO: 키 만들기
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              className="w-[70vw] shrink-0 md:w-1/3 md:px-2 "
            >
              {child}
            </li>
          ))}
        </ul>
      </div>

      <IconButton
        icon="ChevronLeft"
        className=" absolute top-1/2 right-12 hidden -translate-y-1/2 -scale-x-100 md:group-hover:inline-flex"
      />
    </div>
  );
};

export default Slider;
