#!/usr/bin/env node

import readlineSync from 'readline-sync'; // take readline-sync to see your answ
import { myCheackAnsw, getNumb, getStart } from './functions.js';

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
    console.log(`Question: ${numb}`);

    const userAnsw = readlineSync.question('Your answer: '); // take answer
    const rightAnsw = getRightAnsw(numb);

    if (myCheackAnsw(userAnsw, rightAnsw, userNameForGame)) { // cheack answer
      return;
    }
  }
  console.log(`Congratulations, ${userNameForGame}!`); // You win!
}

const userName = getStart();

evenGame(userName); // make game
