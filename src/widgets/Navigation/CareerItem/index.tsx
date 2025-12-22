import { motion, type Variants } from "framer-motion";
import { vars } from "../../../designs/theme.css";
import { InlineTypography } from "../../../designs/InlineTypography";
import type { Career } from "../../../states/career";
import { wrapper, background, button } from "./index.css";

const backgroundVariants: Variants = {
  initial: {
    width: "0%",
  },
  selected: {
    width: `calc(100% - ${vars.spaces.md})`,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
    },
  },
};

const contentVariants: Variants = {
  initial: {
    x: 0,
  },
  selected: {
    x: 8,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
    },
  },
};

const textVariants: Variants = {
  selected: {
    color: vars.color.gray["900"],
    fontWeight: "bold",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
    },
  },
  pressed: {
    scale: 0.9,
  },
};

interface Props {
  career: Career;
  isSelected: boolean;
  onSelect: () => void;
}

export const CareerItem = ({ career, isSelected, onSelect }: Props) => {
  return (
    <motion.li
      className={wrapper}
      initial="initial"
      whileHover="selected"
      whileTap="pressed"
      animate={isSelected ? "selected" : undefined}
    >
      <motion.div className={background} variants={backgroundVariants} />
      <motion.button
        type="button"
        className={button}
        variants={contentVariants}
        onClick={onSelect}
      >
        <InlineTypography size="xs" color="gray300" variants={textVariants}>
          ~{career.to}
        </InlineTypography>
        <InlineTypography size="sm" color="gray100" variants={textVariants}>
          {career.projectName}
        </InlineTypography>
      </motion.button>
    </motion.li>
  );
};
