// lab.js - Loops
// Author: Shea Line <sline@ucsc.edu>
// Date: 11/18/2024

// returns an object that looks like this {3: "Fizz", 5: "Buzz", 7: "Boom"}
let maxNumbers = 5;
function getNumberObject() {
  let object = {};
  for (let i = 0; i <= maxNumbers; i++) {
    numID = "#num" + i;
    textID = "#text" + i;
    numValue = $(numID).val();
    textValue = $(textID).val();
    if (numValue != "" && textValue != "") {
      object[numValue] = textValue;
    }
  }
  return object;
}

function mapNumberObject(maxNums, object) {
  for (let i = 0; i < maxNums; i++) {
    outputStr = "";
    for(let element in object){
      if (i % element == 0) {
        outputStr += " "+object[element];
      }
    }
    if(outputStr){
      outputStr = i + " - " + outputStr + "! ";
    }
    else{
      outputStr = i + " - ";
    }
    $("#output").append("<p>" + outputStr + "</p>");
  }
}

$("#run").click(function () {
  $("#output").empty();
  let object = getNumberObject();
  let max = $("#stop").val();
  mapNumberObject(max, object);
});
