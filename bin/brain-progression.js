import readlineSync from 'readline-sync'; // take readline-sync to see your answ

function progressGame() {
    console.log('What number is missing in the progression?');
    for (let i = 0; i < 3; i += 1) {
        const result = generateProgression();
        const rightAnswer = askQuestion(result);
        const userAnswer = getUserAnswer();

        if (userAnswer === rightAnswer) {
            console.log('Correct!');
        } else {
            console.log(`'${userAnswer}' is the wrong answer ;(. Correct answer was '${rightAnswer}'.`);
            return;
        }
    }
    console.log(`Congratulations, ${userName}!`);
}

function generateProgression() {
    const result = [];
    const getAdd = getNumb();
    let length = getMinNumb() + 3;

    if (length < 6) {
        length += 5;
    }

    for (let i = 0; i < length; i += 1) {
        result.push(result[i] + getAdd);
    }

    const hole = length - getMinNumb();
    result[hole] = '..';
    return result;
}

function askQuestion(result) {
    result = result.sort((a, b) => a - b);
    const rightAnswer = result.find((item) => item === '..');
    result = result.join(' ');
    console.log(`Question: ${result}`);
    return rightAnswer;
}

function getUserAnswer() {
    return readlineSync.question('Your answer: ');
}

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
progressGame();



