import readlineSync from 'readline-sync'; // take readline-sync to see your answ

const getNumb = () => {
    return Math.round(Math.random() * 100); 
}

function getSing() { // get sing for game
    const chance = getNumb();
    if (chance < 40) {
        return '+';
    } else if (chance < 80) {
        return '-';
    } else {
        return '*';
    }
}

function calculateGame() { // game || function
    console.log('What is the result of the expression?'); // welcome logo
    for (let i = 0; i < 3; i += 1) {
        const numb = getNumb();
        const numb1 = getNumb();
        const sing = getSing(); // get all things 
        console.log(`Question: ${numb} ${sing} ${numb1}`); // qustion
        
        const userAnsw= readlineSync.question('Your answer: ');
        let rightAnsw = 0;
        
        if (sing === '*') {
            rightAnsw = numb * numb1;
        } else if (sing === '+'){
            rightAnsw = numb + numb1;
        } else { 
            rightAnsw = numb - numb1;
        } // find correct answer
        
        if (Number(userAnsw) === rightAnsw) { // check answ
            console.log('Correct!');
        } else {
            console.log(`'${userAnsw}' is wrong answer ;(. Correct answer was '${rightAnsw}'.`);
            return; // return || lose
        }
    }
    console.log(`Congratulations, ${userName}!`); // win
}

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

calculateGame(); // start game


