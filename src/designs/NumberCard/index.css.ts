import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "../theme.css";

// ベースカードスタイル
export const card = style({
  position: "relative",
  borderRadius: vars.radius.lg,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-end",
  minWidth: "150px",
  minHeight: "80px",
  padding: vars.spaces.xl,
});

// カラーバリアント（背景色）
export const cardColor = styleVariants({
  gray: { backgroundColor: vars.color.gray[800] },
  red: { backgroundColor: vars.color.red[800] },
  orange: { backgroundColor: vars.color.orange[800] },
  yellow: { backgroundColor: vars.color.yellow[800] },
  green: { backgroundColor: vars.color.green[800] },
  blue: { backgroundColor: vars.color.blue[800] },
  purple: { backgroundColor: vars.color.purple[800] },
  pink: { backgroundColor: vars.color.pink[800] },
});

// アイコンコンテナ（左上配置）
export const iconContainer = style({
  position: "absolute",
  top: 0,
  left: 0,
  fontSize: "80px",
  opacity: 0.35,
});

// アイコン色バリアント
export const iconColor = styleVariants({
  gray: { color: vars.color.gray[300] },
  red: { color: vars.color.red[300] },
  orange: { color: vars.color.orange[300] },
  yellow: { color: vars.color.yellow[300] },
  green: { color: vars.color.green[300] },
  blue: { color: vars.color.blue[300] },
  purple: { color: vars.color.purple[300] },
  pink: { color: vars.color.pink[300] },
});

// テキストコンテナ（右寄せ）
export const textContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  gap: vars.spaces.xs,
  position: "relative",
  zIndex: 1,
});

// テキストスタイル
export const text = style({
  fontSize: vars.fontSize.lg,
  color: vars.color.gray[0],
  lineHeight: vars.lineHeight.lg,
  textAlign: "right",
});

export const subtext = style({
  fontSize: vars.fontSize.sm,
  color: "rgba(255, 255, 255, 0.7)",
  lineHeight: vars.lineHeight.sm,
  textAlign: "right",
});

export const valueStyle = style({
  fontSize: "58px",
  color: vars.color.gray[0],
  fontWeight: "bold",
  lineHeight: "42px",
  textAlign: "right",
  letterSpacing: "-0.03em",
});
