import clsx from "clsx";
import * as styles from "./index.css";

type TextDecoration =
  | "bold"
  | "italic"
  | "underline"
  | "strikethrough"
  | "none";
type TextColor =
  | "primary"
  | "secondary"
  | "accent"
  | "muted"
  | "error"
  | "success";
type TextSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

export interface InlineTypographyProps {
  children: React.ReactNode;
  decoration?: TextDecoration;
  color?: TextColor;
  size?: TextSize;
  as?: "span" | "em" | "strong" | "small" | "mark" | "code";
  className?: string;
}

export const InlineTypography = ({
  children,
  decoration = "none",
  color = "primary",
  size = "md",
  as: Component = "span",
  className,
}: InlineTypographyProps) => {
  return (
    <Component
      className={clsx(
        styles.base,
        styles.decoration[decoration],
        styles.color[color],
        styles.size[size],
        className
      )}
    >
      {children}
    </Component>
  );
};
