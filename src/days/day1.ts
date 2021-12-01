import { readFileSync } from 'fs';

export const day1 = async () => {
  const inputContents = readFileSync('./res/day1-input.txt', 'utf-8');
  const lines = inputContents.split('\n');
  const depths = lines.map(Number);

  let ascends = 0;
  let prevAscendSum = null;
  const getCurrentSum = (i: number) => depths[i] + depths[i + 1] + depths[i + 2];

  for (let i = 0; i < depths.length - 2; ++i) {
      if (prevAscendSum === null) {
          prevAscendSum = getCurrentSum(i);
          continue; 
      } else {
          const currAscendSum = getCurrentSum(i);
          if (prevAscendSum < currAscendSum) {
              ++ascends;
          }

          prevAscendSum = currAscendSum;
      }
  }

  console.log(`ascends: ${ascends}`);
};
