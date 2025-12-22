import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "./index";

const meta = {
  title: "Designs/Tag",
  component: Tag,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: ["gray", "red", "orange", "yellow", "green", "blue", "purple", "pink"],
      description: "タグの背景色（白色文字で表示）",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "タグのサイズ",
    },
    children: {
      control: "text",
      description: "タグのテキスト内容",
    },
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

// デフォルトのタグ
export const Default: Story = {
  args: {
    children: "Tag",
    color: "gray",
    size: "md",
  },
};

// 各カラーバリエーション
export const Colors: Story = {
  args: {
    children: "Tag",
  },
  render: () => (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      <Tag color="gray">Gray</Tag>
      <Tag color="red">Red</Tag>
      <Tag color="orange">Orange</Tag>
      <Tag color="yellow">Yellow</Tag>
      <Tag color="green">Green</Tag>
      <Tag color="blue">Blue</Tag>
      <Tag color="purple">Purple</Tag>
      <Tag color="pink">Pink</Tag>
    </div>
  ),
};

// 各サイズバリエーション
export const Sizes: Story = {
  args: {
    children: "Tag",
  },
  render: () => (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <Tag size="sm" color="blue">Small</Tag>
      <Tag size="md" color="blue">Medium</Tag>
      <Tag size="lg" color="blue">Large</Tag>
    </div>
  ),
};

// 小サイズ
export const Small: Story = {
  args: {
    children: "Small Tag",
    color: "blue",
    size: "sm",
  },
};

// 中サイズ
export const Medium: Story = {
  args: {
    children: "Medium Tag",
    color: "green",
    size: "md",
  },
};

// 大サイズ
export const Large: Story = {
  args: {
    children: "Large Tag",
    color: "purple",
    size: "lg",
  },
};

// 複数のタグを組み合わせた例
export const Multiple: Story = {
  args: {
    children: "Tag",
  },
  render: () => (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      <Tag color="blue" size="sm">React</Tag>
      <Tag color="green" size="sm">TypeScript</Tag>
      <Tag color="purple" size="sm">Vite</Tag>
      <Tag color="orange" size="sm">Storybook</Tag>
      <Tag color="pink" size="sm">Vanilla Extract</Tag>
    </div>
  ),
};

// 長いテキストの例
export const LongText: Story = {
  args: {
    children: "Very Long Tag Text Example",
    color: "red",
    size: "md",
  },
};
