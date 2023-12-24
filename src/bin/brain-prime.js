#!/usr/bin/env node

import runEngine from '../index.js';
import { getRandomInRange, getAnswer } from '../functions.js';

/*
* CODE!
* NO CHANGING!
*/

// Function to find answer
const getRightAnsw = (num) => {
  // Use basic math to find answer
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return (num > 1) ? 'yes' : 'no';
};

// Raund logic
const primeGame = () => {
  const numb = getRandomInRange(-10, 100);

  // Ask question and get answer
  console.log(`Question: ${numb}`);
  const userAnsw = getAnswer();

  // Return the packaged question and answer
  return [numb, userAnsw];
};

// Start game and get rules
const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
runEngine(rule, primeGame, getRightAnsw);
