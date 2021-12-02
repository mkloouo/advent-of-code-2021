import { day1 } from './day1';
import { day2 } from './day2';

export type Days = { [key: string]: () => Promise<unknown> | void };
const days: Days = { day1, day2 };

export const DAY_NAMES = Object.freeze(Object.keys(days));

export default days;
