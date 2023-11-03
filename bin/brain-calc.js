#!/usr/bin/env node
import {
  getCheackAnsw,
  getNumb,
  getSing,
  getStart,
  getAnswer,
} from './functions.js';

function getRightAnsw(singA, numbA, numb1A) {
  if (singA === '-') {
    return numbA - numb1A;
  }
  if (singA === '+') {
    return numbA + numb1A;
  }
  return numbA * numb1A;
}

function calculateGame(userNameForGame) { // game || function
  console.log('What is the result of the expression?'); // welcome logo
  for (let i = 0; i < 3; i += 1) {
    const numb = getNumb();
    const numb1 = getNumb();
    const sing = getSing(); // get all things
    const qustion = `Question: ${numb} ${sing} ${numb1}`; // qustion

    const userAnsw = getAnswer(qustion);
    const rightAnsw = getRightAnsw(sing, numb, numb1);

    if (getCheackAnsw(userAnsw, rightAnsw, userNameForGame)) {
      return;
    }
  }
  console.log(`Congratulations, ${userNameForGame}!`); // win
}

const userName = getStart();

calculateGame(userName); // start game
