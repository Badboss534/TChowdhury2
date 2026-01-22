//Import the readline module so we can read input from the user
const readline = require("readline");

//This create an interface to read from the console
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//This will store all the intergers from the user and it has to be an valid number
let numbers = [];

//Repeat function until user ask to stop
function askForNumber() {
  rl.question("Enter an integer (or type stop to quit): ", function (input) {

    //Way to stop the function
    if (input.toLowerCase() === "stop") {

      //Stopping without entering number will show this
      if (numbers.length === 0) {
        console.log("No numbers were entered.");
        rl.close();
        return;
      }

      //After stopping with numbers in it will calculate and display mean and median
      calculateResults();
      rl.close();
      return;
    }

    // Try to convert the input into a number
    let num = Number(input);

    //checks for valid integer
    if (!Number.isInteger(num)) {
      console.log("Invalid input. Please enter an integer.");
    } else {
      //If valid, add the number to the array
      numbers.push(num);
    }

    //Ask again
    askForNumber();
  });
}

//function to calculates mean and median
function calculateResults() {

  //Calculate the mean
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  let mean = sum / numbers.length;

  //Sort the array to calculate median
  numbers.sort(function (a, b) {
    return a - b;
  });

  let median;
  let middle = Math.floor(numbers.length / 2);

  //If odd number of elements
  if (numbers.length % 2 !== 0) {
    median = numbers[middle];
  } else {
    //If even number of elements
    median = (numbers[middle - 1] + numbers[middle]) / 2;
  }

  //Display results
  console.log("Numbers entered:", numbers);
  console.log("Mean (Average):", mean);
  console.log("Median:", median);
}

//Start the program
askForNumber();
