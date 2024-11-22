// import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

// const buttonVariants = cva(
//   'ring-danger focus-visible:ring-danger inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
//   {
//     variants: {
//       variant: {
//         default: 'bg-primary text-danger hover:bg-primary/90',
//         destructive:
//           'bg-destructive text-destructive-foreground hover:bg-destructive/90',
//         outline:
//           'border-input bg-background hover:bg-accent hover:text-accent-foreground border',
//         secondary:
//           'bg-secondary text-secondary-foreground hover:bg-secondary/80',
//         ghost: 'hover:bg-accent hover:text-accent-foreground',
//         link: 'text-primary underline-offset-4 hover:underline',
//       },
//       size: {
//         default: 'h-10 px-4 py-2',
//         sm: 'h-9 rounded-md px-3',
//         lg: 'h-11 rounded-md px-8',
//         icon: 'size-10',
//       },
//     },
//     defaultVariants: {
//       variant: 'default',
//       size: 'default',
//     },
//   }
// );

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        // className={cn(buttonVariants({, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button };
