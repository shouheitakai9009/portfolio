import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import clsx from "clsx";
import * as styles from "./index.css";

export interface NumberCardProps {
  icon: IconDefinition;
  color:
    | "gray"
    | "red"
    | "orange"
    | "yellow"
    | "green"
    | "blue"
    | "purple"
    | "pink";
  subtext: string;
  value: number;
}

export const NumberCard = ({
  icon,
  color,
  subtext,
  value,
}: NumberCardProps) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, value, { duration: 1.5 });
    return controls.stop;
  }, [count, value]);

  return (
    <motion.div
      className={clsx(styles.card, styles.cardColor[color])}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* 背景アイコン */}
      <div className={clsx(styles.iconContainer, styles.iconColor[color])}>
        <FontAwesomeIcon icon={icon} />
      </div>

      {/* テキストコンテンツ */}
      <div className={styles.textContainer}>
        <span className={styles.subtext}>{subtext}</span>
        <motion.span className={styles.valueStyle}>{rounded}</motion.span>
      </div>
    </motion.div>
  );
};
