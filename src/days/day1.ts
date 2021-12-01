import { readFileSync } from 'fs';

export const day1 = async () => {
  const inputContents = readFileSync('./res/day1-input.txt', 'utf-8');
  const lines = inputContents.split('\n');
  const depths = lines.map(Number);

  let ascends = 0;
  let currentAscend = depths[0];

  for (let i = 1; i < depths.length; ++i) {
      if (currentAscend < depths[i]) {
        ++ascends;
      }

      currentAscend = depths[i];
  }

  console.log(`ascends: ${ascends}`);

  

};
