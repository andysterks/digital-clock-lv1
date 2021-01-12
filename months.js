const Months = (function() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  function getMonthByIndex(index) {
    return months[index];
  }

  return {
    getMonthByIndex: getMonthByIndex
  }
})();