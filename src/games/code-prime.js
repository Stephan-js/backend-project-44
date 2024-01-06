// Import the runEngine function from the 'index.js' file
import runEngine from '../index.js';

// Import utility functions for generating random numbers and getting user answers
import { getRandomInRange } from '../functions.js';

/*
 * PRIME NUMBER GAME LOGIC
 * This section defines the logic for a game where the user identifies if a number is prime or not.
*/

// Determine if a number is prime and return 'yes' or 'no' accordingly
const getRightAnsw = (num) => {
  // Use basic math to determine if the number is prime
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  // Return 'yes' if the number is greater than 1, otherwise 'no'
  return (num > 1) ? true : false;
};

// Generate a random number, prompt the user, and return the question-answer pair
const primeGame = () => {
  const numb = getRandomInRange(-10, 100);

  // Get the user's answer
  const rightAnsw = getRightAnsw(numb) ? 'yes' : 'no';
  const question = `Question: ${numb}`;

  // Return the question-answer pair as an array
  return [rightAnsw, question];
};

// Set the rule for the prime number game
const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
export default () => { runEngine(rule, primeGame); };
