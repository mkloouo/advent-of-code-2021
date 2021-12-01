import commandLineArgs from 'command-line-args';
import { exit } from 'process';

const optionDefinitions: commandLineArgs.OptionDefinition[] = [
  {
    name: 'day',
    alias: 'd',
    defaultValue: 'day1',
    defaultOption: true,
  },
];

const options = commandLineArgs(optionDefinitions);

import days, { DAY_NAMES } from './days';

(async () => {
  if (!DAY_NAMES.includes(options.day)) {
    console.log(
      'available days:\n' + DAY_NAMES.map((name) => '\t' + name).join('\n')
    );
    exit(1);
  }

  await days[options.day]();
})().catch((e) => console.log(e));
