#!/usr/bin/env node

import readlineSync from 'readline-sync'; // take readline-sync to see your answ
import {
  myCheackAnsw,
  getNumbOrMinesNumb,
  isPrime,
  getStart,
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
    console.log(`Question: ${numb}`);

    const userAnsw = readlineSync.question('Your answer: ');
    const rightAnsw = getRightAnsw(numb);

    if (myCheackAnsw(userAnsw, rightAnsw, userNameForGame)) { // cheack answer
      return;
    }
  }
  console.log(`Congratulations, ${userNameForGame}!`);
}

const userName = getStart();

primeGame(userName); // start game
