import {
  getShuffledLinearNumberArray,
  shuffleArray,
} from '@/features/loto/loto.util';
import { create } from 'zustand';

export type LotoState = {
  unpickedNumbers: number[];
  pickedNumbers: number[];
  pickNumber: () => void;
  shuffleUnpickedNumbers: () => void;
  reset: () => void;
  columns: {
    '0': number[];
    '1': number[];
    '2': number[];
    '3': number[];
    '4': number[];
    '5': number[];
    '6': number[];
    '7': number[];
    '8': number[];
    '9': number[];
  };
};

export const useLotoStore = create<LotoState>((set) => ({
  pickedNumbers: [],
  unpickedNumbers: getShuffledLinearNumberArray(),
  columns: {
    '0': [],
    '1': [],
    '2': [],
    '3': [],
    '4': [],
    '5': [],
    '6': [],
    '7': [],
    '8': [],
    '9': [],
  },
  pickNumber: () =>
    set((state) => {
      if (state.unpickedNumbers.length === 0) return state;
      const nextNumber = state.unpickedNumbers[0];
      const firstDigit = Math.floor(
        nextNumber / 10
      ) as unknown as keyof LotoState['columns'];
      return {
        pickedNumbers: [...state.pickedNumbers, nextNumber],
        unpickedNumbers: state.unpickedNumbers.slice(1),
        columns: {
          ...state.columns,
          [firstDigit]: [...state.columns[firstDigit], nextNumber],
        },
      };
    }),
  shuffleUnpickedNumbers: () =>
    set((state) => ({
      unpickedNumbers: shuffleArray(state.unpickedNumbers),
    })),
  reset: () =>
    set({
      pickedNumbers: [],
      unpickedNumbers: getShuffledLinearNumberArray(),
      columns: {
        '0': [],
        '1': [],
        '2': [],
        '3': [],
        '4': [],
        '5': [],
        '6': [],
        '7': [],
        '8': [],
        '9': [],
      },
    }),
}));
