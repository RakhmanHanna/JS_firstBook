function getStrMonth(m) {
  var d = new Date();
  var Months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  var currentMonth = d.getMonth();

  if (m < 0 || m > 11) return Months[currentMonth];
  return Months[m];
}

console.log(getStrMonth(-1));
