import type { Meta, StoryObj } from "@storybook/react";
import { Overlay } from "./index";

const meta = {
  component: Overlay,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Overlay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: (
      <div
        style={{
          padding: "2rem",
          backgroundColor: "white",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2>オーバーレイのコンテンツ</h2>
        <p>ここにコンテンツが表示されます</p>
      </div>
    ),
    isShow: false,
  },
};
