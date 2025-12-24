import { style } from "@vanilla-extract/css";
import { vars } from "../../designs/theme.css";

export const wrapper = style({
  padding: `${vars.spaces.xl} 0`,
});

export const header = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: vars.spaces.md,
  paddingBottom: vars.spaces.xl,
  borderBottom: `1px solid ${vars.color.gray[600]}`,
});

export const career = style({});

export const careerTitle = style({
  padding: `${vars.spaces.md} ${vars.spaces.xl}`,
});

export const careerList = style({
  margin: 0,
  padding: 0,
});

export const snsIcons = style({
  display: "flex",
  gap: vars.spaces.md,
  justifyContent: "center",
  alignItems: "center",
  marginTop: vars.spaces.sm,
});
