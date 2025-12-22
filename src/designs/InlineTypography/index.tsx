import clsx from "clsx";
import * as styles from "./index.css";
import { motion, type HTMLMotionProps } from "framer-motion";

type TextColor = keyof typeof styles.color;
type TextSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

export interface InlineTypographyProps
  extends Omit<HTMLMotionProps<"span">, "color"> {
  children: React.ReactNode;
  bold?: boolean;
  color?: TextColor;
  size?: TextSize;
  className?: string;
}

export const InlineTypography = ({
  children,
  bold = false,
  color = "gray0",
  size = "md",
  className,
  variants,
  initial,
  animate,
  whileHover,
  whileTap,
  whileFocus,
  whileDrag,
  whileInView,
  exit,
  transition,
  ...restProps
}: InlineTypographyProps) => {
  return (
    <motion.span
      className={clsx(
        styles.base,
        bold && styles.bold,
        styles.color[color],
        styles.size[size],
        className
      )}
      variants={variants}
      initial={initial}
      animate={animate}
      whileHover={whileHover}
      whileTap={whileTap}
      whileFocus={whileFocus}
      whileDrag={whileDrag}
      whileInView={whileInView}
      exit={exit}
      transition={transition}
      {...restProps}
    >
      {children}
    </motion.span>
  );
};
