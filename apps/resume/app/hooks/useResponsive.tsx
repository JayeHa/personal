import { useEffect, useState } from "react";
import { BREAKPOINT_MOBILE } from "~/constants";

const useResponsive = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateMatchMedia = ({ matches }: MediaQueryListEvent) => {
      setIsMobile(matches);
    };

    const media = window.matchMedia(`(max-width: ${BREAKPOINT_MOBILE}px)`);
    media.addEventListener("change", updateMatchMedia);
    setIsMobile(media.matches);

    return () => media.removeEventListener("change", updateMatchMedia);
  }, []);

  return { isMobile };
};

export default useResponsive;
