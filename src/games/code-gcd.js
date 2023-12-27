// Import the runEngine function from the 'index.js' file
import runEngine from '../index.js';

// Import utility functions for generating random numbers and getting user answers
import { getRandomInRange, getAnswer } from '../functions.js';

/*
 * GREATEST COMMON DIVISOR (GCD) GAME LOGIC
 * The logic for a game where the user finds the greatest common divisor of two numbers.
*/

// Find the greatest common divisor of two numbers
const findGretestDivision = (maxNumb, minNumb) => {
  let result = 1;

  // Iterate through numbers to find the greatest common divisor
  for (let i = 1; i < maxNumb; i += 1) {
    if (maxNumb % i === 0 && minNumb % i === 0) {
      result = i;
    }
  }

  // Return the result
  return result;
};

// Calculate and return the correct answer based on the provided data (numbers)
const getRightAnsw = (data) => {
  // Unpack the data into variables
  const [numbA, numb1A] = data;

  // Check if the numbers are equal
  if (numbA === numb1A) {
    return numbA;
  }

  // Determine the maximum and minimum numbers
  const maxNumb = (numb1A > numbA) ? numb1A : numbA;
  const minNumb = (numb1A > numbA) ? numbA : numb1A;

  // Calculate the greatest common divisor using the findGretestDivision function
  return findGretestDivision(maxNumb, minNumb);
};

// Generate two random numbers, prompt the user, and return the question-answer pair
const gcdGame = () => {
  const numb = getRandomInRange(1);
  const numb1 = getRandomInRange(1);

  // Display the numbers to the user
  console.log(`Question: ${numb} ${numb1}`);

  // Get the user's answer
  const userAnsw = getAnswer();

  // Return the question-answer pair as an array
  return [[numb, numb1], userAnsw];
};

// Set the rule for the greatest common divisor game
const rule = 'Find the greatest common divisor of given numbers.';
export default () => { runEngine(rule, gcdGame, getRightAnsw); };
