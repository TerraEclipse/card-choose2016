$( document ).ready(function() {
  var $daysCount = $('.days-count .count');

  var days = getDaysTill();
  days.forEach(function(day) {
    console.log('day ' , day);
    $daysCount.append($('<strong></strong>', { class: 'digit', text: day }));
  });
});

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


