// lab.js - Arrays and Objects
// Author: Shea Line <sline@ucsc.edu>
// Date: 10/24/2024

// Variables
let myTransport = ["truck", "bike", "skateboard", "walking", "friend's car"];
let myMainRide = {
  make: "Toyota",
  model: "Tacoma",
  color: "gray",
  year: 2003,
  age: function () {
    2024 - this.year;
  },
};

// Output
document.writeln("Kinds of transportation I use: " + myTransport.join(", ") + "<br>" + "<br>");
document.writeln("My Main Ride: <pre>", JSON.stringify(myMainRide, null, "\t"), "</pre>");