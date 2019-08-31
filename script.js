//Date and time settings....

function currentTime() {
  var d = new Date();
  var minutes =
    d.getMinutes().toString().length == 1
      ? '0' + d.getMinutes()
      : d.getMinutes();
  var hours =
    d.getHours().toString().length == 1 ? '0' + d.getHours() : d.getHours();
  if (hours > 12) hours = hours - 12;

  var seconds =
    d.getSeconds().toString().length == 1
      ? '0' + d.getSeconds()
      : d.getSeconds();
  ampm = d.getHours() >= 12 ? 'PM' : 'AM';
  var timestr = hours + ' : ' + minutes + ' : ' + seconds + ' ' + ampm;
  document.getElementById('time').innerHTML = timestr;
}
setInterval(currentTime, 1000);

function currentDate() {
  var d = new Date();
  (months = [
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
    'Dec'
  ]),
    (days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);

  var datestr =
    days[d.getDay()] +
    ', ' +
    months[d.getMonth()] +
    ' ' +
    d.getDate() +
    ' ' +
    d.getFullYear();
  document.getElementById('date').innerHTML = datestr;
}
setInterval(currentDate, 1000);

//End of Date and Time settings...
