import { init } from '@fullstacksjs/eslint-config';

export default init({
  storybook: true,
  esm: true,
  react: true,
  typescript: true,
  node: true,
  prettier: true,
  tailwind: true,
  sort: true,
  import: false,
  ignores: ['dist', 'node_modules', 'package.json'],
});
