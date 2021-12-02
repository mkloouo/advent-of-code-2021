import { readFileSync } from 'fs';

export const day1 = async () => {
  const inputContents = readFileSync('./res/day2-input.txt', 'utf-8');
  const lines = inputContents.split('\n');


  console.log('lines[0]:', lines[0]);
};
