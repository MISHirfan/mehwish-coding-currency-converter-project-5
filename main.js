import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold("\n' welcome to coding with mehwish' - currency converter\n"));
// define the list of curriences and thier exchange rates
let exchange_rate = {
    "USD": 1, // base currency
    "EUR": 0.9, // european currency (euro)
    "JYP": 113, // japenese currency (yen)
    "CAD": 1.3, // canadian dollar 
    "AUD": 1.65, // australian dollar
    "PKR": 277.70, // pakistani rupees
    // add more curriences and thier exchange rates here
};
// promt the user to select currencies to convert from end to
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "select the currency to convert from:",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "to currency",
        type: "list",
        message: "select the currency to convert into:",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: "enter the amount to convert:",
    }
]);
// perfome currency conversion by using formula
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
// formula of conversion
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
// display the converted amount
console.log(`converted_amount = ${chalk.green(converted_amount.toFixed(2))}`);
