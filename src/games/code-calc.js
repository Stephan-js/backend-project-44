// Import the runEngine function from the 'index.js' file
import runEngine from '../index.js';

// Import utility functions for generating random numbers and getting user answers
import { getRandomInRange } from '../functions.js';

/*
 * CALCULATION GAME LOGIC
 * This section defines the core logic for the calculation game.
*/

// Generate a random arithmetic operation (+, -, or *) for the game
const getOperator = () => {
  // Randomly determine the arithmetic operation
  const operators = ['-', '+', '*'];
  return operators[getRandomInRange(0, 2)];
};

// Calculate and return the correct answer based on the provided data (numbers and operation)
const getRightAnsw = (data) => {
  // Unpack the data into variables
  const [numbA, numb1A, operatorA] = data;

  // Return the correct answer based on the arithmetic operation
  switch (operatorA) {
    case '-':
      return numbA - numb1A;
    case '+':
      return numbA + numb1A;
    case '*':
      return numbA * numb1A;
    default:
      throw console.error(`I sad donn't tuch code! (Problem in calc game. Wrong sing!)`);
  }
};

// Generate a random arithmetic expression, prompt the user, and return the question-answer pair
const calculateGame = () => {
  // Generate random numbers and an arithmetic operation
  const numb = getRandomInRange();
  const numb1 = getRandomInRange();
  const operator = getOperator();

  // Get the user's answer
  const rughtAnswer = getRightAnsw([numb, numb1, operator]);
  const question = `Question: ${numb} ${operator} ${numb1}`;

  // Return the question-answer pair as an array
  return [rughtAnswer, question];
};

// Set the rule for the calculation game
const rule = 'What is the result of the expression?';

// Export all game logic
export default () => { runEngine(rule, calculateGame); };
