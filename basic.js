function getDateFormats() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1; // 0-indexed
  const day = now.getDate();

  // First string: YYYY-M-D (no leading zeros)
  const first = `${year}-${month}-${day}`;

  // Weekday and month names
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June',
                  'July', 'August', 'September', 'October', 'November', 'December'];

  const weekdayName = weekdays[now.getDay()];
  const monthName = months[now.getMonth()];

  // Second string: "Weekday, Month D, YYYY" (no leading zero on day)
  const second = `${weekdayName}, ${monthName} ${day}, ${year}`;

  return [first, second];
}
