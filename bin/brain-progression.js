#!/usr/bin/env node

import readlineSync from 'readline-sync'; // take readline-sync to see your answ
import { myCheackNumbAnsw, getMinNumb } from './functions.js';

function progressGame(userNameForGame) { // function game
  console.log('What number is missing in the progression?'); // weclome alert
  for (let i = 0; i < 3; i += 1) { // try win
    let result = [getMinNumb()];
    const length = getMinNumb() + 10;
    const getAdd = getMinNumb(); // take what we need

    for (let b = 0; b < length; b += 1) {
      result.push(result[b] + getAdd);
    } // make array

    const hole = length - getMinNumb(); // take random numb
    result = result.sort((a, b) => a - b); // sort array
    const rightAnsw = result[hole]; // find answer

    result[hole] = '..'; // change answer
    result = result.join(' '); // array => str

    console.log(`Question: ${result}`); // ask qustion
    const userAnsw = readlineSync.question('Your answer: '); // take answ

    if (myCheackNumbAnsw(userAnsw, rightAnsw, userNameForGame)) {
      return;
    }
  }
  console.log(`Congratulations, ${userNameForGame}!`); // win logo
}

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

progressGame(userName); // start
