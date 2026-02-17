import { useLotoStore } from '@/features/loto/loto.store';
import NumberItem from '@/features/loto/number-item';
import { cn } from '@/lib';
import { ComponentProps } from 'react';

type Props = {} & ComponentProps<'div'>;

export default function PickedNumberContainer({ className, ...props }: Props) {
  const bins = useLotoStore((state) => state.columns);

  return (
    <div className={cn('', className)} {...props}>
      <div className='flex flex-wrap items-center gap-8'>
        {Object.keys(bins).map((key) => (
          <div
            key={key}
            className='flex flex-col items-center justify-center gap-2 rounded-full text-sm font-bold text-red-700'
          >
            {bins[key as keyof typeof bins].map((number: number) => (
              <NumberItem key={number}>{number}</NumberItem>
            ))}
          </div>
        ))}
      </div>
      {import.meta.env.DEV && (
        <button
          onClick={() => {
            console.log(bins);
          }}
        >
          log
        </button>
      )}
    </div>
  );
}
