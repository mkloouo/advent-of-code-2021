import { day1 } from './day1';

export type Days = { [key: string]: () => Promise<unknown> | void };
const days: Days = { day1 };

export const DAY_NAMES = Object.freeze(Object.keys(days));

export default days;
