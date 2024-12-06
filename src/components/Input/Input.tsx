import { cn } from '@src/utils/cn';
import * as React from 'react';

import { getInputClasses } from './libs/getInputClasses';

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
  ({ className, type, inputMode = 'text', ...props }, ref) => {
    return (
      <input
        className={cn(getInputClasses, className)}
        inputMode={inputMode}
        placeholder="HI"
        ref={ref}
        type={type}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
