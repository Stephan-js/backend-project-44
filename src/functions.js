// Import important functions
import readlineSync from 'readline-sync'; // take readline-sync to see your answ

/*
* CODE!
* NO CHANGING!
*/

// Simple code to find your name
const askName = () => {
  // Welcome alert
  console.log('Welcome to the Brain Games!');

  let userName = readlineSync.question('May I have your name? - ');
  // For "Unknown" persons
  if (userName === '') {
    userName = 'Unknown';
  }
  console.log(`Hello, ${userName}!`);
  // Return your name
  return userName;
};

// It's function need only to not import readlineSync for evry file
const getAnswer = () => readlineSync.question('Your answer: ');

// Get random number
const getRandomInRange = (min = 0, max = 100) => Math.floor(min + Math.random() * (max - min + 1));

// I'm export my problem... Now it's your problem! ;)
export { getAnswer, getRandomInRange, askName };
