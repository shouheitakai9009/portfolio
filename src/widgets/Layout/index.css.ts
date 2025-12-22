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
  background: vars.background.lighter,
  borderTopLeftRadius: vars.radius["2xl"],
  borderBottomLeftRadius: vars.radius["2xl"],
  margin: `${vars.spaces.lg} 0`,
  padding: vars.spaces["2xl"],
});
