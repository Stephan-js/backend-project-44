// Import one mini function
import { askName } from './functions.js';

// Import settings
import { roundsCount, noFailMode, youAlwaysRight } from './settings.js';

/*
* CODE!
* NO CHANGING!
*/

// Check answer
const cheackAnsw = (userAnsw, rightAnsw, userNameForGame) => {
  if ((userAnsw.toLowerCase() === rightAnsw || Number(userAnsw) === rightAnsw) && !youAlwaysRight) {
    console.log('Correct!');
    return false;
  }
  // Make undefined answer
  const answer = (userAnsw === '') ? 'Undefined' : userAnsw;

  // Say, what wrong
  if (!youAlwaysRight) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnsw}'.\nLet's try again, ${userNameForGame}!`);
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${userNameForGame}!`);
    return false;
  }
  return true;
};

// Make game logic
const runEngine = (rules, generateRound, getAnswer) => {
  // Ask name
  const name = askName();
  console.log(rules);

  // Start game some times
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, answer] = generateRound();
    // End game if answer wrong
    if (cheackAnsw(answer, getAnswer(question), name) && !noFailMode) {
      return;
      //  ↑↑
      // Stop sing
    }
  }
  // Congratulations!
  if (!noFailMode && !youAlwaysRight) {
    console.log(`Congratulations, ${name}!`);
  } else {
    // For cheater
    console.log('No encouraging to cheaters. ;)');
  }
};

// Export logic
export default runEngine;
