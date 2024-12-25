import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(
    undefined
  );

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isMobile;
}

type ScreenSize = "sm" | "md" | "lg" | "xl" | "2xl";

const BREAKPOINTS: Record<ScreenSize, number> = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

export function useScreenSize() {
  const [screenSize, setScreenSize] = React.useState<ScreenSize | undefined>(
    undefined
  );

  React.useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;

      if (width < BREAKPOINTS.sm) {
        setScreenSize("sm");
      } else if (width < BREAKPOINTS.md) {
        setScreenSize("md");
      } else if (width < BREAKPOINTS.lg) {
        setScreenSize("lg");
      } else if (width < BREAKPOINTS.xl) {
        setScreenSize("xl");
      } else {
        setScreenSize("2xl");
      }
    };

    // Initial check
    updateScreenSize();

    // Add resize event listener
    window.addEventListener("resize", updateScreenSize);

    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  return screenSize;
}
