import { ReactNode } from "react";


export type TypographyTypes = {
  color?: "gray" | "white" ;
  variant?: "normal" | "semibold" | "light" | "italic" | "thin";
  underline?: boolean;
  size?: "h1" | "h2" | "xl" | "l1";
  children?: ReactNode;
  className?: string;
};
