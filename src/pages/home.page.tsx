import Container from '@/components/common/container';
import { Button } from '@/components/ui/button';
import { useLotoStore } from '@/features/loto/loto.store';
import PickedNumberContainer from '@/features/loto/picked-number-container';
import { CircleDollarSign, RefreshCcw, ShuffleIcon } from 'lucide-react';
import { useEffect } from 'react';
import { toast } from 'sonner';
import '../features/loto/loto.css';

export default function HomePage() {
  const { pickedNumbers, pickNumber, shuffleUnpickedNumbers, reset } =
    useLotoStore();

  const currentNumber =
    pickedNumbers.length > 0 ? pickedNumbers[pickedNumbers.length - 1] : '?';

  const shuffleUnpickedNumbersWithDelay = () => {
    toast.promise(
      new Promise((resolve) => {
        setTimeout(() => {
          shuffleUnpickedNumbers();
          resolve(true);
        }, 1500);
      }),
      {
        loading: 'Đang xáo trộn...',
        success: 'Đã xáo trộn!',
        error: 'Xáo trộn thất bại!',
      }
    );
  };

  const numRemaining = 90 - pickedNumbers.length;

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === ' ') {
        e.preventDefault();
        pickNumber();
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, [pickNumber]);

  return (
    <Container className='py-2'>
      <h1 className='mb-4 text-4xl font-bold text-red-900'>Lô tô</h1>
      {currentNumber && (
        <div
          className='mb-4 flex cursor-pointer flex-col items-center justify-center'
          onClick={() => {
            pickNumber();
          }}
        >
          <p>Số hiện tại: </p>
          <span className='current-number text-center font-bold text-red-700'>
            {currentNumber}
          </span>
        </div>
      )}
      <div className='flex flex-wrap items-center gap-2 rounded-lg bg-white p-2'>
        <Button onClick={pickNumber} size={'lg'} disabled={numRemaining === 0}>
          <CircleDollarSign />
          Bốc số mới
        </Button>
        <Button
          onClick={shuffleUnpickedNumbersWithDelay}
          size={'sm'}
          className='ms-auto'
          variant={'outline'}
          disabled={numRemaining < 2}
        >
          <ShuffleIcon />
          Xáo trộn số chưa chọn
        </Button>
        <Button onClick={reset} size={'sm'} variant={'secondary'}>
          <RefreshCcw />
          Chơi lại
        </Button>
      </div>
      <p className='mt-4'>
        Còn <b>{numRemaining}</b> số
      </p>
      {/* <div className='my-4 flex flex-wrap gap-2'>
        {pickedNumbers.map((number) => (
          <NumberItem key={number}>{number}</NumberItem>
        ))}
      </div> */}
      <PickedNumberContainer className='my-4' />
    </Container>
  );
}
