import { style } from "@vanilla-extract/css";
import { vars } from "../../../designs/theme.css";

export const wrapper = style({
  background: vars.background.default,
  padding: vars.spaces.md,
  borderRadius: vars.radius.lg,
  gridArea: "summ",
});
