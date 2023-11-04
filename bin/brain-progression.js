#!/usr/bin/env node

import {
  getCheackAnsw,
  getMinNumb,
  getStart,
  getAnswer,
} from './functions.js';

function getArray() {
  const array = [getMinNumb()];
  const length = getMinNumb() + 10;
  const getAdd = getMinNumb(); // take all what I need

  for (let i = 0; i < length; i += 1) {
    array.push(array[i] + getAdd);
  } // make array
  return array;
}

function getRightAnsw() {
  let result = getArray();

  const hole = result.length - getMinNumb(); // take random numb
  result = result.sort((a, b) => a - b); // sort array
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
