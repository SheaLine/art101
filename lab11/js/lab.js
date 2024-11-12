// lab.js - JavaScript Events and Forms
// Author: Shea Line <sline@ucsc.edu>
// Date: 11/4/2024


//function to sort/shuffle username
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


$("#submit").click(function(){
  let username = $("#user-name").val(); //get the username from the input field
  let shuffledName = sortUserName(username); //call the sortUserName function
  console.log(shuffledName);
  $("#output").append('<div class="text"><p>' + shuffledName + '</p></div>'); //display the shuffled name
});

