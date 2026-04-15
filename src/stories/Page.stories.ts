import type { Meta, StoryObj } from "@storybook/react-vite";

import { Page } from "./Page";

const meta: Meta<typeof Page> = {
  title: "Example/Page",
  component: Page,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Page>;

export const Callout: Story = {};
