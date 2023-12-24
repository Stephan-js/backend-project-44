#!/usr/bin/env node

import runEngine from '../index.js';
import { getRandomInRange, getAnswer } from '../functions.js';

/*
* CODE!
* NO CHANGING!
*/

// Bad function to find answer...
const getRightAnsw = (data) => {
  // Unpackaging the data 
  const [numbA, numb1A] = data;
  
  // Let result, min and max numbers
  let result = 1;
  let maxNumb = (numb1A > numbA) ? numb1A : numbA;
  let minNumb = (numb1A > numbA) ? numbA : numb1A;

  // Find greatest divisor
  for (let i = 1; i < maxNumb; i += 1) {
    if (maxNumb % i === 0 && minNumb % i === 0) {
      result = i;
    }
  }

  // Return result
  return result;
};

// Rule for game
const gcdGame = () => {
  const numb = getRandomInRange(1);
  const numb1 = getRandomInRange(1);

  // Ask question and get answer
  console.log(`Question: ${numb} ${numb1}`);
  const userAnsw = getAnswer();

  // Return the packaged question and answer
  return [[numb, numb1], userAnsw]
};

// Start engine
const rule = 'Find the greatest common divisor of given numbers.';
runEngine(rule, gcdGame, getRightAnsw);
