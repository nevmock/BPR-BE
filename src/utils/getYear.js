function getYear(dateInput) {
  const date = new Date(dateInput);
  if (isNaN(date)) throw new Error('Invalid date input');
  return date.getFullYear();
}

export default getYear;
