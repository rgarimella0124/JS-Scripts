var readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter Your Sentence ", answer => {
  let vowels = ["u", "e", "i", "a"];
  //array where we will store vowels that we will find
  let resultArray = [];

  //logic that compares the input variable's text to the vowels array. The goal is to find all the vowels in the input string.
  for (let inputIndex = 0; inputIndex < answer.length; inputIndex++) {
    for (let vowelsIndex = 0; vowelsIndex < vowels.length; vowelsIndex++) {
      //comparing the input letter to every letter in the vowels array. Pushing the characters from input that are vowels to the resultArray.
      if (answer[inputIndex] === vowels[vowelsIndex]) {
        resultArray.push(answer[inputIndex]);
      }
    }
    //double the 'e' and the 'u' that the program finds
    if (answer[inputIndex] === "e" || answer[inputIndex] === "u") {
      resultArray.push(answer[inputIndex]);
    }
  }

  //printing the result
  console.log(resultArray.join("").toUpperCase());

  rl.close();
});
