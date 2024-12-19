import { cva } from 'class-variance-authority';

export const getInputClasses = cva(
  'flex size-full w-full border-none bg-transparent px-3 py-2 outline-none file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-current  focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
  {
    defaultVariants: {
      size: 'md',
      color: 'error',
    },
    variants: {
      size: {
        lg: 'text-lg font-medium',
        md: 'text-base',
        sm: 'text-sm',
      },
      color: {
        error: 'border-danger text-danger placeholder:text-danger/60',
        default: 'text-brand placeholder:text-body/60',
      },
    },
  }
);
