import type { Meta, StoryObj } from "@storybook/react";
import { ColorPalette } from "./index";
import { defaultTheme } from "../theme.css";

const meta = {
  title: "Design System/ColorPalette",
  component: ColorPalette,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className={defaultTheme}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ColorPalette>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
