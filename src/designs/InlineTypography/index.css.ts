import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "../theme.css";

// ベーススタイル
export const base = style({
  display: "inline",
});

export const bold = style({
  fontWeight: "bold",
});

// 装飾バリアント
export const decoration = styleVariants({
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecoration: "underline" },
  strikethrough: { textDecoration: "line-through" },
  none: {
    fontWeight: "normal",
    fontStyle: "normal",
    textDecoration: "none",
  },
});

// カラーバリアント（テーマから参照）
export const color = styleVariants({
  gray0: { color: vars.color.gray[0] },
  gray50: { color: vars.color.gray[50] },
  gray100: { color: vars.color.gray[100] },
  gray200: { color: vars.color.gray[200] },
  gray300: { color: vars.color.gray[300] },
  gray400: { color: vars.color.gray[400] },
  gray500: { color: vars.color.gray[500] },
  gray600: { color: vars.color.gray[600] },
  gray700: { color: vars.color.gray[700] },
  gray800: { color: vars.color.gray[800] },
  gray900: { color: vars.color.gray[900] },
});

// サイズバリアント（テーマから参照）
export const size = styleVariants({
  xs: {
    fontSize: vars.fontSize.xs,
    lineHeight: vars.lineHeight.xs,
  },
  sm: {
    fontSize: vars.fontSize.sm,
    lineHeight: vars.lineHeight.sm,
  },
  md: {
    fontSize: vars.fontSize.md,
    lineHeight: vars.lineHeight.md,
  },
  lg: {
    fontSize: vars.fontSize.lg,
    lineHeight: vars.lineHeight.lg,
  },
  xl: {
    fontSize: vars.fontSize.xl,
    lineHeight: vars.lineHeight.xl,
  },
  "2xl": {
    fontSize: vars.fontSize["2xl"],
    lineHeight: vars.lineHeight["2xl"],
  },
});
