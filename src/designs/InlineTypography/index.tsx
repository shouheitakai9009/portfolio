import clsx from "clsx";
import * as styles from "./index.css";

type TextColor = keyof typeof styles.color;
type TextSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

export interface InlineTypographyProps {
  children: React.ReactNode;
  bold?: boolean;
  color?: TextColor;
  size?: TextSize;
  as?: "span" | "em" | "strong" | "small" | "mark" | "code";
  className?: string;
}

export const InlineTypography = ({
  children,
  bold = false,
  color = "gray0",
  size = "md",
  as: Component = "span",
  className,
}: InlineTypographyProps) => {
  return (
    <Component
      className={clsx(
        styles.base,
        bold && styles.bold,
        styles.color[color],
        styles.size[size],
        className
      )}
    >
      {children}
    </Component>
  );
};
