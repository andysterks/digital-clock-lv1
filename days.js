const Days = (function() {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  function getDayByIndex(index) {
    return days[index];
  }

  return {
    getDayByIndex
  }
})();