import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "../theme.css";

export const base = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  textDecoration: "none",
  transition: "all 0.2s ease",
  cursor: "pointer",
  borderRadius: "50%",
  aspectRatio: "1",
  padding: vars.spaces.sm,
  color: vars.color.gray[0],
  ":hover": {
    opacity: 0.7,
  },
});

export const color = styleVariants({
  gray: { backgroundColor: vars.color.gray[900] },
  red: { backgroundColor: vars.color.red[600] },
  orange: { backgroundColor: vars.color.orange[600] },
  yellow: { backgroundColor: vars.color.yellow[700] },
  green: { backgroundColor: vars.color.green[600] },
  blue: { backgroundColor: vars.color.blue[600] },
  purple: { backgroundColor: vars.color.purple[600] },
  pink: { backgroundColor: vars.color.pink[600] },
});

export const size = styleVariants({
  xs: { fontSize: vars.fontSize.xs },
  sm: { fontSize: vars.fontSize.sm },
  md: { fontSize: vars.fontSize.md },
  lg: { fontSize: vars.fontSize.lg },
  xl: { fontSize: vars.fontSize.xl },
  "2xl": { fontSize: vars.fontSize["2xl"] },
});
