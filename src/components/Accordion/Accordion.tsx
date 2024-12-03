/* eslint-disable @typescript-eslint/no-namespace */
'use client';

import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { cn } from '@src/utils/cn';
import { ChevronDown } from 'lucide-react';
import * as React from 'react';

export namespace Accordion {
  export const Root = AccordionPrimitive.Root;

  export const Item = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
  >(({ className, ...props }, ref) => (
    <AccordionPrimitive.Item
      className={cn('border-b', className)}
      ref={ref}
      {...props}
    />
  ));
  Item.displayName = 'AccordionItem';

  export const Trigger = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
  >(({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          'flex flex-1 items-center justify-between py-4 font-medium transition-all [&[data-state=open]>svg]:rotate-180',
          className
        )}
        {...props}
      >
        {children}
        <ChevronDown className="size-4 shrink-0 transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  ));
  Trigger.displayName = AccordionPrimitive.Trigger.displayName;

  export const Content = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
  >(({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Content
      className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      ref={ref}
      {...props}
    >
      <div className={cn('pb-4 pt-0', className)}>{children}</div>
    </AccordionPrimitive.Content>
  ));

  Content.displayName = AccordionPrimitive.Content.displayName;
}
