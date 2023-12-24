#!/usr/bin/env node

import runEngine from '../index.js';
import { getRandomInRange, getAnswer } from '../functions.js';

/*
* CODE!
* NO CHANGING!
*/

// Make string to game
const getString = () => {
  // Get all info for array (string)
  const array = [getRandomInRange(1, 10)];
  const length = getRandomInRange(8, 18);
  const hole = length - getRandomInRange(0, 7); 
  const add = (getRandomInRange(0, 10) === 10) ? getRandomInRange() : getRandomInRange(1, 10);

  // Make big array
  for (let i = 0; i < length; i += 1) {
    array.push(array[i] + add);
  }

  // Make hole and make array to string
  array[hole] = '..';
  return array.join(' ');
};

// Get right answer
const getRightAnsw = (string) => {
  // String convert to array (back)
  const array = string.split(' ');
  // Use logic + some math
  const add = array[1] - array[0]
  for (let i = 0; i < array.length; i++) {
    if (array[i] === '..') {
      return Number(array[i - 1]) + add;
    }
  }
}

// Game logic
const progressGame = () => {
  const string = getString();

  // Ask qustion
  console.log(`Question: ${string}`);
  const userAnsw = getAnswer();

  // Return the packaged question and answer
  return [string, userAnsw];
};

// Run engine and set rule
const rule = 'What number is missing in the progression?';
runEngine(rule, progressGame, getRightAnsw);
