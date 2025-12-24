import { type FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import clsx from "clsx";
import * as styles from "./index.css";

type LinkIconColor = keyof typeof styles.color;
type LinkIconSize = keyof typeof styles.size;

export interface LinkIconProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: IconDefinition;
  color?: LinkIconColor;
  size?: LinkIconSize;
}

export const LinkIcon: FC<LinkIconProps> = ({
  icon,
  color = "gray",
  size = "md",
  className,
  ...anchorProps
}) => {
  return (
    <a
      className={clsx(
        styles.base,
        styles.color[color],
        styles.size[size],
        className
      )}
      {...anchorProps}
    >
      <FontAwesomeIcon icon={icon} />
    </a>
  );
};
