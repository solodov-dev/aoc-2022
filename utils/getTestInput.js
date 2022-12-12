import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

export default (url) => {
  const testInputPath = dirname(fileURLToPath(url));
  const file = readFileSync(`${testInputPath}/test.input`, 'utf8');
  return file.split('\n');
};
