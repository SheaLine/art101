// lab.js - AJAX
// Author: Shea Line <sline@ucsc.edu>
// Date: 11/25/2024


// "https://api.allorigins.win/get?url=" is a public proxy that bypasses CORS restrictions

let endpoint = "";
let comicNumber = 0;

// get the endpoint for the comic number
function getEndpoint(number){
  endpoint = "https://api.allorigins.win/get?url=" + encodeURIComponent(`https://xkcd.com/${number}/info.0.json`);
  console.log(endpoint);
}

function getData(endpoint) {
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
        handleData(data);
    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) { 
        // do stuff
        console.log("Error:", textStatus, errorThrown);
    }
  })
}

function handleData(data) {
  // the CORS bypass returns a JSON string with a "contents" key
  // we need to parse that JSON string to get the actual data
  let comicObj = JSON.parse(data.contents);
  console.log(comicObj);
  $("#output").show();
  $("#comic-title").text(comicObj.title);
  $("#comic-img").attr("src", comicObj.img);
}

function outputComic(comicNumber){
  $("#comic-number").text(`Comic Number: ${comicNumber}`);
  getEndpoint(comicNumber);
  getData(endpoint);
}

$("#next").click(function() {
  comicNumber++;
  outputComic(comicNumber);
});

$("#prev").click(function() {
  comicNumber--;
  outputComic(comicNumber);
});

