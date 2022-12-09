import { readFile } from 'fs';

const logAnswers = async (day) => {
  console.log(`Answers for Day ${day}`);
  if (day < 10) day = '0' + day;
  try {
    const { default: answers } = await import(`../day_${day}/index.js`);
      readFile(`./day_${day}/input`,
      'utf8',
      (err, data) => {
        err
          ? console.error(err)
          : answers.forEach((answer) =>
              console.log(`${answer.title}: ${answer.result(data.split('\n'))}`)
            );
      }
    );
  } catch (e) {
    console.error(e);
  }
};

const day = process.argv.slice(2);
logAnswers(day);
