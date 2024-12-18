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

function isAtLeastOnePairFilled() {
  for (let i = 0; i <= maxNumbers; i++) {
    let numVal = $("#num" + i).val();
    let textVal = $("#text" + i).val();
    console.log(`Checking pair ${i}: numVal="${numVal}", textVal="${textVal}"`);
    if (numVal && textVal) {
      console.log(`number: ${numVal} text: ${textVal}`);
      return true;
    }
  }
  return false;
}

$("#run").click(function () {
  $("#output").empty();
  //check that max has a value and at least one number/text pair
  if($("#stop").val() == ""){
    $("#output").text("Please enter a max number");
    return;
  } else if (!isAtLeastOnePairFilled()) {
    $("#output").text("Please enter at least one number/text pair");
    return;
  }else{
    let object = getNumberObject();
    let max = $("#stop").val();
    mapNumberObject(max, object);
  }
  
});
