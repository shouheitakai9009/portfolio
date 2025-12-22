import { createThemeContract, createTheme } from "@vanilla-extract/css";

// テーマの型定義
export const vars = createThemeContract({
  color: {
    gray: {
      0: null,
      50: null,
      100: null,
      200: null,
      300: null,
      400: null,
      500: null,
      600: null,
      700: null,
      800: null,
      900: null,
    },
  },
  fontSize: {
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xl: null,
    "2xl": null,
  },
  background: {
    primary: null,
    default: null,
    lightest: null,
  },
  lineHeight: {
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xl: null,
    "2xl": null,
  },
  radius: {
    sm: null,
    md: null,
    lg: null,
    xl: null,
    "2xl": null,
  },
  spaces: {
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xl: null,
  },
});

// デフォルトテーマ
export const defaultTheme = createTheme(vars, {
  color: {
    gray: {
      0: "hsla(0, 0%, 100%, 1)",
      50: "hsla(0, 0%, 90%, 1)",
      100: "hsla(0, 0%, 85%, 1)",
      200: "hsla(0, 0%, 80%, 1)",
      300: "hsla(0, 0%, 60%, 1)",
      400: "hsla(0, 0%, 50%, 1)",
      500: "hsla(0, 0%, 40%, 1)",
      600: "hsla(0, 0%, 40%, 1)",
      700: "hsla(0, 0%, 20%, 1)",
      800: "hsla(0, 0%, 10%, 1)",
      900: "hsla(0, 0%, 0%, 1)",
    },
  },
  background: {
    primary: "hsla(45, 100%, 60%, 1)",
    default: "hsla(0, 0%, 100%, 1)",
    lightest: "hsla(0, 0%, 95%, 1)",
  },
  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
  },
  lineHeight: {
    xs: "1rem",
    sm: "1.25rem",
    md: "1.5rem",
    lg: "1.75rem",
    xl: "1.75rem",
    "2xl": "2rem",
  },
  radius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "16px",
    "2xl": "24px",
  },
  spaces: {
    xs: "4px",
    sm: "8px",
    md: "12px",
    lg: "16px",
    xl: "24px",
  },
});
