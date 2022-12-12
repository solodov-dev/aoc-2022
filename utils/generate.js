import fs from 'fs';

const day = process.argv.slice(2).toString().padStart(2, 0);
const dirname = `days/${day}`;

if (fs.existsSync(dirname)) {
  console.error('Directory exists. Aborting.');
}

fs.mkdirSync(dirname);
console.log(`Directory for day ${day} created.`);

['partOne', 'partTwo'].forEach((part) => {
  const partFileData = `export default function ${part}(input) {
  return 'Not implemented';
}

${part}.description = '${part}';
${part}.expected = 'Not implemented';
`;

  fs.writeFileSync(`${dirname}/${part}.js`, partFileData);
  console.log(`${part}.js file created successfully`);
});

fs.writeFileSync(`${dirname}/input`, '');
console.log('input file created successfully');

fs.writeFileSync(`${dirname}/test.input`, '');
console.log('test input file created successfully');

const testFileData = `import partOne from './partOne';
import partTwo from './partTwo';
import getTestInput from '../../utils/getTestInput';

const testInput = getTestInput(import.meta.url);

[partOne, partTwo].forEach((part) => test(part.description, () => {
  expect(part(testInput)).toBe(part.expected);
}));
`;

fs.writeFileSync(`${dirname}/test.js`, testFileData);
console.log('Test file created successfully');

console.log('Done!');
