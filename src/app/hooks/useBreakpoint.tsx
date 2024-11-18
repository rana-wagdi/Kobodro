"use client"

import { useState, useEffect } from "react";
import { tailwindBreakpoints } from "../../../tailwind.config";

const useBreakpoint = () => {
  const [breakpointsStatus, setBreakpointsStatus] = useState({
    sm: false,
    md: false,
    lg: false,
    xl: false,
    xxl: false,
  });

  useEffect(() => {
    const breakpoints = {
      sm: parseInt(tailwindBreakpoints.sm),
      md: parseInt(tailwindBreakpoints.md),
      lg: parseInt(tailwindBreakpoints.lg),
      xl: parseInt(tailwindBreakpoints.xl),
      xxl: parseInt(tailwindBreakpoints.xxl),
    };

    const updateBreakpointsStatus = () => {
      const width = window.innerWidth;

      setBreakpointsStatus({
        sm: width >= breakpoints.sm && width < breakpoints.md,
        md: width >= breakpoints.md && width < breakpoints.lg,
        lg: width >= breakpoints.lg && width < breakpoints.xl,
        xl: width >= breakpoints.xl && width < breakpoints.xxl,
        xxl: width >= breakpoints.xxl,
      });
    };

    updateBreakpointsStatus();

    window.addEventListener("resize", updateBreakpointsStatus);

    return () => {
      window.removeEventListener("resize", updateBreakpointsStatus);
    };
  }, []);

  return breakpointsStatus;
};

export default useBreakpoint;
