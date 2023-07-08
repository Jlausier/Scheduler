// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

 // TODO: Add code to display the current date in the header of the pag
var todaysDate = dayjs().format('dddd, MM D YYYY');
$("#currentDay").html(todaysDate)


$(document).ready(function () {
  // TODO: Add a listener for click events on the save button. 
   //This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? 
  
  $('.saveBtn').on('click', function(){
    //get neighbor values
    var text = $(this).sibling('.description').val();
    var time = $(this).parent().attr('id')

    // store to localstorage
    localStorage.setItem(time, text);
  })
 


  function hourTracker(){

  var currentTime = dayjs().format('h');
  console.log(currentTime);
 //How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
//seperate each hour in the clock
  $(".time-block").each(function(){
    var timeBlock = parseInt($(this).attr('id').split('hour')[1]);
// TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  // set class values depending on hour
    if (timeBlock < currentTime){
      $(this).removeClass('future');
      $(this).removeClass('present');
      $(this).addClass('past');
    }
    else if (timeBlock === currentTime){
      $(this).removeClass('past')
      $(this).removeClass('future');
      $(this).addClass('present');
    }
    else {
      $(this).removeClass('present')
      $(this).removeClass('past');
      $(this).addClass('future');

    }
  })
}

 
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  //get all hourse from local storage

$('#hour9 .description').val(localStorage.getItem('hour9'));
$('#hour10 .description').val(localStorage.getItem('hour10'));
$('#hour11 .description').val(localStorage.getItem('hour11'));
$('#hour12 .description').val(localStorage.getItem('hour12'));
$('#hour13 .description').val(localStorage.getItem('hour13'));
$('#hour14 .description').val(localStorage.getItem('hour14'));
$('#hour15 .description').val(localStorage.getItem('hour15'));
$('#hour16 .description').val(localStorage.getItem('hour16'));
$('#hour17 .description').val(localStorage.getItem('hour17'));



hourTracker();
})
