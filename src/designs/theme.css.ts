import { createThemeContract, createTheme } from '@vanilla-extract/css';

// テーマの型定義
export const vars = createThemeContract({
  color: {
    text: {
      primary: null,
      secondary: null,
      accent: null,
      muted: null,
      error: null,
      success: null,
    },
  },
  fontSize: {
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xl: null,
    '2xl': null,
  },
  lineHeight: {
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xl: null,
    '2xl': null,
  },
});

// デフォルトテーマ
export const defaultTheme = createTheme(vars, {
  color: {
    text: {
      primary: '#1a202c',
      secondary: '#4a5568',
      accent: '#3182ce',
      muted: '#a0aec0',
      error: '#e53e3e',
      success: '#38a169',
    },
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
  },
  lineHeight: {
    xs: '1rem',
    sm: '1.25rem',
    md: '1.5rem',
    lg: '1.75rem',
    xl: '1.75rem',
    '2xl': '2rem',
  },
});
