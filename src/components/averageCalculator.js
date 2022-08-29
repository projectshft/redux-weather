const averageCalculator = (arr) => {
  const avg = arr.reduce((a,b) => a+b, 0) / arr.length
  return avg.toFixed(2)
}

export default averageCalculator