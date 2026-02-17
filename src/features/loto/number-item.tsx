import { cn } from '@/lib/utils';
import { type ComponentProps } from 'react';

export default function NumberItem({
  className,
  ...rest
}: ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'flex size-16 items-center justify-center rounded-full text-4xl font-bold text-red-900 outline-2 outline-red-900',
        className
      )}
      {...rest}
    ></div>
  );
}
