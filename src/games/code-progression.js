// Import the runEngine function from the 'index.js' file
import runEngine from '../index.js';

// Import utility functions for generating random numbers and getting user answers
import { getRandomInRange, getAnswer } from '../functions.js';

/*
 * ARITHMETIC PROGRESSION GAME LOGIC
 * The logic for a game where the user identifies the missing number in an arithmetic progression.
*/

// Determine and return the correct answer based on the provided string
const getRightAnsw = (string) => {
  // Convert the string to an array
  const array = string.split(' ');

  // Use logic + some math to find the missing number in the arithmetic progression
  const add = (Number.isNaN(array[1] - array[0])) ? array[3] - array[2] : array[1] - array[0];

  // Iterate through the array to find the missing number marked with '..'
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === '..') {
      return Number(array[i - 1]) + add;
    }
  }

  // Return true if the missing number is not found (should not happen)
  return true;
};

// Generate an arithmetic progression, mark a hole, and return the question-answer pair
const progressGame = () => {
  // Initialize the array with the first element
  const array = [getRandomInRange(1, 10)];

  // Generate the length, hole position, and addition for the arithmetic progression
  const length = getRandomInRange(8, 18);
  const hole = length - getRandomInRange(1, 7);
  const add = (getRandomInRange(0, 10) === 10) ? getRandomInRange() : getRandomInRange(1, 10);

  // Generate the entire arithmetic progression
  for (let i = 0; i < length; i += 1) {
    array.push(array[i] + add);
  }

  // Mark the hole and convert the array to a string
  array[hole] = '..';
  const string = array.join(' ');

  // Ask the question
  console.log(`Question: ${string}`);

  // Get the user's answer
  const userAnsw = getAnswer();

  // Return the question-answer pair as an array
  return [string, userAnsw];
};

// Set the rule for the arithmetic progression game
const rule = 'What number is missing in the progression?';
export default () => { runEngine(rule, progressGame, getRightAnsw); };
