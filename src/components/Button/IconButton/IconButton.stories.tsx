import { Meta, StoryObj } from '@storybook/react';
import { IconButton } from './IconButton';
import { User2 } from 'lucide-react';

export type Story = StoryObj<typeof IconButton>;

const meta: Meta<typeof IconButton> = {
  title: 'Icon Button',
  component: IconButton,
  argTypes: {
    color: {
      control: 'inline-radio',
      options: ['default', 'ghost', 'link', 'danger', 'success'],
    },
    size: {
      control: 'inline-radio',
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
        <IconButton {...context.args} size="sm">
          <User2 />
        </IconButton>
        <IconButton {...context.args} size="md">
          <User2 />
        </IconButton>
        <IconButton {...context.args} size="lg">
          <User2 />
        </IconButton>
      </div>
    ),
  ],
};

export const Loading: Story = {
  args: {
    color: 'default',
    size: 'md',
    shape: 'normal',
    mode: 'default',
    loading:true
  },
  decorators: [
    (_story, context) => (
      <div className="space-x-2">
        <IconButton {...context.args} size="sm">
          <User2 />
        </IconButton>
        <IconButton {...context.args} size="md">
          <User2 />
        </IconButton>
        <IconButton {...context.args} size="lg">
          <User2 />
        </IconButton>
      </div>
    ),
  ],
};
