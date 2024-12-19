import { colorPrimitives } from '../primitives';

export const ringColorTokens = {
  surface: {
    DEFAULT: colorPrimitives.gray[2],
    muted: colorPrimitives.gray[4],
  },

  brand: {
    DEFAULT: colorPrimitives.gray[3],
  },

  success: {
    DEFAULT: colorPrimitives.green[1],
  },

  danger: {
    DEFAULT: colorPrimitives.red[1],
  },

  warning: {
    DEFAULT: colorPrimitives.orange[1],
  },

  info: {
    DEFAULT: colorPrimitives.blue[1],
    soft: colorPrimitives.blue[2],
  },

  primary: {
    DEFAULT: colorPrimitives.yellow[1],
    muted: colorPrimitives.yellow[3],
  },

  light: {
    DEFAULT: colorPrimitives.white[1],
  },

  neutral: {
    DEFAULT: colorPrimitives.neutral[2],
    soft: colorPrimitives.neutral[1],
  },

  dark: {
    DEFAULT: colorPrimitives.black[2],
    muted: colorPrimitives.black[1],
  },
};
