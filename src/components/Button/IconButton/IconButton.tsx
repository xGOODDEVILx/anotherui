import type { VariantProps } from 'class-variance-authority';

import { B } from '@mobily/ts-belt';
import { Slot } from '@radix-ui/react-slot';
import { Loader2 } from 'lucide-react';
import { type ButtonHTMLAttributes, forwardRef } from 'react';

import { createIcon } from '../libs/createIcon';
import { getIconButtonClasses } from './libs/getIconButtonClasses';

export type IconButtonVariants = VariantProps<typeof getIconButtonClasses>;

export type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  IconButtonVariants & {
    asChild?: boolean;
    loading?: boolean;
  };

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      className,
      size,
      color,
      children,
      shape,
      loading = false,
      disabled = false,
      asChild = false,
      mode = 'default',
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    const isDisabled = B.or(disabled, loading);

    return (
      <Comp
        disabled={isDisabled}
        ref={ref}
        className={getIconButtonClasses({
          className,
          shape,
          size,
          color,
          mode,
        })}
        {...props}
      >
        {B.ifElse(
          loading,
          () => createIcon(<Loader2 />, { className: 'animate-spin', size }),
          () => createIcon(children, { size })
        )}
      </Comp>
    );
  }
);
IconButton.displayName = 'IconButton';

export { IconButton };
