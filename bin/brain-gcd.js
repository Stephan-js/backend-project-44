import readlineSync from 'readline-sync'; // take readline-sync to see your answ

const getNumb = () => {
    return Math.round(Math.random() * 100);
}

function check(numb, numb1) {
    let result = 0;
    let maxNumb = numb1;
    let minNumb = numb;

    if (numb > numb1) {
        maxNumb = numb;
        minNumb = numb1;
    } 

    for (let i = 1; i < maxNumb; i += 1) {
        if (maxNumb % i === 0 && minNumb % i === 0) {
            result = i;
        }
    }
    return result;
}

function gcdGame() {
    console.log('Find the greatest common divisor of given numbers.');
    for (let i = 0; i < 3; i += 1) {
        const numb = getNumb();
        const numb1 = getNumb();
        console.log(`Question: ${numb} ${numb1}`);
        
        const userAnsw= readlineSync.question('Your answer: ');
        let rightAnsw = check(numb, numb1);
        
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

gcdGame();


