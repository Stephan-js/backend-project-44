// Import the runEngine function from the 'index.js' file
import runEngine from '../index.js';

// Import utility functions for generating random numbers and getting user answers
import { getRandomInRange, transferToHumanAnswer } from '../functions.js';

/*
 * EVEN NUMBER GAME LOGIC
 * This section defines the logic for a game where the user identifies if a number is even or not.
*/

// Determine if a number is even and return 'yes' or 'no' accordingly
function getRightAnsw(numbA) {
  return (numbA % 2 === 0) ? true : false;
}

// P.S. I can't use arrow function 'couse linter see error in that.


// Generate a random number, prompt the user, and return the question-answer pair
const evenGame = () => {
  const numb = getRandomInRange(1, 100);

  // Get the user's answer
  const rightAnsw = transferToHumanAnswer(getRightAnsw(numb));
  const question = `Question: ${numb}`;

  // Return the question-answer pair as an array
  return [rightAnsw, question];
};

// Set the rule for the even number game
const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
export default () => { runEngine(rule, evenGame); };
