import readlineSync from 'readline-sync';

const getNumb = () => {
    return Math.round(Math.random() * 100); 
};

const getSing = () => {
    const chance = getNumb();
    if (chance < 40) {
        return '+';
    } else if (chance < 80) {
        return '-';
    } else {
        return '*';
    }
};

const calculateGame = () => {
    console.log('What is the result of the expression?');
    for (let i = 0; i < 3; i += 1) {
        const numb = getNumb();
        const numb1 = getNumb();
        const sing = getSing();
        console.log(`Question: ${numb} ${sing} ${numb1}`);

        const userAnsw = readlineSync.question('Your answer: ');
        let rightAnsw = 0;

        if (sing === '*') {
            rightAnsw = numb * numb1;
        } else if (sing === '+'){
            rightAnsw = numb + numb1;
        } else { 
            rightAnsw = numb - numb1;
        }

        if (Number(userAnsw) === rightAnsw) {
            console.log('Correct!');
        } else {
            console.log(`'${userAnsw}' is wrong answer ;(. Correct answer was '${rightAnsw}'.`);
            return;
        }
    }
    console.log(`Congratulations, ${userName}!`);
};

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

calculateGame();