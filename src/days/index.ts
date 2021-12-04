import { day1 } from './day1';
import { day2 } from './day2';
import { day3 } from './day3';

export type Days = { [key: string]: () => Promise<unknown> | void };
const days: Days = { day1, day2, day3 };

export const DAY_NAMES = Object.freeze(Object.keys(days));

export default days;
