#!/usr/bin/env node

import {
  getCheackAnsw,
  getNumb,
  getStart,
  getAnswer,
} from './functions.js';

function getRightAnsw(numbA) { // make right answer
  if (numbA % 2 === 0) {
    return 'yes';
  }
  return 'no';
}

function evenGame(userNameForGame) { // function || game
  console.log('Answer "yes" if the number is even, otherwise answer "no".'); // welcome logo
  for (let i = 0; i < 3; i += 1) {
    const numb = getNumb();
    const question = `Question: ${numb}`;

    const userAnsw = getAnswer(question); // take answer
    const rightAnsw = getRightAnsw(numb);

    if (getCheackAnsw(userAnsw, rightAnsw, userNameForGame)) { // cheack answer
      return;
    }
  }
  console.log(`Congratulations, ${userNameForGame}!`); // You win!
}

const userName = getStart();

evenGame(userName); // make game
