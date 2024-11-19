import type { Config } from 'tailwindcss';

import { F } from '@mobily/ts-belt';
import twAnimate from 'tailwindcss-animate';
import plugin from 'tailwindcss/plugin';

import { bgColorTokens } from './tokens';

const config = {
  content: [],
  plugins: [twAnimate],
  theme: {
    extend: {
      backgroundColor: bgColorTokens,
    },
  },
} satisfies Config;

export const auTwPlugin = plugin(F.identity, config);
