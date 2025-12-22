import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "../theme.css";

// ベーススタイル
export const base = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: vars.radius.xl,
  color: vars.color.gray[0], // 白色文字
  whiteSpace: "nowrap",
  userSelect: "none",
});

// カラーバリアント（白色文字に合う濃い背景色）
export const color = styleVariants({
  gray: {
    backgroundColor: vars.color.gray[700],
  },
  red: {
    backgroundColor: vars.color.red[600],
  },
  orange: {
    backgroundColor: vars.color.orange[600],
  },
  yellow: {
    backgroundColor: vars.color.yellow[700],
  },
  green: {
    backgroundColor: vars.color.green[600],
  },
  blue: {
    backgroundColor: vars.color.blue[600],
  },
  purple: {
    backgroundColor: vars.color.purple[600],
  },
  pink: {
    backgroundColor: vars.color.pink[600],
  },
});

// サイズバリアント
export const size = styleVariants({
  sm: {
    fontSize: vars.fontSize.xs,
    padding: `${vars.spaces.xs} ${vars.spaces.sm}`,
  },
  md: {
    fontSize: vars.fontSize.sm,
    paddingLeft: vars.spaces.sm,
    paddingRight: vars.spaces.sm,
    paddingTop: vars.spaces.xs,
    paddingBottom: vars.spaces.xs,
    height: "24px",
  },
  lg: {
    fontSize: vars.fontSize.md,
    paddingLeft: vars.spaces.md,
    paddingRight: vars.spaces.md,
    paddingTop: vars.spaces.sm,
    paddingBottom: vars.spaces.sm,
    height: "32px",
  },
});
