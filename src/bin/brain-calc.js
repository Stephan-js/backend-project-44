#!/usr/bin/env node

import runEngine from '../index.js';
import { getRandomInRange, getAnswer } from '../functions.js';

/*
* CODE!
* NO CHANGING!
*/

// Ger Sing for game
const getSing = () => {
  // Randomaizer
  if (getRandomInRange() > 60) {
    return '+';
  }
  if (getRandomInRange() > 60) {
    return '-';
  }
  return '*';
};

// Find right answer
const getRightAnsw = (data) => {
  // Unpackaging the data 
  const [numbA, numb1A, singA] = data;
  // Return right answer
  switch (singA) {
    case '-':
      return numbA - numb1A;
    case '+':
      return numbA + numb1A;
    default:
      return numbA * numb1A;
  }
};

// Game
const calculateGame = () => { 
  // Get all number and sing
  const numb = getRandomInRange();
  const numb1 = getRandomInRange();
  const sing = getSing(); 

  // Ask question and get answer (user)
  console.log(`Question: ${numb} ${sing} ${numb1}`); 
  const userAnsw = getAnswer();

  // Return the packaged question and answer
  return [[numb, numb1, sing], userAnsw]
};

// Expect rule
const rule = 'What is the result of the expression?';

// Start engine
runEngine(rule, calculateGame, getRightAnsw);
