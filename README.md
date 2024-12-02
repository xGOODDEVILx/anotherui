# AnotherUI

AnotherUI is a UI component library built on top of **Shadcn** and **Tailwind CSS**. This project is designed only for learning purposes, and it's open to contributions for people like me who want to learn how to implement a simple library with React.

## Table of Contents 📃

- [Folder Structure](#folder-structure)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Contributing](#contributing)
- [Commit Guidelines](#commit-guidelines)
- [Design Tokens](#design-tokens)
- [Using anotherUI in Your Project](#using-anotherui-in-your-project)
- [Prerequisites](#prerequisites)

---

## Folder Structure 📂

The project structure is organized as follows:

```
.
├── .storybook/         # Storybook configuration files
├── dist/               # Distribution build (auto-generated)
├── src/
│   ├── components/     # UI Components library
│   │   ├── [name]/     # Each component's folder
│   │   │   ├── libs/   # Helper functions or utilities for the component
│   │   │   ├── [name].tsx  # Component file
│   │   │   ├── [name].stories.tsx  # Storybook file
│   ├── utils/          # General utilities used across the project
│   ├── twPlugin/       # Tailwind custom plugin setup
│       ├── primitives/ # Base values (e.g., colors, spacing) for the plugin
│       ├── tokens/     # Design tokens (e.g., color palettes, typography)
```

---

## Tech Stack ⚙️

- **Vite**: Build tool for fast and optimized development.
- **Rollup**: Module bundler for creating optimized builds.
- **pnpm**: Efficient package manager.
- **Shadcn**: Modular component library built on Tailwind CSS.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Storybook**: Tool for developing and testing UI components in isolation.
- **ts-belt**: A collection of TypeScript utilities for type-safe and reusable code.

---

## Prerequisites 🛒

To work on or use this project, ensure you have:

1. **Node.js** version `v22.10.0` installed.  
   Use [Volta](https://volta.sh/) to manage your Node.js version:
   ```bash
   curl https://get.volta.sh | bash
   volta install node@22.10.0
   ```
2. **pnpm** installed globally:
   ```bash
   npm install -g pnpm
   ```

---

## Installation 💾

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/anotherUI.git
   cd anotherUI
   ```

2. Install dependencies using `pnpm`:

   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm dev
   ```

---

## Using anotherUI in Your Project ⛓️‍💥

To integrate this library into your project:

1. Install the package:

   ```bash
   pnpm install another-ui
   ```

2. Add Tailwind CSS configuration from `another-ui plugin` to your `tailwind.config.js` for design consistency:

   ```js
   import { auTwPlugin } from 'another-ui/auTwPlugin';

   export const config = {
     content: ['./node_modules/another-ui/**/*.js'],
     plugins: [auTwPlugin],
   };
   ```

3. Import the components you need :

   ```tsx
   import { Button } from 'another-ui';
   ```

4. There is no step 4, Happy Coding :D

---

## Contributing 🤝

As I mentioned, This is a personal project, but I welcome contributions from the community! Follow these steps to get started:

1. **Fork the Repository**:

   - Click the `Fork` button on the GitHub repository.

2. **Create a Branch**:

   - Create a branch for your changes:
     ```bash
     git checkout -b your-branch-name
     ```

3. **Make Changes**:

   - Work on the changes based on the requirements.

4. **Push and Create a Pull Request**:

   - Push your branch:
     ```bash
     git push origin your-branch-name
     ```
   - Create a Pull Request (PR) to the `main` branch of the original repository.

5. **Review and Merge**:
   - Changes will be reviewed and merged after approval.

---

## Commit Guidelines 🏷️

Follow these commit message conventions (present tense, Linux style):

- **Add**: For new features or components.  
  Example: `Add Button component`

- **Change**: For modifications to existing functionality.  
  Example: `Change background color in header`

- **Remove**: For deletions.  
  Example: `Remove deprecated utilities`

- **Refactor**: For code improvements without functional changes.  
  Example: `Refactor Card component to improve readability`

- **Introduce**: For introducing new patterns, plugins, or systems.  
  Example: `Introduce new token system in twPlugin`

and so on...

---

## Design Tokens 🎨

The `auTwPlugin` directory includes:

- **Primitives**: Core values (e.g., colors, spacings) used to build the theme.
- **Tokens**: High-level design tokens for typography, color schemes, etc.

> These color tokens are from the **FullstacksJS** community, and I have their permission to use them.

These tokens ensure a consistent design language across components. They can be extended or overridden based on project needs.

---

## FullstacksJS Community 🌟

**FullstacksJS** is an open-source community focused on knowledge sharing, exploring, and enhancing developer experience. The primary objective of this community is to establish a professional environment for in-depth content in the software development and engineering field.

To promote and strengthen the culture of open-source development and contribution, all projects developed within this community are entirely open source, and members are encouraged to participate.

> _We grow together._

- **Website**: [https://fullstacksjs.com/](https://fullstacksjs.com/)
- **GitHub**: [https://github.com/fullstacksjs](https://github.com/fullstacksjs)
