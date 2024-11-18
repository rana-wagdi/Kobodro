import { ClassNames } from "@/app/utils";
import type { TypographyTypes } from "@/app/types";

export default function Typography({
  variant,
  underline = false,
  color = "white",
  size,
  children,
  className = "",
}: TypographyTypes) {
  const variantClass =
    variant === "normal"
      ? "font-normal"
      : variant === "semibold"
        ? "font-semibold"
        : variant === "light"
          ? "font-light"
          : variant === "italic"
            ? "italic"
            : variant === "thin"
              ? "font-extralight"
              : "";

  const colorClass = color === "gray" ? "text-primary-950" : "text-netural-50";

  const sizeClass =
    // Heading
    size === "h1"
      ? "text-[36px] md:text-[40px] lg:text-[60px]  font-bold" // H1 size
      : size === "h2"
        ? "text-[30px] md:text-[24px] lg:text-[36px] font-bold" // H2 size
        : // Body
          size === "xl"
          ? "text-[18px] md:text-[18px] lg:text-[20px] font-light" // B1 size
          : "";

  return (
    <span
      className={ClassNames(
        sizeClass,
        colorClass,
        className,
        `leading-normal ${variantClass} ${underline ? "underline" : ""}`
      )}
    >
      {children}
    </span>
  );
}
