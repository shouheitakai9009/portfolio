import { style } from "@vanilla-extract/css";
import { vars } from "../../../designs/theme.css";

export const wrapper = style({
  listStyle: "none",
  padding: `${vars.spaces.sm} ${vars.spaces.xl}`,
  position: "relative",
  overflow: "visible",
});

export const background = style({
  position: "absolute",
  top: 0,
  right: 0,
  height: "100%",
  backgroundColor: vars.background.lighter,
  borderTopLeftRadius: vars.radius.lg,
  borderBottomLeftRadius: vars.radius.lg,
  zIndex: 0,
});

export const button = style({
  width: "100%",
  background: "none",
  border: "none",
  padding: 0,
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  position: "relative",
  zIndex: 1,
});
