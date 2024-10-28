// lab.js - Functions
// Author: Shea Line <sline@ucsc.edu>
// Date: 10/28/2024


//function to sort username
function sortUserName(username) {
  if (!username) { //if username is empty or null return empty string
    return "";
  }
  let names = username.toLowerCase().split(" "); //make username lowercase and split it into an array
  let shuffledNames = names.map(name => { //for each name in the array, shuffle the characters
    let shuffledName = name.split("").sort(() => 0.3 - Math.random()).join("");
    return shuffledName.charAt(0).toUpperCase() + shuffledName.slice(1).toLowerCase(); //capitalize the first letter of the shuffled name
  });
  return shuffledNames.join(" "); //join the shuffled names into a string
}

// Output
let username = window.prompt("Hello please enter your name so I can fix it!");
let outputDiv = document.getElementsByClassName("tag-content")[0];
outputDiv.innerHTML = sortUserName(username);