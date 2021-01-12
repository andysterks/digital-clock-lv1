function displayClock() {
  const today = new Date();

  const dateDisplay = document.getElementById('date-display');

  const day = Days.getDayByIndex(today.getDay());
  const month = Months.getMonthByIndex(today.getMonth());
  const date = addDateSuffix(today.getDate());

  debugger;
  const timeDisplay = document.getElementById('time-display');
  timeDisplay.textContent = `${day}, ${month} ${date}`;

  const hours = addLeadingZero(today.getHours());
  const minutes = addLeadingZero(today.getMinutes());
  const seconds = addLeadingZero(today.getSeconds());

  timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}

function addLeadingZero(time) {
  return time < 10 ? `0${time}` : time;
}

function addDateSuffix(date) {
  const stDates = [ 1, 21, 31 ]

  if (stDates.includes(date)) {
    return `${date}st`;
  }

  if ([2, 22].includes(date)) {
    return `${date}nd`
  } 

  if ([3, 23].includes(date)) {
    return `${date}rd`
  }

  return `${date}th`
}

/* const toggleButton = document.getElementById('toggle-btn');
toggleButton.addEventListener('click', function(e) {

}); */

setInterval(displayClock, 1000);
displayClock();