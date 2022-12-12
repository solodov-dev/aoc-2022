import { readFile } from 'fs';

const logAnswers = async (day) => {
  console.log(`Answers for Day ${day}`);
  if (day < 10) day = `0${day}`;
  try {
    const { default: partOne } = await import(`../days/${day}/partOne.js`);
    const { default: partTwo } = await import(`../days/${day}/partTwo.js`);
    const funcs = [partOne, partTwo];
    readFile(
      `./days/${day}/input`,
      'utf8',
      (err, data) => {
        err
          ? console.error(err)
          : funcs.forEach((func) => console.log(`${func.description}: ${func(data.split('\n'))}`));
      },
    );
  } catch (e) {
    console.error(e);
  }
};

const day = process.argv.slice(2);
logAnswers(day);
