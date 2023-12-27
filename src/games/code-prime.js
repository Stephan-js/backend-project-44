// Import the runEngine function from the 'index.js' file
import runEngine from '../index.js';

// Import utility functions for generating random numbers and getting user answers
import { getRandomInRange, getAnswer } from '../functions.js';

/*
 * PRIME NUMBER GAME LOGIC
 * This section defines the logic for a game where the user identifies if a number is prime or not.
*/

// Determine if a number is prime and return 'yes' or 'no' accordingly
const getRightAnsw = (num) => {
  // Use basic math to determine if the number is prime
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  // Return 'yes' if the number is greater than 1, otherwise 'no'
  return (num > 1) ? 'yes' : 'no';
};

// Generate a random number, prompt the user, and return the question-answer pair
const primeGame = () => {
  const numb = getRandomInRange(-10, 100);

  // Display the number to the user
  console.log(`Question: ${numb}`);

  // Get the user's answer
  const userAnsw = getAnswer();

  // Return the question-answer pair as an array
  return [numb, userAnsw];
};

// Set the rule for the prime number game
const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
export default () => { runEngine(rule, primeGame, getRightAnsw); };
