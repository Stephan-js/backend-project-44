import readlineSync from 'readline-sync';

const getNumb = () => {
    return Math.round(Math.random() * 100);
}

const getMinNumb = () => {
    return Math.round(Math.random() * 10);
}

function progressGame() {
    console.log('What number is missing in the progression?');
    for (let i = 0; i < 3; i += 1) {
        let result = [getNumb()];
        let length = getMinNumb() + 3;
        const getAdd = getNumb();

        if (length < 6) {
            length = length + 5;
        }
        for (let i = 0; i < length; i += 1) {
            result.push(result[i] + getAdd);
        }

        const hole = length - getMinNumb();
        result = result.sort((a, b) => a - b);
        const rightAnsw = result[hole];

        result[hole] = '..';
        result = result.join(' ');

        console.log(`Question: ${result}`);

        const userAnsw= readlineSync.question('Your answer: ');

        if (Number(userAnsw) === rightAnsw) {
            console.log('Correct!');
        } else {
            console.log(`'${userAnsw}' is wrong answer ;(. Correct answer was '${rightAnsw}'.`);
            return;
        }
    }
    console.log(`Congratulations, ${userName}!`);
}

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

progressGame();