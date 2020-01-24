var readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter The Current Weather in Kelvin Scale ", kelvin => {
  const celsius = kelvin - 273;
  let fahrenheit = celsius * (9 / 5) + 32;
  fahrenheit = Math.floor(fahrenheit);
  console.log(`The temperature is ${fahrenheit} degrees fahrenheit.`);

  rl.close();
});
