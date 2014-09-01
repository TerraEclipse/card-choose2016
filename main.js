 var today = new Date()
   , endDate = new Date("2017 jan 17")
   , diff =  endDate.getTime() - today.getTime()
   , DaysTill = Math.floor(diff / (1000 * 60 * 60 * 24))
   , output = []
   ;

   sNumber = DaysTill.toString();

  for (var i = 0, len = sNumber.length; i < len; i += 1) {
    output.push(+sNumber.charAt(i));
  }

  console.log(output);
