import type { Config } from 'tailwindcss';

import { F } from '@mobily/ts-belt';
import twAnimate from 'tailwindcss-animate';
import plugin from 'tailwindcss/plugin';

import {
  bgColorTokens,
  radiusTokens,
  textColorTokens,
  textSizeTokens,
} from './tokens';

const config = {
  content: [],
  plugins: [twAnimate],
  theme: {
    extend: {
      backgroundColor: bgColorTokens,
      borderRadius: radiusTokens,
      textColor: textColorTokens,
      fontSize: textSizeTokens,
    },
  },
} satisfies Config;

export const auTwPlugin = plugin(F.identity, config);
