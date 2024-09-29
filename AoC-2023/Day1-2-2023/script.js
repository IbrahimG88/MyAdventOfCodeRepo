import challengeInput from "./inputData.js";

function convertWordToDigit(str) {
  // Mapping of number words to digits
  const numberWords = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  // Regex to match all occurrences of number words in the string
  const regex = new RegExp(`${Object.keys(numberWords).join("|")}`, "gi");

  // Handle the special case of "eight" when preceded by "e"
  let result = str.replace(/(?<=o)ne/gi, "1");
  result = result.replace(/(?<=t)wo/gi, "2");
  result = result.replace(/(?<=t)hree/gi, "3");
  result = result.replace(/(?<=f)our/gi, "4");
  result = result.replace(/(?<=f)ive/gi, "5");
  result = result.replace(/(?<=s)ix/gi, "6");
  result = result.replace(/(?<=s)even/gi, "7");
  result = result.replace(/(?<=e)ight/gi, "8");
  result = result.replace(/(?<=n)ine/gi, "9");

  console.log("just replaced eight", result);

  // Replace the word with its corresponding digit if it matches
  result = result.replace(regex, (match) => numberWords[match.toLowerCase()]);

  return result;
}

function main() {
  const challengeDoc = challengeInput();
  console.log(challengeDoc);

  let desiredDigitsArray = [];

  // Split the content into lines
  const lines = challengeDoc.split("\n");

  // Process each line
  lines.forEach((line, index) => {
    console.log(`Line ${index + 1}: ${line}`);

    // Convert words to digits
    line = convertWordToDigit(line);

    // create a string of all digits by regex in a single line and join the digits of that line together
    const digitsOnly = line.match(/\d+/g).join("");
    console.log(`Line ${index + 1} digits: ${digitsOnly}`);

    // Find the first digit
    const firstDigit = digitsOnly[0];

    // Find the last digit
    const lastDigit = digitsOnly.slice(-1);

    console.log(`First digit: ${firstDigit} Last digit: ${lastDigit}`);

    // Add both digits as a number to the array:
    const combinedNumber = Number(firstDigit + lastDigit);
    console.log("combinedNumber", combinedNumber);
    desiredDigitsArray = [...desiredDigitsArray, combinedNumber];
  });

  console.log(`desiredDigitsArray: ${desiredDigitsArray}`);

  // convert the desired digits from strings to integers:
  const numberArray = [];
  for (let i = 0; i < desiredDigitsArray.length; i++) {
    numberArray.push(desiredDigitsArray[i]);
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
