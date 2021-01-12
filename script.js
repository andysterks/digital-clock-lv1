function displayClock() {
  const today = new Date();

  const dateDisplay = document.getElementById('date-display');

  const day = Days.getDayByIndex(today.getDay());
  const month = Months.getMonthByIndex(today.getMonth());
  const date = addDateSuffix(today.getDate());
  const year = today.getFullYear();

  dateDisplay.textContent = `${day}, ${month} ${date} ${year}`;

  const timeDisplay = document.getElementById('time-display');

  const hours = addLeadingZero(today.getHours());
  const minutes = addLeadingZero(today.getMinutes());
  const seconds = addLeadingZero(today.getSeconds());

  timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}

function addLeadingZero(time) {
  return time < 10 ? `0${time}` : time;
}

function addDateSuffix(date) {
  const stDates = [ 1, 21, 31 ];
  if (stDates.includes(date)) {
    return `${date}st`;
  }

  const ndDates = [2, 22];
  if (ndDates.includes(date)) {
    return `${date}nd`
  } 

  const rdDates = [3, 23];
  if (rdDates.includes(date)) {
    return `${date}rd`
  }

  return `${date}th`
}

setInterval(displayClock, 1000);
displayClock();