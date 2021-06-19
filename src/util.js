//averages forecast data
export const findAverage = (arr) => {
  let avg;
  const arrayCount = arr.length;

  let sum = arr.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);

  avg = sum / arrayCount;

  return Math.round(avg);
};
