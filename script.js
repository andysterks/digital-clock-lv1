function displayClock() {
  const today = new Date();

  const dateDisplay = document.getElementById('date-display');

  const day = Days.getDayByIndex(today.getDay());
  const month = Months.getMonthByIndex(today.getMonth());
  const date = today.getDate();

  debugger;
  const timeDisplay = document.getElementById('time-display');

  const hours = addLeadingZero(today.getHours());
  const minutes = addLeadingZero(today.getMinutes());
  const seconds = addLeadingZero(today.getSeconds());

  timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}

function addLeadingZero(time) {
  return time < 10 ? `0${time}` : time;
}

/* const toggleButton = document.getElementById('toggle-btn');
toggleButton.addEventListener('click', function(e) {

}); */

setInterval(displayClock, 1000);
displayClock();