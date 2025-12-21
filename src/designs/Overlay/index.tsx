import type React from "react";
import { wrapper } from "./index.css";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";

interface Props {
  isShow?: boolean;
  content: React.ReactNode;
}

export const Overlay = ({ isShow = true, content }: Props) => {
  return (
    <AnimatePresence>
      {isShow && (
        <LayoutGroup>
          <motion.div
            initial={{ scale: 0 }}
            animate={{
              scale: 1,
              transition: {
                type: "spring",
                duration: 0.5,
              },
            }}
            exit={{ scale: 0, transition: { type: "keyframes" } }}
            className={wrapper}
          >
            <motion.div
              layout
              initial={{ scale: 0 }}
              animate={{
                scale: 1,
                transition: {
                  type: "spring",
                  damping: 6,
                  stiffness: 100,
                  duration: 0.3,
                },
              }}
            >
              {content}
            </motion.div>
          </motion.div>
        </LayoutGroup>
      )}
    </AnimatePresence>
  );
};
