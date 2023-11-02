#!/usr/bin/env node

import readlineSync from 'readline-sync'; // take readline-sync to see your answ
import { myCheackNumbAnsw, getNumb, getStart } from './functions.js';

function getRightAnsw(numb, numb1) {
  let result = 0;
  let maxNumb = numb1;
  let minNumb = numb;

  if (numb > numb1) {
    maxNumb = numb;
    minNumb = numb1;
  }

  for (let i = 1; i < maxNumb; i += 1) {
    if (maxNumb % i === 0 && minNumb % i === 0) {
      result = i;
    }
  }
  return result;
}

function gcdGame(userNameForGame) {
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const numb = getNumb();
    const numb1 = getNumb();
    console.log(`Question: ${numb} ${numb1}`);

    const userAnsw = readlineSync.question('Your answer: ');
    const rightAnsw = getRightAnsw(numb, numb1);

    if (myCheackNumbAnsw(userAnsw, rightAnsw, userNameForGame)) {
      return;
    }
  }
  console.log(`Congratulations, ${userNameForGame}!`);
}

const userName = getStart();

gcdGame(userName);
