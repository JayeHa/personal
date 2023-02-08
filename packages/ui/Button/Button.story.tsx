import type { ComponentStory } from "@storybook/react";
import Button from "./Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {},
};

export const Default: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);
