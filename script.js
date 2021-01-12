function displayClock() {
  const today = new Date();

  const dateDisplay = document.getElementById('date-display');

  const day = Days.getDayByIndex(today.getDay());
  const month = Months.getMonthByIndex(today.getMonth());
  const date = DateUtility.addDateSuffix(today.getDate());
  const year = today.getFullYear();

  dateDisplay.textContent = `${day}, ${month} ${date} ${year}`;

  const timeDisplay = document.getElementById('time-display');

  const hours = DateUtility.addLeadingZero(today.getHours());
  const minutes = DateUtility.addLeadingZero(today.getMinutes());
  const seconds = DateUtility.addLeadingZero(today.getSeconds());

  timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(displayClock, 1000);
displayClock();