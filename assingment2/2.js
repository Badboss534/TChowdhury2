const readline = require("readline");

//readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//store user inputs
let numbers = [];

//begining promt
function promptUser() {
  rl.question("Enter an integer/number or q to quit: ", function (input) {
    const value = input.trim();

    //to make the user quit with q or Q
    if (value === "q" || value === "Q") {
      finishProgram();
      return;
    }

    //make the user input to a number
    const num = Number(value);

    //make sure the input is a valid integer
    if (!Number.isInteger(num)) {
      console.log("enter a valid integer or q to quit.");
    } else {
      numbers.push(num);
    }

    promptUser();
  });
}

//finish the program and check the condition
function finishProgram() {
  console.log("\nThis are the intergers you have entered down below:");
  console.log(numbers);

  let conditionFound = false;

  //this to make sure the 2 different numbers multiply to equal the thrid number
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      for (let k = 0; k < numbers.length; k++) {
        if (i !== j && i !== k && j !== k) {
          if (numbers[i] * numbers[j] === numbers[k]) {
            console.log(
              "Condition is met: " +
              numbers[i] +
              " x " +
              numbers[j] +
              " = " +
              numbers[k]
            );
            conditionFound = true;
            rl.close();
            return;
          }
        }
      }
    }
  }

  //if there is no way to find the condition
  if (!conditionFound) {
    console.log("Condition was not met");
  }

  rl.close();
}

promptUser();
