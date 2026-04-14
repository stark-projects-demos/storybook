

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  "stories": ['../src/stories/**/*.stories.@(js|jsx|ts|tsx)'],
  "addons": [
    "@stark-lab-inc/storybook-addon-stark",
    "@storybook/addon-docs",
  ],
  "framework": "@storybook/react-vite"
};
export default config;