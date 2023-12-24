#!/usr/bin/env node

import runEngine from '../index.js';
import { getRandomInRange, getAnswer } from '../functions.js';

/*
* CODE!
* NO CHANGING!
*/

// VERY simple check code
const getRightAnsw = (numbA) => (numbA % 2 === 0) ? 'yes' : 'no';

// Function or Game
const evenGame = () => {
  const numb = getRandomInRange();

  // Take user answer
  console.log(`Question: ${numb}`);
  const userAnsw = getAnswer();

  // Return the packaged question and answer
  return [numb, userAnsw];
};

// Make rules and start game
const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
runEngine(rule, evenGame, getRightAnsw);
