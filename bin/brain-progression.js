#!/usr/bin/env node

import {
  getCheackAnsw,
  getNumb,
  getMinNumb,
  getStart,
  getAnswer,
} from './functions.js';

function getArray() {
  const array = [getMinNumb()];
  const length = getMinNumb() + 10;
  let add = getMinNumb(); // take all what I need
  if (getMinNumb() > 8) { // Hard mode
    add += add;
  }

  for (let i = 0; i < length; i += 1) {
    array.push(array[i] + add);
  } // make array
  return array;
}

function getRightAnsw() {
  let result = getArray();

  const hole = result.length - getMinNumb(); // take random numb
  const rightAnsw = result[hole]; // find answer

  result[hole] = '..'; // change answer
  result = result.join(' '); // array => str

  return { results: result, answer: rightAnsw };
}

function progressGame(userNameForGame) { // function game
  console.log('What number is missing in the progression?'); // weclome alert
  for (let i = 0; i < 3; i += 1) { // try win
    const answerAndResults = getRightAnsw();
    const question = `Question: ${answerAndResults.results}`;

    const userAnsw = getAnswer(question);

    if (getCheackAnsw(userAnsw, answerAndResults.answer, userNameForGame)) { // cheack answer
      return;
    }
  }
  console.log(`Congratulations, ${userNameForGame}!`); // win logo
}

getStart(progressGame); // start
