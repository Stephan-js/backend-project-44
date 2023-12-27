// Import the necessary function from the 'readline-sync' library
import readlineSync from 'readline-sync';

/*
 * GAME INITIALIZATION
 * This section includes the essential functions to initialize the game.
*/

// Function to create a welcome message and prompt the user for their name
const makeWelcome = () => {
  // Display a welcome message
  console.log('Welcome to the Brain Games!');

  // Prompt the user for their name
  let userName = readlineSync.question('May I have your name? - ');

  // Handle the case when the user enters an empty name (default to 'Unknown')
  if (userName === '') {
    userName = 'Unknown';
  }

  // Display a personalized greeting using the user's name
  console.log(`Hello, ${userName}!`);

  // Return the user's name
  return userName;
};

/*
 * COMMON UTILITY FUNCTIONS
 * This section includes utility functions used throughout the game.
*/

// Function to get user input for answers
const getAnswer = () => readlineSync.question('Your answer: ');

// Function to generate a random number within a specified range
const getRandomInRange = (min = 0, max = 100) => Math.floor(min + Math.random() * (max - min + 1));

/*
 * EXPORTS
 * Exporting functions to make them accessible in other files.
 * This allows reusability and modularity.
*/
export { getAnswer, getRandomInRange, makeWelcome };
