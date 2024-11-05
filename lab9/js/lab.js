// lab.js - Libraries & jQuery
// Author: Shea Line <sline@ucsc.edu>
// Date: 11/4/2024


// Add buttons to each section
console.log($(".special").length);
const sections = ["#challenge", "#problems", "#reflection", "#results"]; // array of section ids
sections.forEach(section => {
    $(section).append("<button class='special-btn'>Make Special</button>"); // adds button to each section
});

$(".special-btn").click(function() {
    
    // toggles special class on parent element of button could also do this: this.parentElement.classList.toggle("special");
    $(this).parent().toggleClass("special");

    // output which section became special to the output div
    const specialSections = $(".special");
    if (specialSections.length === 0) { // if no sections are special
        $(".output").html("Nothing is special.<br>");
    } else { // if there are special sections
        let specialText = ""; // create string to hold special sections
        specialSections.each(function() { // for each special section
            let id = $(this).attr("id"); // get the id of the section
            let capitalizedId = id.charAt(0).toUpperCase() + id.slice(1); // capitalize the first letter of the id
            specialText += capitalizedId + " became special!<br>"; // add the id to the special text
        });
        $(".output").html(specialText); // output the special text
    }
    console.log($(".special").length);
});