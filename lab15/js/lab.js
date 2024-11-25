// lab.js - AJAX
// Author: Shea Line <sline@ucsc.edu>
// Date: 11/25/2024

let endpoint = "https://excuser-three.vercel.app/v1/excuse"


$("#run").click(function () {
  $.ajax({
    // The URL for the request (from the api docs)
    url: endpoint,
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",
    // What do we do when the api call is successful
    //   all the action goes in here
    success: function(data) {
        outputExcuse(data);
    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) { 
        // do stuff
        console.log("Error:", textStatus, errorThrown);
    }
  })
});

function outputExcuse(data) {
  console.log(data);
  $("#output").show();
  $("#output").html(data[0].excuse);
}