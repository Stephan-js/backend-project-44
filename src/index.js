// Import the makeWelcome function from the 'functions.js' file
import { makeWelcome } from './functions.js';

// Import settings from the 'settings.js' file
import { roundsCount, noFailMode, youAlwaysRight } from '../bin/settings.js';

/*
 * GAME ENGINE LOGIC
 * This section includes the core game engine logic for running a game.
*/

// Check user's answer against the correct answer
const cheackAnsw = (userAnsw, rightAnsw, userNameForGame) => {
  // Check if the user's answer matches the correct answer (case-insensitive for strings)
  if ((userAnsw.toLowerCase() === rightAnsw || Number(userAnsw) === rightAnsw) && !youAlwaysRight) {
    console.log('Correct!');
    return false;
  }

  // Set the displayed answer to 'Undefined' if the user did not provide an answer
  const answer = (userAnsw === '') ? 'Undefined' : userAnsw;

  // Display a message indicating the incorrect answer and the correct answer
  if (!youAlwaysRight) {
    console.log(`'${answer}' is the wrong answer ;(. The correct answer was '${rightAnsw}'.\nLet's try again, ${userNameForGame}!`);
  } else {
    console.log(`'${answer}' is the wrong answer ;(. The correct answer was '${answer}'.\nLet's try again, ${userNameForGame}!`);
    return false;
  }

  // Indicate that the answer was incorrect
  return true;
};

// Run the game engine with provided rules, round generation, and answer retrieval functions
const runEngine = (rules, generateRound, getAnswer) => {
  // Get the player's name using the makeWelcome function
  const name = makeWelcome();
  console.log(rules);

  // Start the game for the specified number of rounds
  for (let i = 0; i < roundsCount; i += 1) {
    // Generate a question and its correct answer for the current round
    const [question, answer] = generateRound();

    // End the game if the answer is incorrect, and noFailMode is not enabled
    if (cheackAnsw(answer, getAnswer(question), name) && !noFailMode) {
      return;
      //  ↑↑
      // Stop sing (meme)
    }
  }

  // Display a congratulations message if the player successfully completes all rounds
  if (!noFailMode && !youAlwaysRight) {
    console.log(`Congratulations, ${name}!`);
  } else {
    // Display a message discouraging cheaters
    console.log('No encouraging cheaters. ;)');
  }
};

// Export the game engine logic as the default export
export default runEngine;
