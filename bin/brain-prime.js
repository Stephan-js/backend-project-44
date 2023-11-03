#!/usr/bin/env node

import {
  getCheackAnsw,
  getNumbOrMinesNumb,
  isPrime,
  getStart,
  getAnswer,
} from './functions.js';

function getRightAnsw(numbA) {
  if (isPrime(numbA)) {
    return 'yes';
  }
  return 'no';
}

function primeGame(userNameForGame) { // game logic
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const numb = getNumbOrMinesNumb();
    const question = `Question: ${numb}`;

    const userAnsw = getAnswer(question);
    const rightAnsw = getRightAnsw(numb);

    if (getCheackAnsw(userAnsw, rightAnsw, userNameForGame)) { // cheack answer
      return;
    }
  }
  console.log(`Congratulations, ${userNameForGame}!`);
}

const userName = getStart();

primeGame(userName); // start game
