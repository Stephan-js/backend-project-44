#!/usr/bin/env node

import readlineSync from 'readline-sync';// take readline-sync to see your answ


console.log('Welcome to the Brain Games!'); // Hello log

const userName = readlineSync.question('May I have your name? '); // take your name

console.log(`Hello, ${userName}!`); // log your name
