import { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { User2 } from 'lucide-react';

export type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  args: {
    children: 'Click Me',
  },
  argTypes: {
    color: {
      control: 'inline-radio',
      options: ['default', 'ghost', 'link', 'danger', 'success'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    shape: {
      control: 'inline-radio',
      options: ['normal', 'pill'],
    },
    mode: {
      control: 'inline-radio',
      options: ['default', 'outline'],
    },
  },
};

export default meta;

export const Default: Story = {
  args: {
    color: 'default',
    size: 'md',
    shape: 'normal',
    mode: 'default',
  },
  decorators: [
    (_story, context) => (
      <div className="space-x-2">
        <Button {...context.args} size="sm" />
        <Button {...context.args} size="md" />
        <Button {...context.args} size="lg" />
      </div>
    ),
  ],
};

export const Danger: Story = {
  args: {
    color: 'danger',
    size: 'md',
    shape: 'normal',
    mode: 'default',
  },
  decorators: [
    (_story, context) => (
      <div className="space-x-2">
        <Button {...context.args} size="sm" />
        <Button {...context.args} size="md" />
        <Button {...context.args} size="lg" />
      </div>
    ),
  ],
};

export const Success: Story = {
  args: {
    color: 'success',
    size: 'md',
    shape: 'normal',
    mode: 'default',
  },
  decorators: [
    (_story, context) => (
      <div className="space-x-2">
        <Button {...context.args} size="sm" />
        <Button {...context.args} size="md" />
        <Button {...context.args} size="lg" />
      </div>
    ),
  ],
};

export const Ghost: Story = {
  args: {
    color: 'ghost',
  },
  decorators: [
    (_story, context) => (
      <div className="space-x-2">
        <Button {...context.args} size="sm" />
        <Button {...context.args} size="md" />
        <Button {...context.args} size="lg" />
      </div>
    ),
  ],
};

export const Link: Story = {
  args: {
    color: 'link',
  },
  decorators: [
    (_story, context) => (
      <div className="space-x-2">
        <Button {...context.args} size="sm" />
        <Button {...context.args} size="md" />
        <Button {...context.args} size="lg" />
      </div>
    ),
  ],
};

export const OutLine: Story = {
  args: {
    color: 'default',
    mode: 'outline',
  },
  decorators: [
    (_story, context) => (
      <div className="space-x-2">
        <Button {...context.args} size="sm" />
        <Button {...context.args} size="md" />
        <Button {...context.args} size="lg" />
      </div>
    ),
  ],
};

export const OutLineDanger: Story = {
  args: {
    color: 'danger',
    mode: 'outline',
  },
  decorators: [
    (_story, context) => (
      <div className="space-x-2">
        <Button {...context.args} size="sm" />
        <Button {...context.args} size="md" />
        <Button {...context.args} size="lg" />
      </div>
    ),
  ],
};

export const OutLineSuccess: Story = {
  args: {
    color: 'success',
    mode: 'outline',
  },
  decorators: [
    (_story, context) => (
      <div className="space-x-2">
        <Button {...context.args} size="sm" />
        <Button {...context.args} size="md" />
        <Button {...context.args} size="lg" />
      </div>
    ),
  ],
};

export const WithIcon: Story = {
  args: {
    color: 'default',
    mode: 'default',
  },
  decorators: [
    (_story, context) => (
      <div className="space-x-2">
        <Button {...context.args} size="sm" prefixIcon={<User2 />} />
        <Button {...context.args} size="md" prefixIcon={<User2  />} />
        <Button {...context.args} size="lg" prefixIcon={<User2 />} />
      </div>
    ),
  ],
};

export const Loading: Story = {
  args: {
    color: 'default',
    size: 'md',
    shape: 'normal',
    loading: true,
  },
  decorators: [
    (_story, context) => (
      <div className="flex items-center space-x-2">
        <Button {...context.args} size="sm" />
        <Button {...context.args} size="md" />
        <Button {...context.args} size="lg" />
      </div>
    ),
  ],
};

export const Disabled: Story = {
  args: {
    color: 'default',
    size: 'md',
    shape: 'normal',
    disabled: true,
  },
  decorators: [
    (_story, context) => (
      <div className="flex items-center space-x-2">
        <Button {...context.args} size="sm" />
        <Button {...context.args} size="md" />
        <Button {...context.args} size="lg" />
      </div>
    ),
  ],
};
