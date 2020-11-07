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

// Loads locally saved data for rows
onload = function() {

  var text9 = localStorage.getItem("#row-9");
  
  if (text9 !== null) {
    $("#row-9").text(JSON.parse(text9));

   };

   var text10 = localStorage.getItem("#row-10");
  
  if (text10 !== null) {
    $("#row-10").text(JSON.parse(text10));

   };

   var text11 = localStorage.getItem("#row-11");
  
  if (text11 !== null) {
    $("#row-11").text(JSON.parse(text11));

   };

   var text12 = localStorage.getItem("#row-12");
  
  if (text12 !== null) {
    $("#row-12").text(JSON.parse(text12));

   };

   var text13 = localStorage.getItem("#row-13");
  
   if (text13 !== null) {
     $("#row-13").text(JSON.parse(text13));
 
    };

    var text14 = localStorage.getItem("#row-14");

    if (text14 !== null) {
      $("#row-14").text(JSON.parse(text14));
  
     };

     var text15 = localStorage.getItem("#row-15");

     if (text15 !== null) {
       $("#row-15").text(JSON.parse(text15));
   
      };

      var text16 = localStorage.getItem("#row-16");

      if (text16 !== null) {
        $("#row-16").text(JSON.parse(text16));
    
       };

       var text17 = localStorage.getItem("#row-17");

       if (text17 !== null) {
         $("#row-17").text(JSON.parse(text17));
     
        };

        var text18 = localStorage.getItem("#row-18");

        if (text18 !== null) {
          $("#row-18").text(JSON.parse(text18));
      
         };
  }

// Getting text in rows to save to local storage

$("#09").on("click", function(event){
  event.preventDefault();

  var todoItem9 = $("#row-9").val();

  console.log(todoItem9);

  var data9 = JSON.stringify(todoItem9);

  var getData9 = localStorage.setItem("#row-9", data9);

  console.log(data9);
  
});

/////////////////////////////////////////////////////////////////

  $("#10").on("click", function(event){
    event.preventDefault();
  
    var todoItem10 = $("#row-10").val();
  
    console.log(todoItem10);
  
    var data10 = JSON.stringify(todoItem10);
  
    var getData10 = localStorage.setItem("#row-10", data10);
  
    console.log(data10);
    
  });
  
/////////////////////////////////////////////////////////////////

$("#11").on("click", function(event){
  event.preventDefault();

  var todoItem11 = $("#row-11").val();

  console.log(todoItem11);

  var data11 = JSON.stringify(todoItem11);

  var getData11 = localStorage.setItem("#row-11", data11);

  console.log(data11);
  
});

/////////////////////////////////////////////////////////////////

$("#12").on("click", function(event){
  event.preventDefault();

  var todoItem12 = $("#row-12").val();

  console.log(todoItem12);

  var data12 = JSON.stringify(todoItem12);

  var getData12 = localStorage.setItem("#row-12", data12);

  console.log(data12);
  
});

/////////////////////////////////////////////////////////////////

$("#13").on("click", function(event){
  event.preventDefault();

  var todoItem13 = $("#row-13").val();

  console.log(todoItem13);

  var data13 = JSON.stringify(todoItem13);

  var getData13 = localStorage.setItem("#row-13", data13);

  console.log(data13);
  
});

/////////////////////////////////////////////////////////////////

$("#14").on("click", function(event){
  event.preventDefault();

  var todoItem14 = $("#row-14").val();

  console.log(todoItem14);

  var data14 = JSON.stringify(todoItem14);

  var getData14 = localStorage.setItem("#row-14", data14);

  console.log(data14);
  
});

/////////////////////////////////////////////////////////////////

$("#15").on("click", function(event){
  event.preventDefault();

  var todoItem15 = $("#row-15").val();

  console.log(todoItem15);

  var data15 = JSON.stringify(todoItem15);

  var getData15 = localStorage.setItem("#row-15", data15);

  console.log(data15);
  
});

/////////////////////////////////////////////////////////////////

$("#16").on("click", function(event){
  event.preventDefault();

  var todoItem16 = $("#row-16").val();

  console.log(todoItem16);

  var data16 = JSON.stringify(todoItem16);

  var getData16 = localStorage.setItem("#row-16", data16);

  console.log(data16);
  
});

/////////////////////////////////////////////////////////////////

$("#17").on("click", function(event){
  event.preventDefault();

  var todoItem17 = $("#row-17").val();

  console.log(todoItem17);

  var data17 = JSON.stringify(todoItem17);

  var getData17 = localStorage.setItem("#row-17", data17);

  console.log(data17);
  
});

/////////////////////////////////////////////////////////////////

$("#18").on("click", function(event){
  event.preventDefault();

  var todoItem18 = $("#row-18").val();

  console.log(todoItem18);

  var data18 = JSON.stringify(todoItem18);

  var getData18 = localStorage.setItem("#row-18", data18);

  console.log(data18);
  
});
