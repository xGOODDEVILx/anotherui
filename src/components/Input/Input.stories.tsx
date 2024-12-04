import { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

export type Story = StoryObj<typeof Input>;

const meta: Meta<typeof Input> = {
  title: 'Input',
  component: Input,
  args: {
    children: 'Click Me',
  },
  argTypes: {
    
  },
};

export default meta;

export const Default: Story = {
  decorators: [
    (_story) => (
      <div className="space-x-2">
      <Input/>
      </div>
    ),
  ],
};
