#!/usr/bin/env node

import readlineSync from 'readline-sync'; // take readline-sync to see your answ

function getNumb() { // take numb or -numb
  const numb = Math.round(Math.random() * 100);
  let result = Math.round(Math.random() * 100);
  if (numb > 50) {
    result -= (result * 2);
  }
  return result;
}

function isPrime(num) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
}

function primeGame(userNameForGame) { // game logic
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const numb = getNumb();
    console.log(`Question: ${numb}`);

    const userAnsw = readlineSync.question('Your answer: ');
    let rightAnsw = '';

    if (isPrime(numb)) {
      rightAnsw = 'yes';
    } else {
      rightAnsw = 'no';
    }

    if (userAnsw === rightAnsw) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnsw}' is wrong answer ;(. Correct answer was '${rightAnsw}'.`);
      console.log(`Let's try again, ${userNameForGame}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userNameForGame}!`);
}

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

primeGame(userName); // start game