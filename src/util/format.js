/**
 * Turns the date into a more readable format
 * @param {Date} date  - the date to format 
 * @returns a huaman readable date
 */

export function formatDate(date) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;;
}