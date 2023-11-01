import promptSync from "prompt-sync";
const prompt = promptSync();

// function add(a: number, b: number): number {
//     return a + b;
// }
// const sum1: number = add(10, 15);
// const sum2: number = add(10, 5);
// console.log("sum1 is: ", sum1, " sum2 is: ", sum2);

//question one
const NO_COMMISSION: number = 300;
const HIGHEST_COMMISSION: number = 500;

let ask_if_salaried: string = prompt("Are you a salaried sales man? Y/N : ");
let ask_sales_amount: number = Number(prompt("Enter sales: "));

if (ask_if_salaried.toLowerCase() === 'y') {
    if (NO_COMMISSION > ask_sales_amount) {
        console.log("Sales not met requirement for commission.");
    } else if (HIGHEST_COMMISSION < ask_sales_amount) {
        console.log(`Your 2% commission for $${ask_sales_amount} sales is $${ask_sales_amount * 0.02}`);
    } else {
        console.log(`Your 1% commission for $${ask_sales_amount} sales is $${ask_sales_amount * 0.01}`);
    }
} else {
    if (NO_COMMISSION > ask_sales_amount) {
        console.log("Sales not met requirement for commission.");
    } else if (HIGHEST_COMMISSION < ask_sales_amount) {
        console.log(`Your 3% commission for $${ask_sales_amount} sales is $${ask_sales_amount * 0.03}`);
    } else {
        console.log(`Your 2% commission for $${ask_sales_amount} sales is $${ask_sales_amount * 0.02}`);
    }
}

//question two
function compoundInterest(initialAmount: number, annualInterestRate: number, numberOfYears: number): number {
    const num_of_months: number = 12;
    const rate: number = annualInterestRate / 100;

    let balance: number = initialAmount;

    for (let i = 1; i <= numberOfYears * num_of_months; i++) {
        balance = balance * (1 + rate / num_of_months);
    }

    return balance;
}

console.log("Expect 110.47:", compoundInterest(100, 10, 1).toFixed(2));
console.log("Expect 16470.09:", compoundInterest(10000, 5, 10).toFixed(2));

//Question three
function calcDownpayment(cost: number): number {
    if (cost < 50000) {
        return cost * 0.05;
    } else if (cost < 100000) {
        return 2500 + 0.10 * (cost - 50000);
    } else if (cost < 200000) {
        return 7500 + 0.15 * (cost - 100000);
    } else {
        return 20000 + 0.10 * (cost - 200000);
    }
}

console.log("Expect 2000:", calcDownpayment(40000));
console.log("Expect 2500:", calcDownpayment(50000));
console.log("Expect 7500:", calcDownpayment(100000));
console.log("Expect 25000:", calcDownpayment(250000));


//question four
function sumDigits(num: number): number {
    let sum = 0;


    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }

    return sum;
}

function multDigits(num: number): number {
    let product = 1;


    while (num > 0) {
        product *= num % 10;
        num = Math.floor(num / 10);
    }

    return product;
}

console.log("Sum (12345):", sumDigits(12345));
console.log("Product (12345):", multDigits(12345)); 


//question five
function convertFahrenheit(fahrenheit: number): number {
    const celsius = (fahrenheit - 32) * 5/9;
    return celsius;
}

console.log("Expect 0:", convertFahrenheit(32));


//Question six
function calcDistance(x1: number, y1: number, x2: number, y2: number): number {
    const x = x2 - x1;
    const y = y2 - y1;
    const d = Math.sqrt((x * x) + (y * y));
    return d;
}

console.log("Expect 7.07:", calcDistance(0, 0, 5, 5));