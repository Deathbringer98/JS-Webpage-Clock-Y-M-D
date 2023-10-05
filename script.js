// This script will display a clock in the format Y/M/D in JS
// It uses the Date object to get the current date and time
// It uses the padStart method to add leading zeros if needed
// It uses the innerHTML property to update the clock element

// Get the clock element by its id
var clock = document.getElementById("clock");

// Define a function to update the clock
function updateClock() {
  // Get the current date and time
  var date = new Date();
  // Get the year, month and day
  var year = date.getFullYear();
  var month = date.getMonth() + 1; // Months are zero-based
  var day = date.getDate();
  // Format the date as Y/M/D
  var formattedDate = year + "/" + month.toString().padStart(2, "0") + "/" + day.toString().padStart(2, "0");
  // Update the clock element
  clock.innerHTML = formattedDate;
}

// Call the updateClock function once
updateClock();

// Set an interval to call the updateClock function every second
setInterval(updateClock, 1000);