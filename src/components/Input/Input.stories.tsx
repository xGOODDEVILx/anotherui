import { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { EyeIcon } from 'lucide-react';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  args: {
    hasError: false,
    inputMode: 'text',
    placeholder: 'Enter text here...',
  },
  argTypes: {
    hasError: {
      control: 'boolean',
      description: 'Indicates whether the input has an error.',
    },
    helperText: {
      control: 'text',
      description: 'Displays helper text below the input.',
    },
    prefixIcon: {
      control: false,
      description: 'Icon displayed before the input.',
    },
    suffixIcon: {
      control: false,
      description: 'Icon displayed after the input.',
    },
    inputMode: {
      control: 'select',
      options: ['text', 'email', 'numeric', 'tel', 'url'],
      description: 'Specifies the type of data expected in the input.',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the input field.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {},
  decorators: [
    (_story, context) => (
      <div className="space-x-2 w-96">
        <Input {...context.args} />
      </div>
    ),
  ],
};

export const WithIcon: Story = {
  args: {
    prefixIcon: <EyeIcon />,
    suffixIcon: <EyeIcon />,
    placeholder: 'With icons',
  },
  decorators: [
    (_story, context) => (
      <div className="space-x-2 w-96">
        <Input {...context.args} />
      </div>
    ),
  ],
};

export const Error: Story = {
  args: {
    hasError: true,
    helperText: 'This field is required.',
    placeholder: 'Error state',
  },
  decorators: [
    (_story, context) => (
      <div className="space-x-2 w-96">
        <Input {...context.args} />
      </div>
    ),
  ],
};

export const HelperText: Story = {
  args: {
    helperText: 'Please enter a valid email address.',
    placeholder: 'Helper text example',
  },
  decorators: [
    (_story, context) => (
      <div className="space-x-2 w-96">
        <Input {...context.args} />
      </div>
    ),
  ],
};
