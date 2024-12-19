import type { VariantProps } from 'class-variance-authority';

import { G } from '@mobily/ts-belt';
import { cn } from '@src/utils/cn';
import { forwardRef, type ReactNode } from 'react';

import { createIcon } from './libs/createIcon';
import { getInputClasses } from './libs/getInputClasses';

type InputVariants = VariantProps<typeof getInputClasses>;

type InputProps = React.ComponentProps<'input'> & {
  prefixIcon?: ReactNode;
  suffixIcon?: ReactNode;
  containerClassName?: string;
  hasError?: boolean;
  helperText?: string;
  helperTextClassName?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      containerClassName,
      type,
      inputMode = 'text',
      hasError,
      prefixIcon,
      suffixIcon,
      helperText,
      helperTextClassName,
      placeholder,
      ...props
    },
    ref
  ) => {
    const getInputColor = (): InputVariants['color'] =>
      hasError ? 'error' : 'default';

    return (
      <div className="flex grow flex-col">
        <div
          className={cn(
            'flex items-center gap-1 rounded-xl border  px-3 focus-within:ring-1',
            hasError
              ? 'border-danger focus-within:ring-danger'
              : 'focus-within:ring-current',

            containerClassName
          )}
        >
          {G.isNotNullable(prefixIcon) &&
            createIcon(prefixIcon, { color: hasError ? 'error' : 'default' })}
          <input
            className={getInputClasses({ className, color: getInputColor() })}
            inputMode={inputMode}
            placeholder={placeholder}
            ref={ref}
            type={type}
            {...props}
          />
          {G.isNotNullable(suffixIcon) &&
            createIcon(suffixIcon, { color: hasError ? 'error' : 'default' })}
        </div>
        {G.isNotNullable(helperText) && (
          <small
            className={cn('mt-1 text-xs text-body', {
              'text-danger': hasError,
              helperTextClassName,
            })}
          >
            {helperText}
          </small>
        )}
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
