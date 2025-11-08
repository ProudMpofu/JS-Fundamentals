const args = process.argv.slice(2); // get user arguments
const num = parseInt(args[0], 10);  // convert first argument to integer

if (!args[0] || isNaN(num)) {
  console.log("Not a number");
} else {
  console.log(`My number: ${num}`);
}
