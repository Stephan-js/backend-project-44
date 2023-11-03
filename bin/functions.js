import readlineSync from 'readline-sync'; // take readline-sync to see your answ

function isPrime(num) { // cheack prime or nope
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
}

function getCheackAnsw(userAnsw, rightAnsw, userNameForGame) {
  if (userAnsw === rightAnsw || Number(userAnsw) === rightAnsw) { // check answ
    console.log('Correct!');
    return false;
  }
  let answer = userAnsw;
  if (answer === '') {
    answer = 'Undefined';
  }

  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnsw}'.`);
  console.log(`Let's try again, ${userNameForGame}!`);
  return true; // return true => lose!
}

function getAnswer(qustion) {
  console.log(qustion); // ask qustion
  return readlineSync.question('Your answer: '); // take answ
}

function getStart(functions) { // start game
  console.log('Welcome to the Brain Games!');

  let userName = readlineSync.question('May I have your name? ');
  if (userName === '') {
    userName = 'Unknown';
  }
  console.log(`Hello, ${userName}!`);

  if (functions !== undefined) {
    functions(userName);
  }
}

function getNumb() { // random number (1-100)
  return Math.round((Math.random() * 100) + 1);
}

function getMinNumb() { // random number (1-10)
  return Math.round((Math.random() * 10) + 1);
}

function getNumbOrMinesNumb() { // random number (1-10)
  let answ = getNumb();
  if (getNumb() > 85) {
    answ -= answ * 2;
  }
  return answ;
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

export {
  isPrime,
  getCheackAnsw,
  getAnswer,
  getStart,
  getSing,
  getMinNumb,
  getNumb,
  getNumbOrMinesNumb,
}; // Im export my problem :) Now its your problem!
