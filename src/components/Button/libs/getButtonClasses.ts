import { cva } from 'class-variance-authority';

export const getButtonClasses = cva(
  'inline-flex items-center justify-center gap-1 whitespace-nowrap font-medium ring-offset-brand transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-60 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    defaultVariants: {
      size: 'md',
      color: 'default',
      shape: 'normal',
      mode: 'default',
    },
    variants: {
      size: {
        md: 'h-10  px-2 py-1 text-base',
        lg: 'h-12  px-3 py-2 text-lg',
        sm: 'h-8 rounded-xl p-1 text-xs',
      },
      color: {
        default: 'bg-brand',
        ghost: 'border-none',
        link: 'border-none text-info underline-offset-4 hover:underline',
        danger: 'bg-danger text-danger-fg hover:bg-danger/90',
        success: 'bg-success',
      },
      shape: {
        pill: 'rounded-au-full',
        normal: 'rounded-au',
      },
      mode: {
        default: '',
        outline: 'border-2 bg-transparent',
      },
    },
    compoundVariants: [
      {
        mode: 'outline',
        color: 'default',
        className: 'border-brand text-brand hover:bg-brand hover:text-brand-fg',
      },
      {
        mode: 'default',
        color: 'default',
        className: ' text-brand-fg  hover:bg-brand-medium/90',
      },
      {
        mode: 'outline',
        color: 'danger',
        className:
          'border-danger !text-danger hover:!bg-danger hover:!text-danger-fg',
      },
      {
        mode: 'outline',
        color: 'success',
        className:
          'border-success text-success hover:bg-success hover:text-success-fg',
      },
      {
        mode: 'default',
        color: 'success',
        className: 'bg-success text-success-fg hover:bg-success/90',
      },
    ],
  }
);
