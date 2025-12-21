import { style, styleVariants } from "@vanilla-extract/css";

export const wrapper = style({
  borderRadius: "50%",
  overflow: "hidden",
});

// サイズバリアント（テーマから参照）
export const size = styleVariants({
  small: {
    width: "40px",
    height: "40px",
  },
  medium: {
    width: "80px",
    height: "80px",
  },
  large: {
    width: "100px",
    height: "100px",
  },
});

export const image = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});
