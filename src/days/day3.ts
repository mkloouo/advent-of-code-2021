import { readFileSync } from 'fs';

export const day3 = async () => {
  const inputContents = readFileSync('./res/day3-input.txt', 'utf-8');
  const lines = inputContents.split('\n');

  console.log('lines[0]', lines[0]);
};
