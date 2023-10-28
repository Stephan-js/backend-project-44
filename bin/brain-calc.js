import readlineSync from 'readline-sync';

const getNumb = () => {
    return Math.round(Math.random() * 100);
}

const getSign = () => {
    const chance = getNumb();
    if (chance < 40) {
        return '+';
    } else if (chance < 80) {
        return '-';
    } else {
        return '*';
    }
}

const calculateExpression = (num1, num2, operator) => {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
    }
}

function calculateGame(userName) {
    console.log('What is the result of the expression?');

    for (let i = 0; i < 3; i += 1) {
        const num1 = getNumb();
        const num2 = getNumb();
        const operator = getSign();
        console.log(`Question: ${num1} ${operator} ${num2}`);

        const userAnswer = readlineSync.question('Your answer: ');
        const correctAnswer = calculateExpression(num1, num2, operator);

        if (Number(userAnswer) === correctAnswer) {
            console.log('Correct!');
        } else {
            console.log(`'${userAnswer}' is the wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            return;
        }
    }
    console.log(`Congratulations, ${userName}!`);
}

function startGame() {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
    calculateGame(userName);
}

startGame();
