import type { Meta, StoryObj } from "@storybook/react";
import { NumberCard } from "./index";
import {
  faUsers,
  faChartLine,
  faDollarSign,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

const meta = {
  title: "Designs/NumberCard",
  component: NumberCard,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    icon: {
      control: false,
      description: "Font Awesome のアイコンオブジェクト",
    },
    color: {
      control: "select",
      options: [
        "gray",
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "purple",
        "pink",
      ],
      description: "カードの背景色",
    },
    subtext: {
      control: "text",
      description: "サブテキスト",
    },
    value: {
      control: "number",
      description: "表示する数値",
    },
  },
} satisfies Meta<typeof NumberCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: faUsers,
    color: "blue",
    subtext: "Active members",
    value: 1234,
  },
};

export const Colors: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "16px",
        padding: "16px",
      }}
    >
      <NumberCard icon={faUsers} color="gray" subtext="Sample" value={100} />
      <NumberCard icon={faUsers} color="red" subtext="Sample" value={200} />
      <NumberCard icon={faUsers} color="orange" subtext="Sample" value={300} />
      <NumberCard icon={faUsers} color="yellow" subtext="Sample" value={400} />
      <NumberCard icon={faUsers} color="green" subtext="Sample" value={500} />
      <NumberCard icon={faUsers} color="blue" subtext="Sample" value={600} />
      <NumberCard icon={faUsers} color="purple" subtext="Sample" value={700} />
      <NumberCard icon={faUsers} color="pink" subtext="Sample" value={800} />
    </div>
  ),
};

export const WithDifferentValues: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "16px",
        padding: "16px",
      }}
    >
      <NumberCard icon={faUsers} color="blue" subtext="Under 100" value={42} />
      <NumberCard
        icon={faChartLine}
        color="green"
        subtext="Thousands"
        value={5678}
      />
      <NumberCard
        icon={faDollarSign}
        color="purple"
        subtext="Millions"
        value={123456}
      />
      <NumberCard
        icon={faShoppingCart}
        color="orange"
        subtext="Empty state"
        value={0}
      />
    </div>
  ),
};

export const WithDifferentIcons: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "16px",
        padding: "16px",
      }}
    >
      <NumberCard icon={faUsers} color="blue" subtext="Active" value={1234} />
      <NumberCard
        icon={faChartLine}
        color="green"
        subtext="This month"
        value={45}
      />
      <NumberCard
        icon={faDollarSign}
        color="purple"
        subtext="Total"
        value={98765}
      />
      <NumberCard
        icon={faShoppingCart}
        color="orange"
        subtext="Today"
        value={321}
      />
    </div>
  ),
};
