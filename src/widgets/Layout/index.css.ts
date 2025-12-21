import { style } from "@vanilla-extract/css";
import { vars } from "../../designs/theme.css";

export const wrapper = style({
  width: "100vw",
  height: "100vh",
  display: "grid",
  gridTemplateColumns: "300px 1fr",
});

export const nav = style({});

export const main = style({
  background: vars.background.default,
  borderTopLeftRadius: vars.radius["2xl"],
  borderBottomLeftRadius: vars.radius["2xl"],
});
