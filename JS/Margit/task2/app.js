// Problem 1: Make a program that asks age of the user. If the age is less than 18 the text “too young” is printed. If the age is less than 27 the text “Right age for military service” is printed. If the age is less than 41 the text “You are in reserve” is printed.  If the age is less than 55 the text “You are in backup reserve” is printed. All other cases “too aged” is printed.

// Solution # 1

const militaryAge = () => {
    let agePrompt = prompt('what\'s your age?');
    let age = Number(agePrompt);

    let ageUpdate = document.getElementById('ageUpdate');


    if (age > 0) {
        if (age < 18) {
            ageUpdate.textContent = 'Too young';
        }
        else if (age < 27) {
            ageUpdate.textContent = 'Right age for military service';
        }
        else if (age < 41) {
            ageUpdate.textContent = 'You are in reserve';
        }
        else if (age < 55) {
            ageUpdate.textContent = 'You are in backup reserve';
        }
        else {
            ageUpdate.textContent = 'too aged';
        }
    }
    else {
        ageUpdate.textContent = 'Did\'t put the right age yet';
    }

    console.log(agePrompt);
}

militaryAge();



// Problem 2: Make a program that asks three numbers from the user. Program prints out sum of the numbers, if any of the numbers is positive. If all the numbers are positive, also print out multiplication. If all numbers are negative, text “only negatives” is printed. Handle zero as positive in this assignment.

// Solution # 2

const numberCalc = () => {
    let num1 = Number(prompt('What is your first number?'));
    let num2 = Number(prompt('What is your second number?'));
    let num3 = Number(prompt('What is your third number?'));

    let numberUpdate = document.getElementById('numberUpdate');

    if (num1 >= 0 && num2 >= 0 && num3 >= 0) {
        numberUpdate.textContent = `The multiply is ${num1 * num2 * num3}`;
    } else if (num1 >= 0 || num2 >= 0 || num3 >= 0) {
        numberUpdate.textContent = `The sum is ${num1 + num2 + num3}`;
    } else if (num1 < 0 && num2 < 0 && num3 < 0) {
        numberUpdate.textContent = `Only negative numbers`;
    }
    console.log(`${num1}, ${num2}, ${num3}`);
}

numberCalc();


// Problem 3: Make a program that asks one number from the user. Then the program finds out if the number is positive and is the number divisible by 2. Message "that is even number" is printed else "that number is odd" is printed.

// Solution # 3

const oddEven = () => {
    let num = Number(prompt('What is your number?'));
    let oddEvenNum = document.getElementById('oddEvenNum');

    if (num >= 0) {
        if (num % 2 === 0) {
            oddEvenNum.textContent = `${num} is even`;
        } else if (num % 2 !== 0) {
            oddEvenNum.textContent = `${num} is odd`;
        } else {
            oddEvenNum.textContent = `${num} is a negative number`;
        }
    } else {
        oddEvenNum.textContent = `You put a negative number.`;
    }
};

oddEven();


/* 
Problem 4: Make a program that calculates body mass index. The BMI is defined as the body mass divided by the square of the body height, and is universally expressed in units of kg/m2, resulting from mass in kilograms and height in metres. Based on result display correct range:
BMI	          	Status
Below 18.5	    Underweight
18.5 – 24.9	    Normal or Healthy Weight
25.0 – 29.9	    Overweight
30.0 and Above	Obese
 */

// Solution # 4

const calcBMIfunc = () => {
    let weight = Number(prompt('what is your weight (in KG)?'));
    let height = Number(prompt('what is your height ( in Meter)?'));

    let bmiCalc = document.getElementById('bmiCalc');

    let bmi = weight / (height * height);
    if (weight && height) {
        if (bmi < 18.5) {
            bmiCalc.textContent = `Your BMI is ${bmi}(Underweight)`;
        } else if (bmi > 18.5 && bmi < 24.9) {
            bmiCalc.textContent = `Your BMI is ${bmi}(Normal or Healthy Weight)`;
        } else if (bmi > 25.0 && bmi < 29.9) {
            bmiCalc.textContent = `Your BMI is ${bmi}(Overweight)`;
        } else if (bmi > 30.0) {
            bmiCalc.textContent = `Your BMI is ${bmi}(Obese)`;
        }
    } else {
        bmiCalc.textContent = `Please! Put the correct value`;
    }

}

calcBMIfunc();


/* Problem 5: Make a program that asks hourly salary and how many hours user worked on one day. With this information program calculates day’s salary.
The salary is calculated as follows:
- first 7 hours by hourly salary
- next 2 hours 50% extra
- rest of the hours 100% extra */

// Solution # 5

const hourlySalary = () => {
    let hSal = Number(prompt('What is your hourly salary?'));
    let dailyH = Number(prompt('What is your daily hours?'));

    const salaryCalc = document.getElementById('salaryCalc');

    if (dailyH <= 7) {
        salaryCalc.textContent = `Total Salary is ${dailyH * hSal}`;
    } else if (dailyH >= 8 && dailyH <= 9) {
        salaryCalc.textContent = `Total Salary is ${(7 * hSal) + (dailyH % 7) * (hSal + hSal / 2)}`;
    } else if (dailyH > 9) {
        salaryCalc.textContent = `Total Salary is ${(7 * hSal) + 2 * (hSal + hSal / 2) + (dailyH % 9) * (hSal * 2)}`;
    }
}

hourlySalary();