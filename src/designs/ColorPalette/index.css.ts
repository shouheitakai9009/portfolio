import { style } from "@vanilla-extract/css";
import { vars } from "../theme.css";

export const container = style({
  padding: vars.spaces.xl,
  backgroundColor: vars.background.default,
  minHeight: "100vh",
});

export const title = style({
  fontSize: vars.fontSize["2xl"],
  fontWeight: "bold",
  marginBottom: vars.spaces.xl,
  color: vars.color.gray[900],
});

export const colorGroup = style({
  marginBottom: vars.spaces.xl,
});

export const colorName = style({
  fontSize: vars.fontSize.xl,
  fontWeight: "600",
  marginBottom: vars.spaces.md,
  color: vars.color.gray[800],
  textTransform: "capitalize",
});

export const swatchGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
  gap: vars.spaces.md,
});

export const swatchWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spaces.xs,
});

export const swatch = style({
  width: "100%",
  height: "80px",
  borderRadius: vars.radius.md,
  border: `1px solid ${vars.color.gray[200]}`,
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
});

export const swatchInfo = style({
  display: "flex",
  flexDirection: "column",
  gap: "2px",
});

export const swatchScale = style({
  fontSize: vars.fontSize.sm,
  fontWeight: "600",
  color: vars.color.gray[900],
});

export const swatchValue = style({
  fontSize: vars.fontSize.xs,
  color: vars.color.gray[600],
  fontFamily: "monospace",
  wordBreak: "break-all",
});
