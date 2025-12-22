import { style } from "@vanilla-extract/css";
import { vars } from "../../designs/theme.css";

export const wrapper = style({
  height: "40px",
  display: "flex",
  alignItems: "center",
  gap: vars.spaces.sm,
});

export const heading = style({});
