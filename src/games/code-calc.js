// Import the runEngine function from the 'index.js' file
import runEngine from '../index.js';

// Import utility functions for generating random numbers and getting user answers
import { getRandomInRange, getAnswer } from '../functions.js';

/*
 * CALCULATION GAME LOGIC
 * This section defines the core logic for the calculation game.
*/

// Generate a random arithmetic operation (+, -, or *) for the game
const getSing = () => {
  // Randomly determine the arithmetic operation
  const operators = ['-', '+', '*'];
  return operators[getRandomInRange(0, 2)];
};

// Calculate and return the correct answer based on the provided data (numbers and operation)
const getRightAnsw = (data) => {
  // Unpack the data into variables
  const [numbA, numb1A, singA] = data;

  // Return the correct answer based on the arithmetic operation
  switch (singA) {
    case '-':
      return numbA - numb1A;
    case '+':
      return numbA + numb1A;
    default:
      return numbA * numb1A;
  }
};

// Generate a random arithmetic expression, prompt the user, and return the question-answer pair
const calculateGame = () => {
  // Generate random numbers and an arithmetic operation
  const numb = getRandomInRange();
  const numb1 = getRandomInRange();
  const sing = getSing();

  // Display the arithmetic expression to the user
  console.log(`Question: ${numb} ${sing} ${numb1}`);

  // Get the user's answer
  const userAnsw = getAnswer();
  const rughtAnswer = getRightAnsw([numb, numb1, sing]);

  // Return the question-answer pair as an array
  return [rughtAnswer, userAnsw];
};

// Set the rule for the calculation game
const rule = 'What is the result of the expression?';

// Export all game logic
export default () => { runEngine(rule, calculateGame); };
