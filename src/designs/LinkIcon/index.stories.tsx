import type { Meta, StoryObj } from "@storybook/react";
import { LinkIcon } from "./index";
import { faGithub, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faHouse } from "@fortawesome/free-solid-svg-icons";

const meta = {
  title: "Designs/LinkIcon",
  component: LinkIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    icon: {
      description: "Font Awesomeアイコン定義",
    },
    color: {
      control: "select",
      options: ["gray", "red", "orange", "yellow", "green", "blue", "purple", "pink"],
      description: "背景色（アイコン自体は白色固定）",
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", "2xl"],
      description: "アイコンのサイズ",
    },
  },
} satisfies Meta<typeof LinkIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// デフォルト
export const Default: Story = {
  args: {
    icon: faGithub,
    href: "https://github.com",
    color: "gray",
    size: "md",
    target: "_blank",
    rel: "noopener noreferrer",
  },
};

// SNSアイコン集
export const SNSIcons: Story = {
  args: {
    icon: faGithub,
  },
  render: () => (
    <div style={{ display: "flex", gap: "16px" }}>
      <LinkIcon
        icon={faGithub}
        href="https://github.com"
        color="gray"
        size="lg"
        target="_blank"
        rel="noopener noreferrer"
      />
      <LinkIcon
        icon={faXTwitter}
        href="https://x.com"
        color="blue"
        size="lg"
        target="_blank"
        rel="noopener noreferrer"
      />
    </div>
  ),
};

// 各カラーバリエーション
export const Colors: Story = {
  args: {
    icon: faEnvelope,
  },
  render: () => (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
      <LinkIcon icon={faEnvelope} color="gray" href="#" />
      <LinkIcon icon={faEnvelope} color="red" href="#" />
      <LinkIcon icon={faEnvelope} color="orange" href="#" />
      <LinkIcon icon={faEnvelope} color="yellow" href="#" />
      <LinkIcon icon={faEnvelope} color="green" href="#" />
      <LinkIcon icon={faEnvelope} color="blue" href="#" />
      <LinkIcon icon={faEnvelope} color="purple" href="#" />
      <LinkIcon icon={faEnvelope} color="pink" href="#" />
    </div>
  ),
};

// 各サイズバリエーション
export const Sizes: Story = {
  args: {
    icon: faHouse,
  },
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <LinkIcon icon={faHouse} size="xs" color="blue" href="#" />
      <LinkIcon icon={faHouse} size="sm" color="blue" href="#" />
      <LinkIcon icon={faHouse} size="md" color="blue" href="#" />
      <LinkIcon icon={faHouse} size="lg" color="blue" href="#" />
      <LinkIcon icon={faHouse} size="xl" color="blue" href="#" />
      <LinkIcon icon={faHouse} size="2xl" color="blue" href="#" />
    </div>
  ),
};

// 小サイズ
export const Small: Story = {
  args: {
    icon: faGithub,
    href: "https://github.com",
    color: "gray",
    size: "sm",
    target: "_blank",
  },
};

// 大サイズ
export const Large: Story = {
  args: {
    icon: faGithub,
    href: "https://github.com",
    color: "purple",
    size: "xl",
    target: "_blank",
  },
};
