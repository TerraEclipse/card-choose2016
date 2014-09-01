 var today = new Date()
   , endDate = new Date("2017 jan 17")
   , diff =  endDate.getTime() - today.getTime()
   , DaysTill = Math.floor(diff / (1000 * 60 * 60 * 24));

  console.log(DaysTill);
