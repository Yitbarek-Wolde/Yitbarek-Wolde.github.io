import promptSync from "prompt-sync";
const prompt = promptSync();

const NO_COMMISSION = 300;
const HIGHEST_COMMISSION = 500;

let ask_if_salaried = prompt("Are you a salaried sales man? Y/N : ")
let ask_sales_amount = Number(prompt("Enter sales : "))

if(ask_if_salaried == 'y' || ask_if_salaried == 'Y'){
    if (NO_COMMISSION > ask_sales_amount)
        console.log("Sales not met requirement for commssion.")
    else if(HIGHEST_COMMISSION < ask_sales_amount)
        console.log("Your 2% commssion for $" + ask_sales_amount + " sales is $" + (ask_sales_amount *0.02))
    else
        console.log("Your 1% commssion for $" + ask_sales_amount + " sales is $" + (ask_sales_amount *0.01))
}
else{
    if (NO_COMMISSION > ask_sales_amount)
        console.log("Sales not met requirement for commssion.")
    else if(HIGHEST_COMMISSION < ask_sales_amount)
        console.log("Your 3% commssion for $" + ask_sales_amount + " sales is $" + (ask_sales_amount *0.03))
    else
        console.log("Your 2% commssion for $" + ask_sales_amount + " sales is $" + (ask_sales_amount *0.02))
}