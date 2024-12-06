import { cva } from 'class-variance-authority';

export const getInputClasses = cva(
  'flex h-10 w-full rounded-md border  border-brand px-3 py-2 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-body placeholder:text-neutral focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm'
);
