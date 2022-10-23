export default function convertUTCtoHour(utc) {
  const date = new Date(utc * 1000);

  const hours = date.getHours();
  const mins = date.getMinutes();

  return `${hours}:00`;
}
