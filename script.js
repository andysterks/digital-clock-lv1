let isMilitaryTime = false;

function displayClock() {
  const today = new Date();

  const dateDisplay = document.getElementById('date-display');

  const day = Days.getDayByIndex(today.getDay());
  const month = Months.getMonthByIndex(today.getMonth());
  const date = DateUtility.addDateSuffix(today.getDate());
  const year = today.getFullYear();

  dateDisplay.textContent = `${day}, ${month} ${date} ${year}`;

  const timeDisplay = document.getElementById('time-display');

  const militaryHours = DateUtility.addLeadingZero(today.getHours());
  const standardHours = DateUtility.getStandardHours(militaryHours);
  const minutes = DateUtility.addLeadingZero(today.getMinutes());
  const seconds = DateUtility.addLeadingZero(today.getSeconds());

  timeDisplay.textContent = isMilitaryTime 
    ? `${militaryHours}:${minutes}:${seconds}`
    : `${standardHours}:${minutes}:${seconds} ${militaryHours > 12 ? 'PM' : 'AM'}`;
}

const toggleButton = document.getElementById('toggle-btn');
toggleButton.addEventListener('click', function(e) {
  isMilitaryTime = !isMilitaryTime;

  this.textContent = isMilitaryTime 
    ? 'Switch to Standard Time Format'
    : 'Switch to Military Time Format'
  
  
  displayClock();
});

setInterval(displayClock, 100);
displayClock();