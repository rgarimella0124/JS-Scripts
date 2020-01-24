var readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter Your Age ", myAge => {
  var firstYears = 2 * 10.5;
  var laterYears = (myAge - 2) * 4;
  var myAgeInDogYears = firstYears + laterYears;
  console.log("Your Age in dog years is " + myAgeInDogYears + ".");

  rl.close();
});
