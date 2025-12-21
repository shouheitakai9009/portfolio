import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '../theme.css';

// ベーススタイル
export const base = style({
  display: 'inline',
  fontFamily: 'inherit',
  transition: 'all 0.2s ease-in-out',
});

// 装飾バリアント
export const decoration = styleVariants({
  bold: { fontWeight: 'bold' },
  italic: { fontStyle: 'italic' },
  underline: { textDecoration: 'underline' },
  strikethrough: { textDecoration: 'line-through' },
  none: {
    fontWeight: 'normal',
    fontStyle: 'normal',
    textDecoration: 'none',
  },
});

// カラーバリアント（テーマから参照）
export const color = styleVariants({
  primary: { color: vars.color.text.primary },
  secondary: { color: vars.color.text.secondary },
  accent: { color: vars.color.text.accent },
  muted: { color: vars.color.text.muted },
  error: { color: vars.color.text.error },
  success: { color: vars.color.text.success },
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
  '2xl': {
    fontSize: vars.fontSize['2xl'],
    lineHeight: vars.lineHeight['2xl'],
  },
});
