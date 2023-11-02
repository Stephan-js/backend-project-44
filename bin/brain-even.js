#!/usr/bin/env node

import readlineSync from 'readline-sync'; // take readline-sync to see your answ
import { myCheackAnsw, getNumb } from './functions.js';

function evenGame(userNameForGame) { // function || game
  console.log('Answer "yes" if the number is even, otherwise answer "no".'); // welcome logo
  for (let i = 0; i < 3; i += 1) {
    const numb = getNumb();
    console.log(`Question: ${numb}`);

    const userAnsw = readlineSync.question('Your answer: '); // take answer
    let rightAnsw = '';

    if (numb % 2 === 0) {
      rightAnsw = 'yes';
    } else { // make right answer
      rightAnsw = 'no';
    }

    if (myCheackAnsw(userAnsw, rightAnsw, userNameForGame)) { // cheack answer
      return;
    }
  }
  console.log(`Congratulations, ${userNameForGame}!`); // You win!
}

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

evenGame(userName); // make game
