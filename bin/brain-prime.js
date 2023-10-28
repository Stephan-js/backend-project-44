import readlineSync from 'readline-sync'; // take readline-sync to see your answ

const getNumb = () => { // take numb or -numb
    const numb = Math.round(Math.random() * 100);
    let result = Math.round(Math.random() * 100);
    if (numb > 50) {
        result = result - (result * 2);
    }
    return result;

}

function primeGame() { // game logic
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

    for (let i = 0; i < 3; i += 1) { 
        const numb = getNumb();
        console.log(`Question: ${numb}`);
        
        const userAnsw= readlineSync.question('Your answer: ');
        let rightAnsw = '';

        if (numb < 0) {
            rightAnsw = 'no';
        } else {
            rightAnsw = 'yes';
        }
        
        if (userAnsw === rightAnsw) {
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

primeGame(); // start game

