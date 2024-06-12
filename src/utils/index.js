/* eslint-disable import/prefer-default-export */
function postedAt(date) {
  const now = new Date();
  const posted = new Date(date);
  const diff = now - posted;
  const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor(diff / (1000 * 60 * 60));
  const diffMinutes = Math.floor(diff / (1000 * 60));
  const diffSeconds = Math.floor(diff / 1000);

  if (diffDays > 0) {
    return `${diffDays} days ago`;
  } if (diffHours > 0) {
    return `${diffHours} hours ago`;
  } if (diffMinutes > 0) {
    return `${diffMinutes} minutes ago`;
  } if (diffSeconds > 0) {
    return `${diffSeconds} seconds ago`;
  }
  return 'just now';
}

function convertToIndonesianDate(isoDateString) {
  const months = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
  ];

  // Create a new Date object from the ISO date string
  const date = new Date(isoDateString);

  // Get the day, month, and year from the Date object
  const day = date.getDate();
  const month = date.getMonth(); // Note: getMonth() returns 0-based month index
  const year = date.getFullYear();

  // Construct the date string in Indonesian format
  const indonesianDate = `${day.toString().padStart(2, '0')} ${months[month]} ${year}`;

  return indonesianDate;
}
export { postedAt, convertToIndonesianDate };
