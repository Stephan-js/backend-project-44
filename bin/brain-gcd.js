#!/usr/bin/env node

import {
  getCheackAnsw,
  getNumb,
  getStart,
  getAnswer,
} from './functions.js';

function getRightAnsw(numbA, numb1A) {
  let result = 0;
  let maxNumb = numb1A;
  let minNumb = numbA;

  if (numbA > numb1A) {
    maxNumb = numbA;
    minNumb = numb1A;
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
    const question = `Question: ${numb} ${numb1}`;

    const userAnsw = getAnswer(question);
    const rightAnsw = getRightAnsw(numb, numb1);

    if (getCheackAnsw(userAnsw, rightAnsw, userNameForGame)) {
      return;
    }
  }
  console.log(`Congratulations, ${userNameForGame}!`);
}

const userName = getStart();

gcdGame(userName);
