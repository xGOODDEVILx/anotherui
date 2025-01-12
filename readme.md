# AnotherUI

AnotherUI is a UI component library built on top of **Shadcn** and **Tailwind CSS**. This project is designed for **learning purposes** and is open to contributions from learners who want to understand how to build a simple library with React.

---

## Table of Contents 📃

- [Installation](#installation-💾)
- [Contributing](#contributing-🤝)
  - [Tech Stack](#tech-stack-⚙️)
  - [Prerequisites](#prerequisites-🛒)
  - [Folder Structure](#folder-structure-📂)
  - [Commit Guidelines](#commit-guidelines-🏷️)
  - [Design Tokens](#design-tokens-🎨)
  - [FullstacksJS Community](#fullstacksjs-community-🌟)

---

## Installation 💾

To integrate this library with your project:

1. Install the package:

   ```bash
   pnpm install another-ui@latest
   ```

2. Add Tailwind CSS `plugin` from `another-ui` to your `tailwind.config.js`:

   ```js
   import { auTwPlugin } from 'another-ui/auTwPlugin';

   export const config = {
     content: ['./node_modules/another-ui/**/*.js'],
     plugins: [auTwPlugin],
   };
   ```

3. Import the components you need:

   ```tsx
   import { Button } from 'another-ui';
   ```

4. That's it! Happy coding! 🎉

---

## Contributing 🤝

This is a personal project, but contributions from the community are welcome! Here's how to contribute:

1. **Fork the Repository**:

   - Click the `Fork` button on the GitHub repository.

2. **Create a Branch**:

   ```bash
   git checkout -b your-branch-name
   ```

3. **Make Changes**:

   - Work on the changes based on the project's requirements.

4. **Push and Create a Pull Request**:

   ```bash
   git push origin your-branch-name
   ```

   - Open a Pull Request (PR) to the `main` branch of the original repository.

5. **Review and Merge**:
   - Changes will be reviewed and merged after approval.

---

### Tech Stack ⚙️

- **Vite**: For fast and optimized development.
- **Rollup**: Module bundler for optimized builds.
- **pnpm**: Efficient package manager.
- **Shadcn**: Modular components built on Tailwind CSS.
- **Tailwind CSS**: Utility-first CSS framework.
- **Storybook**: For developing and testing UI components in isolation.
- **ts-belt**: TypeScript utilities for reusable, type-safe code.

---

### Prerequisites 🛒

Ensure you have the following:

1. **Node.js** version `v22.10.0`:  
   Install using [Volta](https://volta.sh):

   ```bash
   curl https://get.volta.sh | bash
   volta install node@22.10.0
   ```

2. **pnpm** installed globally:
   ```bash
   npm install -g pnpm
   ```

---

### Folder Structure 📂

```plaintext
.
├── .storybook/         # Storybook configuration
├── dist/               # Distribution build
├── src/
│   ├── components/     # Component library
│   │   ├── [name]/     # Component-specific folder
│   │   │   ├── libs/   # Helper functions for the component
│   │   │   ├── [name].tsx  # Component file
│   │   │   ├── [name].stories.tsx  # Storybook file
│   ├── utils/          # General utilities
│   ├── twPlugin/       # Tailwind custom plugin
│       ├── primitives/ # Base values for the plugin
│       ├── tokens/     # Design tokens
```

---

### Commit Guidelines 🏷️

Follow these conventions for commit messages:

- **Add**: New features or components.  
  _Example_: `Add Button component`

- **Change**: Modify existing functionality.  
  _Example_: `Change background color in header`

- **Remove**: Delete unused code or files.  
  _Example_: `Remove deprecated utilities`

- **Refactor**: Improve code without altering functionality.  
  _Example_: `Refactor Card component`

- **Introduce**: Add new patterns or plugins.  
  _Example_: `Introduce new token system`

---

### Design Tokens 🎨

The `auTwPlugin` includes:

- **Primitives**: Core values like colors and spacing.
- **Tokens**: High-level design tokens for typography and color schemes.

> These tokens are sourced from the **FullstacksJS** community with permission.

---

## FullstacksJS Community 🌟

**FullstacksJS** is an open-source community focused on knowledge sharing, exploring, and enhancing developer experience. The primary objective of this community is to establish a professional environment for in-depth content in the software development and engineering field.

- **Website**: [https://fullstacksjs.com/](https://fullstacksjs.com/)
- **GitHub**: [https://github.com/fullstacksjs](https://github.com/fullstacksjs)
