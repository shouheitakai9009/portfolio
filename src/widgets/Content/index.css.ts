import { style } from "@vanilla-extract/css";
import { vars } from "../../designs/theme.css";

export const wrapper = style({
  padding: `${vars.spaces.lg} 0`,
  display: "grid",
  gap: vars.spaces["2xl"],
  gridTemplateAreas: `
    ".... .... ...."
    "summ desc desc";
  `,
});
