// TODO: Import `maths.js`
const newMath = require("./maths");
// TODO: Capture the values passed from the command line into these three variables: `operation`, `numOne` and `numTwo`
const operation = process.argv[2];
const numOne = parseInt(process.argv[3]);
const numTwo = parseInt(process.argv[4]);

console.log(operation, numOne, numTwo)

// TODO: Create a `switch` statement that accepts an `operation` parameter
switch(operation) {
    case "sum":
        console.log(newMath.sum(numOne, numTwo))
        break;
    case "sum":
        console.log(newMath.difference(numOne, numTwo))
        break;
    case "sum":
        console.log(newMath.product(numOne, numTwo))
        break;
    case "sum":
            console.log(newMath.quotient(numOne, numTwo))
            break;
    default:
        console.log("not a valid expression")    
}
// and each `case` uses the corresponding `maths` method
// to perform each math operation on the two numbers, `numOne` and `numTwo`
