import { style } from "@vanilla-extract/css";
import { vars } from "../../../designs/theme.css";

export const wrapper = style({
  background: vars.background.default,
  padding: vars.spaces["2xl"],
  borderRadius: vars.radius.lg,
  gridArea: "desc",
});

export const description = style({
  paddingTop: vars.spaces.md,
});
