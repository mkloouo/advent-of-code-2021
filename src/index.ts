import commandLineArgs from 'command-line-args';

const optionDefinitions: commandLineArgs.OptionDefinition[] = [
  {
    name: 'day',
    alias: 'd',
    defaultValue: 'day1',
    defaultOption: true,
  },
];

const options = commandLineArgs(optionDefinitions);

import days from './days';
const DAY_NAMES = Object.freeze(Object.keys(days));

if (!DAY_NAMES.includes(options.day)) {
  console.log(
    'available days: ' + DAY_NAMES.map((name) => '\t' + name).join('\n')
  );
}
