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
//  past
  if (rowHour < hour) {
  $(this).addClass("past");
  }
// present 
  else if (rowHour == hour) {
$(this).addClass("present")
  }
// future
  else {
  $(this).addClass("future")
  }

  console.log(rowHour);
});


