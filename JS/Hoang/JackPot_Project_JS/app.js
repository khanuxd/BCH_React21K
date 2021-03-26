
// Solution 1

let num1 = Math.floor(Math.random() * 2);
let num2 = Math.floor(Math.random() * 2);
let num3 = Math.floor(Math.random() * 2);
let num4 = Math.floor(Math.random() * 2);
let num5 = Math.floor(Math.random() * 2);

// console.log('SOLUTION 1');

if (num1 === 1 && num2 === 1 && num3 === 1 && num4 === 1 && num5 === 1) {
    console.log(`Congrats! You have won the JackPot. \nYour Five Numbers are ${num1}, ${num2}, ${num3}, ${num4}, ${num5}. \nThe wining probability is ${(1 / 2 ** 5) * 100}%`);
}

else if (num1 === 0 && num2 === 0 && num3 === 0 && num4 === 0 && num5 === 0) {
    console.log(`Congrats anyway! \nYour Five Numbers are ${num1}, ${num2}, ${num3}, ${num4}, ${num5}. \nIt\'s hard to win a JackPot`)
}

else {
    console.log(`Your Five Numbers are ${num1}, ${num2}, ${num3}, ${num4}, ${num5}.`);
}



/*

// Solution 2

let newNum1 = Math.round(Math.random());
let newNum2 = Math.round(Math.random());
let newNum3 = Math.round(Math.random());
let newNum4 = Math.round(Math.random());
let newNum5 = Math.round(Math.random());

// console.log('SOLUTION 2');

if (newNum1 === 1 && newNum2 === 1 && newNum3 === 1 && newNum4 === 1 && newNum5 === 1){
    console.log(`Congrats! You have won the JackPot. \nYour New Five Numbers are ${newNum1}, ${newNum2}, ${newNum3}, ${newNum4}, ${newNum5}. \nThe wining probability is ${(1/2**5)*100}%`);
}

else if (newNum1 === 0 && newNum2 === 0 && newNum3 === 0 && newNum4 === 0 && newNum5 === 0) {
    console.log(`Congrats anyway! \nYour new Five Numbers are ${newNum1}, ${newNum2}, ${newNum3}, ${newNum4}, ${newNum5}. \nIt\'s hard to win a JackPot`)
}

else {
    console.log(`Your new Five Numbers are ${newNum1}, ${newNum2}, ${newNum3}, ${newNum4}, ${newNum5}.`);
}

*/