#!/usr/bin/env node

import readlineSync from 'readline-sync'; // take readline-sync to see your answ

const getNumb = () => {
    return Math.round(Math.random() * 100); // fucntion to random numb
}

function evenGame() { // function || game
    console.log('Answer "yes" if the number is even, otherwise answer "no".'); // welcome logo
    for (let i = 0; i < 3; i += 1) {
        const numb = getNumb();
        console.log('Question: ' + numb); // give question
        
        const userAnsw= readlineSync.question('Your answer: '); // take answer
        let rightAnsw = ''; 
        
        if (numb % 2 === 0) {
            rightAnsw = 'yes';
        } else { // make right answer
            rightAnsw = 'no';
        }
        
        if (userAnsw === rightAnsw) { // cheack answer
            console.log('Correct!');
        } else {
            console.log(`'${userAnsw}' is wrong answer ;(. Correct answer was '${rightAnsw}'.`);
            return; // for lose
        }
    }
    console.log(`Congratulations, ${userName}!`); // for win
}

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

evenGame(); // make game


