import readlineSync from 'readline-sync';

const generateSequence = () => {
    const initialNumber = getNumb();
    const length = getMinNumb() + 3;
    const addValue = getNumb();
    let sequence = [initialNumber];

    if (length < 6) {
        length += 5;
    }

    for (let i = 0; i < length; i += 1) {
        sequence.push(sequence[i] + addValue);
    }

    return sequence;
};

const playRound = (userName) => {
    console.log('What number is missing in the progression?');

    for (let i = 0; i < 3; i += 1) {
        const sequence = generateSequence();
        const hole = getMinNumb();
        const correctAnswer = sequence[hole];

        sequence[hole] = '..';
        const question = sequence.join(' ');
        const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);

        if (Number(userAnswer) === correctAnswer) {
            console.log('Correct!');
        } else {
            console.log(`'${userAnswer}' is the wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            return;
        }
    }

    console.log(`Congratulations, ${userName}!`);
};

const startGame = () => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
    playRound(userName);
};

startGame();
