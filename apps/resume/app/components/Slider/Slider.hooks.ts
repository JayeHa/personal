import { useEffect, useMemo, useState } from "react";
import useResponsive from "~/hooks/useResponsive";
import type { SliderProps } from "./Slider.types";

const PER_PAGE = 3;

const useSlider = ({ children }: SliderProps) => {
  const [current, setCurrent] = useState(0);
  const { isMobile } = useResponsive();

  const total = useMemo(
    () => Math.ceil(children.length / PER_PAGE),
    [children.length]
  );

  /** slider 페이지 이동 버튼의 props입니다. */
  const ButtonProps = useMemo(
    () => ({
      LeftButton: {
        disabled: current <= 0,
        onClick: () => {
          setCurrent((prev) => (prev > 0 ? prev - 1 : 0));
        },
      },

      RightButton: {
        disabled: current >= total - 1,
        onClick: () => {
          setCurrent((prev) => prev + 1);
        },
      },
    }),
    [current, total]
  );

  /** 모바일일 때 current를 초기화합니다. */
  useEffect(() => {
    if (isMobile) {
      setCurrent(0);
    }
  }, [isMobile]);

  /** slider 페이지넘김 효과입니다. */
  const PageAnimationStyle = useMemo(() => {
    return {
      transform: `translateX(${-current * 100}%)`,
      transition: "transform ease-in-out 500ms",
    };
  }, [current]);

  return { isMobile, ButtonProps, PageAnimationStyle };
};

export default useSlider;
