// $( document ).ready(function() {
//   var days = getDaysTill()
//     , $daysCount = $('.days-count .count');

//   // Insert days count as indivitual digits so we can style them separatly.
//   days.forEach(function(day) {
//     $daysCount.append($('<strong></strong>', { class: 'digit', text: day }));
//   });
// });


window.onload = function () {
  var days = getDaysTill()
    , output = ''
    , daysCount  = document.getElementById("count");

  // Insert days count as indivitual digits so we can style them separatly.
  days.forEach(function(day) {
    output += '<strong class="digit">'+ day + '</strong>';
  });

  daysCount.innerHTML(output);
};

// Return and array with numer of days slip into individual digits.
function getDaysTill() {
  var today = new Date()
    , endDate = new Date("2017 jan 17")
    , diff =  endDate.getTime() - today.getTime()
    , DaysTill = Math.floor(diff / (1000 * 60 * 60 * 24))
    , DaysArray = []
    ;

  sNumber = DaysTill.toString();

  for (var i = 0, len = sNumber.length; i < len; i += 1) {
    DaysArray.push(+sNumber.charAt(i));
  }

  return DaysArray;
}


