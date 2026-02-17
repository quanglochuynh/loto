/**
 * @description Utility functions generate shuffled linear number array for loto game
 */
export function getShuffledLinearNumberArray() {
  const array = Array.from({ length: 90 }, (_, i) => i + 1);
  return shuffleArray(array);
}

export function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}
