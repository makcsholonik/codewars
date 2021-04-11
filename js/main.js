// Count the Monkeys!
//You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.
// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

function monkeyCount(n) {
    let monkey = []; // создаём пустой массив
    for (let i = 1; i <= n; i++) {
        monkey.push(i); // пробегаемся циклом for, каждое число по порядку пушим в массив пока она не будет n
    }
    return monkey;
}

//MakeUpperCase
//Write a function which converts the input string to uppercase.

function makeUpperCase(str) {
    return str.toUpperCase();
}

//Thinkful - Logic Drills: Traffic light
//You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.
// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

function updateLight(current) {
    switch (current) {
        case 'green':
            return 'yellow';
        case 'yellow':
            return 'red';
        case 'red':
            return 'green';
        default:
            return current
    }
}