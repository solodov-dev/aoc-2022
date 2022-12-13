import parser from './parser.js';
import inRange from './inRange.js';

export default function partTwo(input) {
  let count = 0;
  for (const line of input) {
    const [min1, max1, min2, max2] = parser(line);
    if (inRange(min1, max1, min2)
        || inRange(min1, max1, max2)
        || inRange(min2, max2, min1)
        || inRange(min2, max2, max1)) {
      count++;
    }
  }
  return count;
}

partTwo.description = 'In how many assignment pairs do the ranges overlap?';
partTwo.expected = 4;
