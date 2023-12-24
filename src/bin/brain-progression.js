#!/usr/bin/env node

import runEngine from '../index.js';
import { getRandomInRange, getAnswer } from '../functions.js';

/*
* CODE!
* NO CHANGING!
*/

// Get right answer
const getRightAnsw = (string) => {
  // String convert to array (back)
  const array = string.split(' ');
  // Use logic + some math
  const add = (Number.isNaN(array[1] - array[0])) ? array[3] - array[2] : array[1] - array[0];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === '..') {
      return Number(array[i - 1]) + add;
    }
  }
  return true;
};

// Game logic
const progressGame = () => {
  // Get all info for array (string)
  const array = [getRandomInRange(1, 10)];
  const length = getRandomInRange(8, 18);
  const hole = length - getRandomInRange(1, 7);
  const add = (getRandomInRange(0, 10) === 10) ? getRandomInRange() : getRandomInRange(1, 10);

  // Make big array
  for (let i = 0; i < length; i += 1) {
    array.push(array[i] + add);
  }

  // Make hole and make array to string
  array[hole] = '..';
  const string = array.join(' ');

  // Ask qustion
  console.log(`Question: ${string}`);
  const userAnsw = getAnswer();

  // Return the packaged question and answer
  return [string, userAnsw];
};

// Run engine and set rule
const rule = 'What number is missing in the progression?';
runEngine(rule, progressGame, getRightAnsw);
