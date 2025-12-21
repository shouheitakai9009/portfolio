import { style } from "@vanilla-extract/css";
import { vars } from "../../designs/theme.css";

export const wrapper = style({
  padding: vars.spaces.xl,
});

export const header = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: vars.spaces.md,
});
