import { cn } from '@/lib';
import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';

export interface ContainerProps
  extends
    React.ButtonHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {}

const containerVariants = cva('mx-auto w-full px-2', {
  variants: {
    size: {
      xs: 'w-[24rem] max-w-full',
      sm: 'sm:w-11/12 md:w-2/3 lg:w-1/2 max-w-[36rem]',
      md: 'sm:w-11/12 md:w-5/6 lg:w-4/6 xl:w-1/2',
      lg: 'sm:w-11/12 md:w-5/6 lg:w-4/5 xl:w-2/3',
      max: 'px-0',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export default function Container({
  className,
  children,
  size,
  ...rest
}: ContainerProps) {
  return (
    <div className={cn(containerVariants({ size }), className)} {...rest}>
      {children}
    </div>
  );
}
