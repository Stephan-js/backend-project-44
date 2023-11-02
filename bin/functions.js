import readlineSync from 'readline-sync'; // take readline-sync to see your answ

function myCheackNumbAnsw(userAnsw, rightAnsw, userNameForGame) {
  if (Number(userAnsw) === rightAnsw) { // check answ
    console.log('Correct!');
    return false;
  }

  console.log(`'${userAnsw}' is wrong answer ;(. Correct answer was '${rightAnsw}'.`);
  console.log(`Let's try again, ${userNameForGame}!`);
  return true; // return || lose
}

function myCheackAnsw(userAnsw, rightAnsw, userNameForGame) {
  if (userAnsw === rightAnsw) { // check answ
    console.log('Correct!');
    return false;
  }

  console.log(`'${userAnsw}' is wrong answer ;(. Correct answer was '${rightAnsw}'.`);
  console.log(`Let's try again, ${userNameForGame}!`);
  return true; // return || lose
}

function getStart() {
  console.log('Welcome to the Brain Games!');

  let userName = readlineSync.question('May I have your name? ');
  if (userName === '') {
    userName = 'Unknown';
  }
  console.log(`Hello, ${userName}!`);
  return userName;
}

function getNumb() { // random number (1-100)
  return Math.round(Math.random() * 100);
}

function getSing() { // get sing for game
  const chance = getNumb();
  if (chance < 40) {
    return '+';
  }
  if (chance < 80) {
    return '-';
  }
  return '*';
}

function getMinNumb() { // random number (1-10)
  return Math.round(Math.random() * 10);
}
// nope here
function getNumbOrMinesNumb() { // random number (1-10)
  let answ = getNumb();
  if (getNumb() > 85) {
    answ -= answ * 2;
  }
  return answ;
}

export {
  myCheackNumbAnsw,
  myCheackAnsw,
  getStart,
  getSing,
  getMinNumb,
  getNumb,
  getNumbOrMinesNumb,
}; // Im export my problem :) Now its your problem1
