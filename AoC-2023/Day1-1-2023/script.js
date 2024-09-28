import challengeInput from "./inputData.js";

function main() {
  const challengeDoc = challengeInput();
  console.log(challengeDoc);

  let desiredDigitsArray = [];

  // Split the content into lines
  const lines = challengeDoc.split("\n");

  // Process each line
  lines.forEach((line, index) => {
    console.log(`Line ${index + 1}: ${line}`);
    // Add your processing logic here

    // create a string of all digits by regex in a single line and join the digits of that line together
    const digitsOnly = line.match(/\d+/g).join("");
    console.log(`Line ${index + 1} digits: ${digitsOnly}`);

    // Find the first digit
    const firstDigit = digitsOnly[0];

    // Find the final digit
    const lastDigit = digitsOnly.slice(-1);

    console.log(`First digit: ${firstDigit} Last digit: ${lastDigit}`);

    // add both digits to an array:
    desiredDigitsArray = [...desiredDigitsArray, firstDigit + lastDigit];

    //console.log(`desiredDigitsArray: ${desiredDigitsArray}`);
  });

  console.log(`desiredDigitsArray: ${desiredDigitsArray}`);

  // convert the desired digits from strings to integers:
  const numberArray = [];
  for (let i = 0; i < desiredDigitsArray.length; i++) {
    numberArray.push(Number(desiredDigitsArray[i]));
  }

  // get the sum of all values of the array:

  // Creating variable to store the sum
  let sum = 0;

  // Calculation the sum using forEach
  numberArray.forEach((x) => {
    sum += x;
  });

  // Prints the sum
  console.log("Sum is " + sum);
}

// Attach the function to the global scope
window.main = main;
