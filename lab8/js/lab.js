// lab.js - Anon Functions and Callbacks
// Author: Shea Line <sline@ucsc.edu>
// Date: 10/28/2024


//functions to cube and square a number
function square(x) {
    return x * x;
}

//function tests
console.log("The square of 2 is " + square(2));

//variables
let numArray = [1, 2, 3, 4, 5];
console.log("Base number array: ", numArray);

// Output
let numArraySquared = numArray.map(square);
console.log("Number array squared: ",numArraySquared); // should output [1, 4, 9, 16, 25]

let numArrayCubed = numArray.map(function (x) {
    return x * x * x;
});
console.log("Number array cubed: ",numArrayCubed); // should output [1, 8, 27, 64, 125]

$("#base-output").append(" ",numArray.join(", "));
$("#square-output").append(" ",numArraySquared.join(", "));
$("#cubed-output").append(" ",numArrayCubed.join(", "));