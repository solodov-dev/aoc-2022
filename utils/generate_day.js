import fs from 'fs';

const day = process.argv.slice(2).toString().padStart(2, 0);
const dirname = 'day_' + day;

if (fs.existsSync(dirname)) {
  console.error('Directory exists. Aborting.');
}

fs.mkdirSync(dirname);
console.log(`Directory for day ${day} created.`)

const indexFileData = `
const ${dirname} = [
    {
        title: '',
        result: (input) => fn(input)
    },
    {
        title: '',
        result: (input) => fn(input)
    },
];

export default ${dirname};
`

fs.writeFileSync(`${dirname}/input`, '');
console.log('input file created successfully');

fs.writeFileSync(`${dirname}/index.js`, indexFileData)
console.log('index.js file created successfully')

const testFileData = `
const testInput = [
]

test('', () => {
    expect(fn(testInput)).toBe();
})
`

fs.writeFileSync(`${dirname}/${dirname}.test.js`, testFileData);
console.log('Test file created successfully')

console.log('Done!');
