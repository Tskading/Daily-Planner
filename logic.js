var currentDay = document.querySelector("#currentDay");
var row = document.querySelector(".row");

var today = moment();
var hour = today.format("H");

// displays the current date in jumbotron
$("#currentDay").text(today.format("dddd, MMMM Do"));

// displays the day of the week above the calendar
$(".curDate").text(today.format("dddd"));

console.log(hour);

// this will allow me to change the background color based on the time
$(".row").each(function(){
 var rowHour = $(this).attr("name"); 
//  adds past class from css
  if (rowHour < hour) {
  $(this).addClass("past");
  }
// adds present class from css
  else if (rowHour == hour) {
$(this).addClass("present");
  }
// adds future class from css
  else {
  $(this).addClass("future");
  }

  // console.log(rowHour);
});

// Loads locally saved data for row 9
onload = function() {

  var text9 = localStorage.getItem("#row-9");
  
  if (text9 !== null) {
    $("#row-9").text(text9);

   };
  }

// Getting text in row 9 to save to local storage

$("#09").on("click", function(event){
  event.preventDefault();

  var todoItem9 = $("#row-9").val();

  console.log(todoItem9);

  var data9 = JSON.stringify(todoItem9);

  var getData9 = localStorage.setItem("#row-9", data9);

  console.log(data9);
  
});
