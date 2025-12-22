import { type FC } from "react";
import clsx from "clsx";
import * as styles from "./index.css";

type TagColor = keyof typeof styles.color;
type TagSize = keyof typeof styles.size;

export interface TagProps {
  children: React.ReactNode;
  color?: TagColor;
  size?: TagSize;
  className?: string;
}

export const Tag: FC<TagProps> = ({
  children,
  color = "gray",
  size = "md",
  className,
}) => {
  return (
    <span
      className={clsx(
        styles.base,
        styles.color[color],
        styles.size[size],
        className
      )}
    >
      {children}
    </span>
  );
};
