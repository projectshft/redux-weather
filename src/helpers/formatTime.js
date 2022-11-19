const formatTime = (forecast) => {
  const unixTimes = forecast.map((time) => new Date(time.dt * 1000));
  const hrs = unixTimes.map((time) => time.getHours());

  const formattedHrs = hrs.map((hour) => {
    if (hour <= 12) {
      return `${hour}AM`;
    }
    return `${hour - 12}PM`;
  });

  const days = unixTimes.map((time) => time.getDay());

  const daysOfWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

  const formattedDays = days.map((day) => daysOfWeek[day]);
  return { formattedDays, formattedHrs };
};

export default formatTime;
