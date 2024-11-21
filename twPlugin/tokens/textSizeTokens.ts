import { textSizePrimitives } from '../primitives';

type TextSizeTokenConfig = Record<
  string,
  [
    fontSize: string,
    Partial<{
      lineHeight: string;
      letterSpacing: string;
      fontWeight: number | string;
    }>,
  ]
>;

export const textSizeTokens: TextSizeTokenConfig = {
  heading1: [
    textSizePrimitives.fontSize.h1,
    {
      lineHeight: textSizePrimitives.lineHeight.h1,
      fontWeight: textSizePrimitives.fontWeight.bold,
      letterSpacing: textSizePrimitives.letterSpacing.h1,
    },
  ],
  heading2: [
    textSizePrimitives.fontSize.h2,
    {
      lineHeight: textSizePrimitives.lineHeight.h2,
      fontWeight: textSizePrimitives.fontWeight.bold,
      letterSpacing: textSizePrimitives.letterSpacing.h2,
    },
  ],

  heading3: [
    textSizePrimitives.fontSize.h3,
    {
      lineHeight: textSizePrimitives.lineHeight.h3,
      fontWeight: textSizePrimitives.fontWeight.bold,
      letterSpacing: textSizePrimitives.letterSpacing.h3,
    },
  ],

  subtitle: [
    textSizePrimitives.fontSize.subtitle,
    {
      lineHeight: textSizePrimitives.lineHeight.subtitle,
      fontWeight: textSizePrimitives.fontWeight.regular,
      letterSpacing: textSizePrimitives.letterSpacing.subtitle,
    },
  ],

  paragraph: [
    textSizePrimitives.fontSize.p,
    {
      lineHeight: textSizePrimitives.lineHeight.p,
      fontWeight: textSizePrimitives.fontWeight.regular,
      letterSpacing: textSizePrimitives.letterSpacing.p,
    },
  ],

  paragraphBold: [
    textSizePrimitives.fontSize.p,
    {
      lineHeight: textSizePrimitives.lineHeight.p,
      fontWeight: textSizePrimitives.fontWeight.bold,
      letterSpacing: textSizePrimitives.letterSpacing.p,
    },
  ],

  caption: [
    textSizePrimitives.fontSize.caption, // '0.875rem'
    {
      lineHeight: textSizePrimitives.lineHeight.caption, // '1.4'
      fontWeight: textSizePrimitives.fontWeight.regular, // 'normal'
      letterSpacing: textSizePrimitives.letterSpacing.caption, // '0.05em'
    },
  ],
};
